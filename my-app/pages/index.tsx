import styles from "../styles/Home.module.css";

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
