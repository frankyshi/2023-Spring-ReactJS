// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // put your config here
  apiKey: "AIzaSyAbAcfeCbv9yZEdL3UJIGAIRZ6xKTEQZ9Y",
  authDomain: "reactjs-lesson-7.firebaseapp.com",
  databaseURL: "https://reactjs-lesson-7-default-rtdb.firebaseio.com",
  projectId: "reactjs-lesson-7",
  storageBucket: "reactjs-lesson-7.appspot.com",
  messagingSenderId: "898783110807",
  appId: "1:898783110807:web:83b6947d2ca68929532bd2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export { database };
