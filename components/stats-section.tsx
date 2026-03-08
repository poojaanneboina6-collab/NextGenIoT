"use client";

const stats = [
  {
    value: "95%",
    label: "Detection Accuracy",
    description: "AI-powered precision",
  },
  {
    value: "10,000+",
    label: "Farmers Helped",
    description: "Across multiple regions",
  },
  {
    value: "50+",
    label: "Crops Supported",
    description: "Major crop varieties",
  },
  {
    value: "24/7",
    label: "Availability",
    description: "Always ready to help",
  },
];

export function StatsSection() {
  return (
    <section className="border-y bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-bold text-primary sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 font-semibold text-foreground">{stat.label}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
