import "./Header.css";
import logo from "../../../public/icons/logo.svg";

export default function Header() {
  return (
    <>
      <header>
        <section className="logo">
          <img src={logo} alt="Logo SVG" />
        </section>
        <section className="opciones">
          <a>Features</a>
          <a>Team</a>
          <a>Sign In</a>
        </section>
      </header>
    </>
  );
}
