import { useEffect, useState } from "react";
import "./Login.css";
import logoImg from "../assets/logo.jpg";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../Firebase2";

const Login = () => {
  const [authUser, setAuthUser] = useState(null);
  <header>
    <img src={logoImg} alt="A form and a pencil" />
    <h1>User Login Deneme</h1>
  </header>;
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const emailIsValid =
    enteredValues.email !== "" && !enteredValues.email.includes("@");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(enteredValues);
    signInWithEmailAndPassword(
      auth,
      enteredValues.email,
      enteredValues.password
    )
      .then((useCredential) => {
        console.log(useCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleInputChange = (ident, value) => {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [ident]: value,
    }));
  };

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Başarıyla Çıkış Yapıldı");
      })
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(event) => handleInputChange("email", event.target.value)}
            value={enteredValues.email}
          />
          <div className="control-error">
            {" "}
            {emailIsValid && (
              <p> Lütfen Geçerli Bir E-Mail adresi giriniz. </p>
            )}{" "}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Sifre</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
            value={enteredValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>

      <div>
        {authUser ? (
          <>
            {" "}
            <p> {`Kullanıcı Başarıyla Giriş yaptı ${authUser.email}`}</p>{" "}
            <button className="button" onClick={userSignOut}>
              {" "}
              Çıkış Yap{" "}
            </button>{" "}
          </>
        ) : (
          <p> Çıkış Yapıldı </p>
        )}
      </div>
    </form>
  );
};

export default Login;
