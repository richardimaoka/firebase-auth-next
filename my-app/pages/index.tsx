import styles from "../styles/Home.module.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5pWosrlor2g9iptaB4wS3EdSosx0RuMM",
  authDomain: "richard-experiment.firebaseapp.com",
  projectId: "richard-experiment",
  storageBucket: "richard-experiment.appspot.com",
  messagingSenderId: "361941620193",
  appId: "1:361941620193:web:7018f959549fac47ddaea0",
  measurementId: "G-L7TJQEF3KQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default function Home() {
  return (
    <div className={styles.container}>
      <div id="login">
        <div>
          <div>
            <h1>Getting Started with Firebase Auth</h1>
          </div>
        </div>
        <form>
          <div>
            <input id="txtEmail" type="email" />
            <label>Email</label>
          </div>
          <div>
            <input id="txtPassword" type="password" />
            <label>Password</label>
          </div>
          <div id="divLoginError">
            <div id="lblLoginErrorMessage">Error message</div>
          </div>
          <button id="btnLogin" type="button">
            Log in
          </button>
          <button id="btnSignup" type="button">
            Sign up
          </button>
        </form>
      </div>

      <div id="app">
        <div>
          <h1>Welcome to Your Amazing App</h1>
        </div>
        <form>
          <div>
            <div id="lblAuthState"></div>
          </div>
          <button id="btnLogout" type="button">
            Log out
          </button>
        </form>
      </div>

      <footer>
        <a href="https://firebase.google.com/" target="_blank">
          <img src="https://firebase.google.com/images/brand-guidelines/logo-standard.png" />
        </a>
      </footer>
    </div>
  );
}
