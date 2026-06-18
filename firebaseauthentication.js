import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";
import { firebaseConfig } from "./firebase-config.js";

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
      savedata(user.uid, name, email);
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
});

function savedata(uid, name, email) {
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
