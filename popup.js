// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
import { getAuth ,GoogleAuthProvider, signInWithRedirect, getRedirectResult, signInWithPopup, signOut } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnR4jgWRrWk87bCNTacR1wzDuez2bIi8o",
authDomain: "grammatic-auth.firebaseapp.com",
projectId: "grammatic-auth",
storageBucket: "grammatic-auth.appspot.com",
messagingSenderId: "84170781742",
appId: "1:84170781742:web:63191dfa3dac1052e2dbbf",
measurementId: "G-MLJB89T3PD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);

// gmail login------------------------------------------------------
gmail_login.addEventListener('click',(e) => {
 


// sign in with popup tab
signInWithPopup(auth, provider)
.then((result) => {
  // This gives you a Google Access Token. You can use it to access the Google API.
  const credential = GoogleAuthProvider.credentialFromResult(result);
  const token = credential.accessToken;
  // The signed-in user info.
  const user = result.user;
  // Save the user's display name in localStorage
  localStorage.setItem("userDisplayName", user.displayName);

  // alert(user.displayName);
  const popupWidth = 800;
  const popupHeight = 600;
  const left = (window.screen.width / 2) - (popupWidth / 2);
  const top = (window.screen.height / 2) - (popupHeight / 2);
  window.open("menu.html", "Menu", `width=${popupWidth},height=${popupHeight},left=${left},top=${top}`);
  // ...
}).catch((error) => {
  // Handle Errors here.
  const errorCode = error.code;
  const errorMessage = error.message;
  // The email of the user's account used.
  const email = error.email;
  // The AuthCredential type that was used.
  const credential = GoogleAuthProvider.credentialFromError(error);
  // ...

  alert(errorMessage);
});
});

//gmail login ------------------------------------------------------

