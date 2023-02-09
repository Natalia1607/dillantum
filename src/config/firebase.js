import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBWCrtCupEITyjIDN6psw1OW9tzXd0FRTA",
  authDomain: "dillantum-realestate-356f3.firebaseapp.com",
  databaseURL: "https://dillantum-realestate-356f3-default-rtdb.firebaseio.com",
  projectId: "dillantum-realestate-356f3",
  storageBucket: "dillantum-realestate-356f3.appspot.com",
  messagingSenderId: "793555992554",
  appId: "1:793555992554:web:b92dca52e88e1e427f7c93"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export const auth = getAuth(app);
export { app, firestore, storage };
 