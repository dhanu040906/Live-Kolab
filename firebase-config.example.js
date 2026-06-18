// ✅  This file IS committed to the repo — it shows the shape of firebase-config.js
//    without exposing real credentials.
//
// Setup steps:
//   1. Copy this file → firebase-config.js
//   2. Replace every placeholder below with your real Firebase project values
//   3. Get values from: Firebase Console → Project Settings → Your apps → Web app config

export const firebaseConfig = {
  apiKey:            "PASTE_YOUR_API_KEY_HERE",
  authDomain:        "PASTE_YOUR_AUTH_DOMAIN_HERE",
  databaseURL:       "PASTE_YOUR_DATABASE_URL_HERE",
  projectId:         "PASTE_YOUR_PROJECT_ID_HERE",
  storageBucket:     "PASTE_YOUR_STORAGE_BUCKET_HERE",
  messagingSenderId: "PASTE_YOUR_MESSAGING_SENDER_ID_HERE",
  appId:             "PASTE_YOUR_APP_ID_HERE"
};
