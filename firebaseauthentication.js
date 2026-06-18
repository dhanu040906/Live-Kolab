import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBIfFs_76KN0Mx6vLbeni8j2QIqEDfOOLE",
  authDomain: "authentication-final-4e0cf.firebaseapp.com",
  databaseURL: "https://authentication-final-4e0cf-default-rtdb.firebaseio.com/",
  projectId: "authentication-final-4e0cf",
  storageBucket: "authentication-final-4e0cf.firebasestorage.app",
  messagingSenderId: "899696975212",
  appId: "1:899696975212:web:3aa5337e8d6014de98a749"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

const submit = document.getElementById('submit');

submit.addEventListener("click", function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (!name || !email || !password) {
    alert("Please fill in all fields!");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      // Save user details to Firebase database right after account creation
      savedata(user.uid, name, email);
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
});

function savedata(uid, name, email) {
  // Store data under /users/{uid}/ so only the owner can access it
  const userRef = ref(database, 'users/' + uid);

  set(userRef, {
    name: name,
    email: email,
    createdAt: new Date().toISOString()
  })
  .then(() => {
    console.log("User data saved successfully under UID:", uid);
    alert("Account created successfully!");
    window.location.href = "loginpage.html";
  })
  .catch((error) => {
    console.error("Error saving user data:", error);
    alert("Account created but profile could not be saved: " + error.message);
    window.location.href = "loginpage.html";
  });
}
