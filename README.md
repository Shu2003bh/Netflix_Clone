# 🎬 Netflix Clone

A **Netflix-inspired streaming web app** built using **React.js**, **Firebase**, and **Redux** — featuring real-time authentication, responsive UI, and smooth media browsing experience.  
👉 **Live Demo:** [learningflix.netlify.app](https://learningflix.netlify.app/)  
> ⚠️ Note: The app uses TMDb API, which may not work on Indian networks. Please enable a **VPN** if the content is not visible.

---

## 🚀 Features

- 🔐 **User Authentication** — Secure login & signup using Firebase Authentication.  
- 🎞️ **Dynamic Movie Listings** — Fetches trending, popular, and recommended titles via TMDb API.  
- 🧠 **Redux State Management** — For global state handling of movie data and authentication.  
- 📱 **Fully Responsive UI** — Optimized for desktop, tablet, and mobile screens using TailwindCSS.  
- 🎨 **Netflix-like Design** — UI closely matches Netflix layout with hover effects and custom banners.  
- ⚡ **Real-time Updates** — Automatically fetches and updates movie data on page load.  
- ☁️ **Deployed on Netlify** — Continuous deployment with a live link available 24/7.

---

## 🛠️ Tech Stack

| Category | Technologies |
|-----------|--------------|
| **Frontend** | React.js, Redux, TailwindCSS |
| **Backend/Database** | Firebase (Auth + Firestore) |
| **API** | TMDb (The Movie Database API) |
| **Deployment** | Netlify |
| **Version Control** | Git, GitHub |

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

```bash
# Clone the repo
git clone https://github.com/Shu2003bh/Netflix-Clone.git

# Move to the project directory
cd Netflix-Clone

# Install dependencies
npm install

# Add your Firebase & TMDb credentials in .env file
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_TMDB_API_KEY=your_tmdb_api_key

# Start the development server
npm run dev
