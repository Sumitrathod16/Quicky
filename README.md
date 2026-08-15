# 🚀 Quicky — Interactive Tech Learning & Practice Platform

<p align="center">
  <img src="my-app/public/vite.svg" alt="Quicky Logo" width="80" height="80" />
</p>

<p align="center">
  <strong>Master modern software engineering, cloud computing, and AI through interactive roadmaps, structured syllabi, and hands-on assignments.</strong>
</p>

<p align="center">
  <a href="https://quicky-two.vercel.app" target="_blank">
    <img src="https://img.shields.io/badge/Live_Demo-quicky--two.vercel.app-6366f1?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
  </a>
  <img src="https://img.shields.io/badge/React-19.1-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/Vite-7.1-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite 7" />
  <img src="https://img.shields.io/badge/Firebase-v12-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase" />
</p>

---

## 🌐 Live Application
- **Production URL**: [https://quicky-two.vercel.app](https://quicky-two.vercel.app)
- **Deployment**: Hosted on Vercel with automated CI/CD and edge caching.

---

## ✨ Features & Highlights

### 📚 1. Comprehensive Course Catalog & Syllabi
Structured roadmaps and modular course units covering real-world tech stacks:
- **Frontend Development**: HTML5, CSS3, Modern JavaScript (ES6+), React 19.
- **Backend & Frameworks**: Node.js, Express, Python, Django, Flask, Java, Spring Boot, Hibernate, PHP.
- **Databases & Data Storage**: MongoDB, PostgreSQL / MySQL, Relational DBMS architecture.
- **Cloud & DevOps**: Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP).
- **Artificial Intelligence & ML**: Core AI concepts, Machine Learning algorithms, Deep Learning with neural networks.
- **Systems & Mobile**: C, C++, Flutter cross-platform development.

### 📝 2. Hands-On Assignments & Drills
- Interactive problem sets and assignment modules matching each topic.
- Structured milestones and progress tracking per course.

### ⚡ 3. Practice Dashboard & Speed Tests
- Built-in coding and typing speed challenges with live WPM calculation and error tracking.
- Interactive practice questions and quiz modules.

### 🔐 4. Authentication & User Profile
- **Authentication**: Email/password registration and Google OAuth powered by Firebase Auth.
- **User Dashboard**: Personalized user profiles with enrolled courses, completed assignment history, activity streaks, and calendar scheduling (`react-calendar`).

### 🎨 5. Modern UI & Performance
- **Micro-Animations**: Smooth page and element transitions powered by `framer-motion`.
- **Analytics & Observability**: Integrated with `@vercel/analytics` and `@vercel/speed-insights`.
- **Responsive Layout**: Designed for mobile, tablet, and widescreen desktop displays.

---

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| **Frontend Framework** | [React 19](https://react.dev/), [React Router v7](https://reactrouter.com/) |
| **Build & Tooling** | [Vite 7](https://vitejs.dev/), [ESLint 9](https://eslint.org/) |
| **Authentication & Database** | [Firebase Auth & Cloud Firestore](https://firebase.google.com/) |
| **State & Data Visualization** | Context API, [Recharts](https://recharts.org/), [React Calendar](https://github.com/wojtekmaj/react-calendar) |
| **Styling & Animations** | Vanilla CSS Design System, [Framer Motion](https://www.framer.com/motion/) |
| **Deployment & Hosting** | [Vercel](https://vercel.com/) |

---

## 📁 Project Structure

```text
Quicky/
├── my-app/                       # Main React + Vite SPA
│   ├── public/                   # Static assets & icons
│   ├── src/
│   │   ├── assets/               # SVGs, brand logos, images
│   │   ├── components/
│   │   │   ├── Assignment/       # Interactive assignment modules per subject
│   │   │   ├── courses/          # Course syllabus & content pages
│   │   │   ├── footer/           # About, FAQ, Terms, Privacy, Careers
│   │   │   ├── home/             # Landing page subcomponents & sections
│   │   │   ├── ExplorePage.jsx   # Course catalog exploration
│   │   │   ├── Features.jsx      # Feature highlights
│   │   │   ├── HeroSection.jsx   # Hero banner & CTA
│   │   │   ├── Login.jsx         # Sign in modal & page
│   │   │   ├── Navbar.jsx        # Navigation bar with responsive drawer
│   │   │   ├── PracticeDashboard.jsx # Drills & progress hub
│   │   │   ├── Profile.jsx       # User stats, calendar & enrolled courses
│   │   │   ├── Sign-up.jsx       # Registration workflow
│   │   │   ├── SpeedTest.jsx     # Coding/typing speed test
│   │   │   └── Support.jsx       # Help center & contact form
│   │   ├── context/              # Authentication & User state contexts
│   │   ├── firebase/             # Firebase SDK initialization & config
│   │   ├── services/             # Firestore user & practice services
│   │   ├── App.jsx               # Router & lazy route definitions
│   │   └── main.jsx              # React DOM root entry point
│   ├── .env.example              # Sample environment configuration
│   ├── firestore.rules           # Cloud Firestore security rules
│   ├── package.json              # App dependencies & build scripts
│   └── vite.config.js            # Vite configuration & plugins
├── package.json                  # Root monorepo / deployment scripts
├── vercel.json                   # Vercel routing & build configuration
└── README.md                     # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `v18.0.0` or higher ([Download Node.js](https://nodejs.org/))
- **npm**: `v9.0.0` or higher (bundled with Node.js)
- A **Firebase Project** with Authentication and Firestore enabled.

---

### 1. Clone the Repository
```bash
git clone https://github.com/Sumitrathod16/Quicky.git
cd Quicky
```

### 2. Install Dependencies
You can install dependencies from the root directory:
```bash
npm install --prefix my-app
```

---

### 3. Configure Environment Variables
Create a `.env` file inside the `my-app` folder:

```bash
cp my-app/.env.example my-app/.env
```

Populate the `.env` file with your Firebase project credentials:

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

---

### 4. Run Development Server
Start the local Vite development server with Hot Module Replacement (HMR):

```bash
# From root directory:
npm run dev

# Or directly from my-app:
cd my-app
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

### 5. Build for Production
To create an optimized production build:

```bash
# From root directory:
npm run build

# Or directly from my-app:
cd my-app
npm run build
```

Preview the production build locally:
```bash
cd my-app
npm run preview
```

---

## 🚢 Deployment to Vercel

The project is pre-configured for seamless deployment on [Vercel](https://vercel.com/).

1. **Push your code** to GitHub.
2. **Import the repository** into Vercel.
3. Configure the **Environment Variables** (`VITE_FIREBASE_*`) in the Vercel Project Settings.
4. The deployment will automatically run:
   - **Install Command**: `npm install --prefix my-app`
   - **Build Command**: `npm run build --prefix my-app`
   - **Output Directory**: `my-app/dist`

Or deploy directly via Vercel CLI:
```bash
npx vercel --prod
```

---

## 🔒 Firestore Security Rules
Make sure your Firestore rules allow authenticated users to read and update their user records:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

---

## 🤝 Contributing
Contributions, issues, and feature requests are welcome!
1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your Changes (`git commit -m 'feat: Add some AmazingFeature'`).
4. Push to the Branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

<p align="center">Made with ❤️ by <a href="https://github.com/Sumitrathod16">Sumit Rathod</a>&
<a href= "https://github.com/areenphadtare"> Areen Phadtare</a></p>
