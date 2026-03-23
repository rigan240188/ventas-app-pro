import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getFirestore,
collection,
addDoc,
getDocs,
query,
where,
doc,
updateDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA71uOO8z03Ylih1Hmsji50XYzH7RD2ObA",
  authDomain: "ventas-productos-94747.firebaseapp.com",
  projectId: "ventas-productos-94747",
  storageBucket: "ventas-productos-94747.firebasestorage.app",
  messagingSenderId: "548670226909",
  appId: "1:548670226909:web:7a3c82fe4d923572f67634"
};

function irProductos(){
window.location.href = "productos.html"
}
window.irProductos = irProductos

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs, query, where, doc, updateDoc }

