import logoImg from "../assets/logo.jpg";

export default function Header() {
  return (
    <header>
      <img src={logoImg} alt="A form and a pencil" />
      <h1>User Login Deneme</h1>
      <a href="Login">
        {" "}
        <button className="button btn1">Giriş Yap</button>{" "}
      </a>
      <p></p>
      <a href="Register">
        {" "}
        <button className="button btn2">Kayıt Ol</button>{" "}
      </a>
    </header>
  );
}
