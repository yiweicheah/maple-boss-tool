import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: "maple-boss-tool.firebaseapp.com",
  projectId: "maple-boss-tool",
  storageBucket: "maple-boss-tool.appspot.com",
  messagingSenderId: "585083687927",
  appId: "1:585083687927:web:14ac7596b662d6217914f2",
  measurementId: "G-SSKTJS3T02",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
