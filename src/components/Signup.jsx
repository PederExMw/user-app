import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase2";
import { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((useCredential) => {
        console.log(useCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const fd = new FormData(event.target);
    const acqChannel = fd.getAll("acquisition");
    const data = Object.fromEntries(fd.entries());
    data.acquisition = acqChannel;
    console.log(data);
    data.password === data.confirmpassword
      ? event.target.reset()
      : alert("Şifreler birbiriyle uyuşmuyor");
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div></div>
      <h2>Kayıt</h2>
      <p>Kayıt Olmanız için sizden birkaç veri istemeliyiz 🫴🏻😉</p>

      <div className="control">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="password">Sifre</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="control">
          <label htmlFor="confirmpassword">Sifreyi Dogrula</label>
          <input
            id="confirmpassword"
            type="password"
            name="confirmpassword"
            required
          />
        </div>
      </div>

      <hr />

      <div className="control-row">
        <div className="control">
          <label htmlFor="first-name">Adınız</label>
          <input type="text" id="first-name" name="first-name" />
        </div>

        <div className="control">
          <label htmlFor="last-name">SoyAdınız</label>
          <input type="text" id="last-name" name="last-name" />
        </div>
      </div>

      <div className="control">
        <label htmlFor="phone">İşiniz</label>
        <select id="role" name="role">
          <option value="Öğrenci">Öğrenci</option>
          <option value="Öğretmen">Öğretmen</option>
          <option value="Çalışan">Çalışan</option>
          <option value="Kendi işimin patronuyum">
            Kendi işimin patronuyum
          </option>
          <option value="Diğer">Diğer</option>
        </select>
      </div>

      <fieldset>
        <legend>Bizi nasıl buldun?</legend>
        <div className="control">
          <input
            type="checkbox"
            id="google"
            name="acquisition"
            value="Google'dan"
          />
          <label htmlFor="google">Google'dan</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="friend"
            name="acquisition"
            value="Bir arkadaşım önerdi."
          />
          <label htmlFor="friend">Bir arkadaşım önerdi.</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="Social"
            name="acquisition"
            value="Sosyal Medya'dan"
          />
          <label htmlFor="google">
            Sosyal Medya'dan (Twitter, Instagram vs.)
          </label>
        </div>

        <div className="control">
          <input type="checkbox" id="other" name="acquisition" value="Diğer" />
          <label htmlFor="other">Diğer</label>
        </div>
      </fieldset>

      <div className="control">
        <label htmlFor="terms-and-conditions">
          <input
            type="checkbox"
            id="terms-and-conditions"
            name="terms"
            required
          />
          Tüm koşulları okudum ve kabul ediyorum.
        </label>
      </div>

      <p className="form-actions">
        <a href="Login">
          <button className="button btn3"> Giriş Yap </button>
        </a>
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button type="submit" className="button">
          Kayıt Ol
        </button>
      </p>
    </form>
  );
}
