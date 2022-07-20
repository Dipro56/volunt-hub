// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBK9nTs1rfBYds8hUhuurlrukWGB6PfhLA',
  authDomain: 'volunt-hub-17afe.firebaseapp.com',
  projectId: 'volunt-hub-17afe',
  storageBucket: 'volunt-hub-17afe.appspot.com',
  messagingSenderId: '1022408058273',
  appId: '1:1022408058273:web:f3a3ba30edbf83098f97e0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
