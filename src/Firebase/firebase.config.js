// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBGjd8emnF0KHPhQbU_BPsNLanQoSPTio",
  authDomain: "toys-market-client.firebaseapp.com",
  projectId: "toys-market-client",
  storageBucket: "toys-market-client.appspot.com",
  messagingSenderId: "1057473415757",
  appId: "1:1057473415757:web:ea871d5cc7be3a431dea04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;