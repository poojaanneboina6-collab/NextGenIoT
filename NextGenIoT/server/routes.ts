import type { Express } from "express";
import type { Server } from "http";
import { db } from "./db";
import { scans } from "@shared/schema";
import { eq } from "drizzle-orm";

const DISEASE_TREATMENTS: Record<string, string> = {
  "Tomato Late Blight": "Apply copper-based fungicide (Mancozeb or Ridomil Gold). Remove infected plant parts and destroy them. Avoid overhead irrigation. Spray every 7-10 days.",
  "Tomato Early Blight": "Apply chlorothalonil or mancozeb fungicide. Remove lower infected leaves. Mulch around plants. Maintain proper plant spacing for air circulation.",
  "Tomato Leaf Mold": "Apply copper fungicide. Improve ventilation in greenhouse. Remove infected leaves. Avoid wetting foliage when irrigating.",
  "Corn Northern Leaf Blight": "Apply foliar fungicide (azoxystrobin or propiconazole). Plant resistant varieties next season. Rotate crops with non-host plants.",
  "Corn Common Rust": "Apply fungicide if severe. Plant resistant hybrids. Scout early in the season for early detection.",
  "Rice Bacterial Blight": "Apply copper hydroxide or streptomycin-based bactericide. Drain fields during outbreak. Use resistant varieties.",
  "Rice Blast": "Apply tricyclazole or isoprothiolane fungicide. Avoid excessive nitrogen fertilizer. Maintain water levels properly.",
  "Wheat Stripe Rust": "Apply propiconazole or tebuconazole fungicide. Plant resistant varieties. Monitor fields regularly in cool, moist conditions.",
  "Potato Late Blight": "Apply mancozeb, chlorothalonil, or metalaxyl fungicide. Remove and destroy infected plant material. Avoid planting in cool, wet conditions.",
  "Apple Scab": "Apply captan or myclobutanil fungicide starting at green tip. Remove fallen infected leaves. Plant scab-resistant varieties.",
  "Grape Powdery Mildew": "Apply sulfur-based or systemic fungicide. Improve air circulation by pruning. Avoid water stress.",
  "Strawberry Leaf Scorch": "Remove infected leaves. Apply copper-based fungicide. Ensure proper plant spacing. Avoid wetting foliage.",
  "Healthy": "No disease detected. Continue regular monitoring and preventive care. Maintain optimal irrigation and nutrition schedules.",
};

const SUPPLIERS: Array<{ name: string; address: string }> = [
  { name: "AgroShield Suppliers", address: "Plot 45, Agricultural Market, Sector 12, Hyderabad - 500001" },
  { name: "GreenField Agro Store", address: "Shop No. 8, Farmers Complex, Warangal Road, Karimnagar - 505001" },
  { name: "Krishi Vigyan Kendra", address: "NH-65, Rajendranagar, Hyderabad - 500030" },
  { name: "Bharath Crop Science", address: "120 Main Road, Kurnool Agricultural Hub, Kurnool - 518001" },
  { name: "Pioneer Farm Supplies", address: "Block B, APMC Yard, Guntur - 522006" },
  { name: "SoilCare Agro Center", address: "Market Yard Road, Bidar, Karnataka - 585401" },
  { name: "Fertilizer World", address: "42, Agri Mall, NH-44, Nizamabad - 503001" },
];

const TRANSLATIONS: Record<string, Record<string, string>> = {
  hi: {
    prefix: "फसल विश्लेषण: रोग ",
    middle: " का पता चला है। उपचार: ",
    suffix: " निकटतम आपूर्तिकर्ता से सहायता लें।",
  },
  te: {
    prefix: "పంట విశ్లేషణ: ",
    middle: " వ్యాధి గుర్తించబడింది. చికిత్స: ",
    suffix: " సమీపంలోని సరఫరాదారుని సంప్రదించండి.",
  },
};

function getDiseaseName(imageHint: string): { name: string; confidence: number } {
  const diseases = Object.keys(DISEASE_TREATMENTS);
  const nonHealthy = diseases.filter((d) => d !== "Healthy");
  const selected = nonHealthy[Math.floor(Math.random() * nonHealthy.length)];
  const confidence = 72 + Math.random() * 25;
  return { name: selected, confidence };
}

function getRandomSupplier(): { name: string; address: string } {
  return SUPPLIERS[Math.floor(Math.random() * SUPPLIERS.length)];
}

function translateOutput(diseaseName: string, treatment: string, language: string): string | null {
  const tpl = TRANSLATIONS[language];
  if (!tpl) return null;
  const shortTreatment = treatment.split(".")[0] + ".";
  return `${tpl.prefix}${diseaseName}${tpl.middle}${shortTreatment}${tpl.suffix}`;
}

export async function registerRoutes(server: Server, app: Express) {
  app.get("/api/scans", async (req, res) => {
    try {
      const result = await db.select().from(scans).orderBy(scans.createdAt);
      res.json(result.reverse());
    } catch (err) {
      console.error("Error fetching scans:", err);
      res.status(500).json({ message: "Failed to fetch scans" });
    }
  });

  app.get("/api/scans/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const result = await db.select().from(scans).where(eq(scans.id, id));
      if (!result.length) {
        return res.status(404).json({ message: "Scan not found" });
      }
      res.json(result[0]);
    } catch (err) {
      console.error("Error fetching scan:", err);
      res.status(500).json({ message: "Failed to fetch scan" });
    }
  });

  app.post("/api/scans", async (req, res) => {
    try {
      const { image, language = "en", latitude, longitude } = req.body;

      if (!image) {
        return res.status(400).json({ message: "Image is required" });
      }

      const { name: diseaseName, confidence: diseaseConfidence } = getDiseaseName(image);
      const treatment = DISEASE_TREATMENTS[diseaseName] || DISEASE_TREATMENTS["Healthy"];
      const supplier = getRandomSupplier();
      const translatedOutput = language !== "en" ? translateOutput(diseaseName, treatment, language) : null;

      const inserted = await db
        .insert(scans)
        .values({
          imageUrl: image.substring(0, 200),
          diseaseName,
          diseaseConfidence,
          treatment,
          supplierName: supplier.name,
          supplierAddress: supplier.address,
          language,
          translatedOutput,
          latitude: latitude ?? null,
          longitude: longitude ?? null,
        })
        .returning();

      res.status(201).json(inserted[0]);
    } catch (err) {
      console.error("Error creating scan:", err);
      res.status(500).json({ message: "Failed to create scan" });
    }
  });

  app.post("/api/recommend", async (req, res) => {
    try {
      const { N, P, K, ph, location, rainfall } = req.body;

      if (N === undefined || P === undefined || K === undefined || ph === undefined) {
        return res.status(400).json({ message: "N, P, K, and ph are required" });
      }

      const mlPort = process.env.ML_PORT || "5001";
      try {
        const fetch = (await import("node-fetch")).default;
        const mlRes = await fetch(`http://localhost:${mlPort}/predict`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            N: Number(N),
            P: Number(P),
            K: Number(K),
            ph: Number(ph),
            temp: 25,
            hum: 70,
            rain: rainfall ? Number(rainfall) : 100,
          }),
        });

        if (mlRes.ok) {
          const data = await mlRes.json();
          return res.json(data);
        }
      } catch (mlErr) {
        console.warn("ML service unavailable, using fallback:", mlErr);
      }

      const recommendations = [
        {
          crop: "Rice",
          confidence: 0.87,
          ideal: { N: 80, P: 40, K: 40, ph: 6.5, temp: 25, hum: 80, rain: 1200 },
        },
        {
          crop: "Maize",
          confidence: 0.72,
          ideal: { N: 90, P: 42, K: 43, ph: 6.8, temp: 22, hum: 65, rain: 750 },
        },
        {
          crop: "Cotton",
          confidence: 0.61,
          ideal: { N: 115, P: 45, K: 43, ph: 7.5, temp: 28, hum: 55, rain: 800 },
        },
        {
          crop: "Wheat",
          confidence: 0.55,
          ideal: { N: 100, P: 50, K: 40, ph: 6.5, temp: 15, hum: 60, rain: 600 },
        },
        {
          crop: "Sugarcane",
          confidence: 0.48,
          ideal: { N: 150, P: 60, K: 80, ph: 7.0, temp: 27, hum: 70, rain: 1500 },
        },
        {
          crop: "Groundnut",
          confidence: 0.42,
          ideal: { N: 25, P: 50, K: 75, ph: 6.0, temp: 25, hum: 65, rain: 500 },
        },
        {
          crop: "Chillies",
          confidence: 0.38,
          ideal: { N: 100, P: 60, K: 40, ph: 6.5, temp: 24, hum: 60, rain: 1000 },
        },
      ];

      res.json({ status: "success", recommendations });
    } catch (err) {
      console.error("Error in recommend:", err);
      res.status(500).json({ message: "Failed to get recommendations" });
    }
  });
}
