# Livekolab — CSV Data Visualization Platform

A web-based data visualization platform that parses structured CSV data to produce interactive **bar charts** and **pie charts** with adaptive scaling, filtering, and dynamic color schemes.

---

## Features

- **CSV Parsing** — Upload any `.csv` file and the platform automatically reads headers and rows
- **Bar Chart** — Compare values across categories with per-bar dynamic HSL color coding and sort controls
- **Pie Chart** — Visualize proportional data with evenly distributed color segments
- **Column Selection** — Choose any column as X-axis (category) and Y-axis (value) via dropdown menus
- **Smart Type Detection** — Automatically detects whether a column is numeric or categorical and applies the correct aggregation (sum vs. count)
- **Filtering** — Filter rows by any column and value without re-uploading the file
- **Sort Order** — Sort bar chart data ascending or descending (numeric and alphabetical)
- **Firebase Authentication** — Secure email/password login and sign-up powered by Firebase Auth
- **Responsive Design** — Sidebar + chart layout adapts to mobile and desktop screens

---

## Project Structure

```
Agglomeration/
│
├── loginpage.html          # Login page
├── loginpage.css           # Login page styles
├── loginpage.js            # Firebase login logic (ES Module)
│
├── signinpage.html         # Sign-up page
├── signinpage.css          # Sign-up page styles
├── firebaseauthentication.js  # Firebase sign-up logic (ES Module)
│
├── mainpage.html           # Dashboard — choose chart type
├── bargraph.html           # Bar chart page
├── piechart.html           # Pie chart page
├── about.html              # About page
│
├── students.csv            # Sample CSV — student data
├── population.csv          # Sample CSV — population data
├── Countries_Population.csv  # Sample CSV — country population data
│
└── README.md
```

---

## Getting Started

> **Important:** The login and sign-up pages use ES Modules (`import`/`export`). Browsers block ES Modules when opening HTML directly as a `file:///` URL. You **must** serve the project through a local server.

### Run locally

```bash
# Using npx serve (recommended)
npx serve .

# Or using Python
python3 -m http.server 3000
```

Then open **[http://localhost:3000/loginpage.html](http://localhost:3000/loginpage.html)** in your browser.

---

## Usage

1. **Sign up** — Create an account on the Sign Up page
2. **Log in** — Sign in with your email and password
3. **Choose chart type** — Select Bar Chart or Pie Chart from the dashboard
4. **Upload CSV** — Click "Choose File" and upload any `.csv` file
5. **Configure** — Select your X-axis (category) and Y-axis (value) columns
6. **Filter** *(optional)* — Pick a filter column and enter a value to narrow down the data
7. **Generate** — Click "Generate Chart" to render the visualization

---

## Sample CSV Files

The repo includes three ready-to-use sample files:

| File | Contents |
|---|---|
| `students.csv` | Student records with categorical columns |
| `population.csv` | Population data by region |
| `Countries_Population.csv` | Country-level population figures |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| Charts | [Chart.js](https://www.chartjs.org/) via CDN |
| Authentication | [Firebase Auth](https://firebase.google.com/products/auth) |
| Database | Firebase Realtime Database |
| Fonts | Google Fonts — Inter |

---

## Pages Overview

| Page | Route | Description |
|---|---|---|
| Login | `loginpage.html` | Email/password sign-in |
| Sign Up | `signinpage.html` | Create a new account |
| Dashboard | `mainpage.html` | Choose between Bar or Pie chart |
| Bar Chart | `bargraph.html` | Interactive bar chart with filter & sort |
| Pie Chart | `piechart.html` | Interactive pie chart with filter |
| About | `about.html` | Platform overview and feature list |

---

## Notes

- All pages require authentication. After logging out, the user is redirected to the login page.
- Comma-formatted numbers (e.g. `1,000,000`) in CSV files are handled correctly during numeric parsing.
- Rows with mismatched column counts are automatically skipped during CSV parsing.
