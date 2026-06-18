# Livekolab — CSV Data Visualization Platform

A web-based data visualization platform that parses structured CSV data to produce interactive **bar charts** and **pie charts** with adaptive scaling, filtering, and dynamic color schemes.

---

## ✨ Features

- **CSV Parsing** — Upload any `.csv` file; headers and rows are auto-detected
- **Bar Chart** — Compare values across categories with per-bar dynamic HSL color coding and sort controls
- **Pie Chart** — Visualize proportional data with evenly distributed color segments
- **Column Selection** — Choose any column as X-axis (category) and Y-axis (value) via dropdown menus
- **Smart Type Detection** — Auto-detects numeric vs categorical columns and applies the correct aggregation
- **Filtering** — Filter rows by any column and value without re-uploading the file
- **Sort Order** — Sort bar chart data ascending or descending (numeric and alphabetical)
- **Optional Firebase Auth** — Sign-up / login powered by Firebase Auth (the main dashboard works without login)
- **Responsive Design** — Sidebar + chart layout adapts to mobile and desktop

---

## 🚀 Quick Start — No Login Required

> You can open the dashboard directly **without creating an account**.

```bash
# 1. Clone the repo
git clone https://github.com/your-username/Live-kolab.git
cd Live-kolab

# 2. Set up Firebase credentials (required to run auth features)
cp firebase-config.example.js firebase-config.js
# Open firebase-config.js and paste your Firebase project values (see below)

# 3. Serve locally (ES Modules require a local server — file:// URLs won't work)
npx serve .
# or
python3 -m http.server 3000
```

Then open **[http://localhost:3000/mainpage.html](http://localhost:3000/mainpage.html)** — the dashboard loads directly, **no login needed**.

---

## 🔑 Firebase Setup (for Login / Sign-up features)

The repo does **not** include any API keys. You need to supply your own Firebase credentials.

### Steps

1. Go to the [Firebase Console](https://console.firebase.google.com/) → your project → ⚙️ **Project Settings** → **Your apps** → **Web app**
2. Copy the config object shown there
3. In this repo, copy the example config file:
   ```bash
   cp firebase-config.example.js firebase-config.js
   ```
4. Open `firebase-config.js` and paste your values:
   ```js
   export const firebaseConfig = {
     apiKey:            "AIza...",
     authDomain:        "your-app.firebaseapp.com",
     databaseURL:       "https://your-app-default-rtdb.firebaseio.com/",
     projectId:         "your-app",
     storageBucket:     "your-app.firebasestorage.app",
     messagingSenderId: "123456789",
     appId:             "1:123456789:web:abc..."
   };
   ```

> ⚠️ `firebase-config.js` is listed in `.gitignore` — it will **never** be committed to Git.

---

## 📁 Project Structure

```
Live-kolab/
│
├── mainpage.html              # Dashboard — open this directly, no login needed
├── bargraph.html              # Interactive bar chart
├── piechart.html              # Interactive pie chart
├── about.html                 # About page
│
├── loginpage.html             # Login page (optional)
├── loginpage.css
├── loginpage.js               # Firebase login logic (imports from firebase-config.js)
│
├── signinpage.html            # Sign-up page (optional)
├── signinpage.css
├── firebaseauthentication.js  # Firebase sign-up logic (imports from firebase-config.js)
│
├── firebase-config.js         # ← YOUR real keys go here (gitignored, never committed)
├── firebase-config.example.js # ← Safe template committed to the repo
│
├── students.csv               # Sample CSV — student data
├── population.csv             # Sample CSV — population data
├── Countries_Population.csv   # Sample CSV — country population data
│
├── .gitignore                 # Prevents firebase-config.js and .env from being committed
└── README.md
```

---

## 🗂️ Usage

1. **Open the dashboard** — Navigate to `mainpage.html` (no login required)
2. **Choose a chart type** — Select Bar Chart or Pie Chart
3. **Upload CSV** — Click "Choose File" and upload any `.csv` file
4. **Configure** — Select your X-axis (category) and Y-axis (value) columns
5. **Filter** *(optional)* — Pick a filter column and enter a value to narrow results
6. **Generate** — Click "Generate Chart" to render the visualization

---

## 📊 Sample CSV Files

| File | Contents |
|---|---|
| `students.csv` | Student records with categorical columns |
| `population.csv` | Population data by region |
| `Countries_Population.csv` | Country-level population figures |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| Charts | [Chart.js](https://www.chartjs.org/) via CDN |
| Authentication | [Firebase Auth](https://firebase.google.com/products/auth) (optional) |
| Database | Firebase Realtime Database |
| Fonts | Google Fonts — Inter |

---

## 🔒 Security Notes

- **API keys are never hardcoded** in committed files. The `firebase-config.js` file (with real credentials) is in `.gitignore`.
- Firebase web API keys are client-side by design, but protect your app with [Firebase Security Rules](https://firebase.google.com/docs/rules) to restrict database access.
- You can also restrict your API key to specific domains in [Google Cloud Console → APIs & Credentials](https://console.cloud.google.com/apis/credentials).

---

## 📄 Pages Overview

| Page | File | Description |
|---|---|---|
| **Dashboard** | `mainpage.html` | Choose Bar or Pie chart — opens directly |
| **Bar Chart** | `bargraph.html` | Interactive bar chart with filter & sort |
| **Pie Chart** | `piechart.html` | Interactive pie chart with filter |
| **About** | `about.html` | Platform overview and feature list |
| Login | `loginpage.html` | Email/password sign-in (optional) |
| Sign Up | `signinpage.html` | Create a new account (optional) |
