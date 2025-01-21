import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // Your Firebase config object from GoogleService-Info.plist
  apiKey: "AIzaSyCYMiAUpnPj8-mq1yHJbpxMKfF-7nh1Cmw",
  authDomain: "salamtech-d2c77.firebaseapp.com",  // PROJECT_ID + .firebaseapp.com
  projectId: "salamtech-d2c77",
  storageBucket: "salamtech-d2c77.firebasestorage.app",
  messagingSenderId: "24643262603",  // GCM_SENDER_ID
  appId: "1:24643262603:ios:94b0fe957f504ce2e15c8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 