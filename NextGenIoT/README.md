# NextGenIoT - Crop Disease Identification System

🌱 **NextGenIoT** is an AI-powered crop disease identification and recommendation system that helps farmers instantly identify plant diseases through image analysis and provides treatment recommendations in multiple languages.

## Features

- 🖼️ **Instant Disease Detection**: Upload plant images for immediate disease identification
- 🌐 **Multi-Language Support**: Get results in English, Hindi, and Telugu
- 💊 **Treatment Recommendations**: Detailed cure instructions and prevention measures
- 🏥 **Supplier Information**: Local agricultural supplier recommendations
- 📊 **Crop Recommendations**: Soil-based crop suitability analysis
- 💾 **Data Persistence**: SQLite database for storing analysis history

## Tech Stack

- **Frontend**: React + TypeScript + Vite + Tailwind CSS
- **Backend**: Node.js + Express + TypeScript
- **Database**: SQLite with Drizzle ORM
- **AI**: Google Gemini API integration (with fallback)
- **UI**: Radix UI components
- **Deployment**: Railway

## Quick Start

1. **Upload Plant Image**: Take a photo of your diseased plant
2. **Select Language**: Choose English, Hindi, or Telugu
3. **Get Instant Results**: Receive disease diagnosis and treatment
4. **Follow Recommendations**: Apply suggested treatments and prevention

## API Endpoints

- `POST /api/scans` - Analyze plant disease from image
- `GET /api/scans` - Get analysis history
- `POST /api/recommend` - Get crop recommendations based on soil data

## Supported Languages

- 🇺🇸 **English**: Complete analysis in English
- 🇮🇳 **Hindi**: हिन्दी में पूरा विश्लेषण
- 🇮🇳 **Telugu**: తెలుగు లో పూర్తి విశ్లేషణ

## Deployment

This application is deployed on Railway and accessible at: [Your Railway URL]

---

Built with ❤️ for farmers worldwide