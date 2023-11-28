import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC72J7OBETb6VEQgR3EL_Q0BZulf3sFGLg",
  authDomain: "react-httprec.firebaseapp.com",
  databaseURL: "https://react-httprec-default-rtdb.firebaseio.com",
  projectId: "react-httprec",
  storageBucket: "react-httprec.appspot.com",
  messagingSenderId: "589308058384",
  appId: "1:589308058384:web:83723f6697caab6d396395",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
