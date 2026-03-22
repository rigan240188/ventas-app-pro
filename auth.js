import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

  // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIWRZ4GHFuKunzt7vti_0FerEAS5YdRdk",
  authDomain: "ventas-app-pro-5c24e.firebaseapp.com",
  projectId: "ventas-app-pro-5c24e",
  storageBucket: "ventas-app-pro-5c24e.firebasestorage.app",
  messagingSenderId: "376987697639",
  appId: "1:376987697639:web:ac65890ac4480c16067d42"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// REGISTRO
window.registrar = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Usuario registrado correctamente");
    window.location.href = "login.html";
  } catch (error) {
    alert("Error: " + error.message);
  }
};

// LOGIN
window.login = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login exitoso");
    window.location.href = "index.html"; // redirige al CRUD
  } catch (error) {
    alert("Error: " + error.message);
  }
};
