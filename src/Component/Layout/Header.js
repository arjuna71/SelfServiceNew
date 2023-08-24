import logo from "./../../logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav className="nav">
        <img src={logo} className="nav-logo" id="imgLogo" alt="Logo" />
        <ul className="nav-items">
          <li>English</li>
          <li>Exit Triage</li>
        </ul>
      </nav>
      <hr/>
    </header>
  );
};

export default Header;
