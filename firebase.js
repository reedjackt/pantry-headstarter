'use client';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDgTYKmWgZ37ZsOW3b2H7Zz13lDO2DQQik",
    authDomain: "pantry-d4f51.firebaseapp.com",
    projectId: "pantry-d4f51",
    storageBucket: "pantry-d4f51.appspot.com",
    messagingSenderId: "389985028238",
    appId: "1:389985028238:web:4c2502600b1a93a050a1df",
    measurementId: "G-57YCFS706B"
  };
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };


