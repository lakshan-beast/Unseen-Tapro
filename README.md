# 🗺️ Unseen Tapro - Sri Lanka's Hidden Gems Explorer

Unseen Tapro is a modern travel exploration web platform dedicated to uncovering and showcasing the hidden gems, lesser-known attractions, and offbeat destinations across Sri Lanka. Built with a responsive interface, it allows travelers to discover unique places while empowering the community to suggest new spots.

## 🚀 Live Demo
🔗 Live Link: [https://unseentapro.vercel.app](https://unseentapro.vercel.app)

## ✨ Key Features
- Hidden Gem Discovery: Browse unique and beautiful travel destinations in Sri Lanka sorted by districts.
- Interactive UI Cards: Clean grid layout featuring rich visual card overlays for an immersive user experience.
- Social Engagement: Real-time features allowing users to Like and Bookmark/Save their favorite places.
- Community-Driven Data: A dedicated submission system where users can recommend new hidden destinations.
- Admin Approval Workflow: Secure submission handling via Firebase to filter spam; suggested content only goes live after review.
- Reporting System: Users can report inaccurate details or policy violations for continuous quality control.

## 🛠️ Tech Stack
- Frontend: React.js, Tailwind CSS / SASS
- Backend & Database: Firebase Firestore
- Storage: Firebase Cloud Storage (for high-quality destination images)
- Deployment: Vercel

## 🛡️ Database & Security Structure
To maintain data integrity without forcing user registration, the system leverages secure Firebase Security Rules:
- **places Collection:** Publicly readable by all users but strictly write-locked (Modifiable only via Firebase Console/Admin).
- **suggestions Collection:** Anyone can create/submit data through the community banner form, but reading, editing, or deleting is completely restricted to the admin.

---
Made with ❤️ for Sri Lanka Travel Exploration.