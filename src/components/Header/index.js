import { Link } from "react-router-dom";
import "./index.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <a className="header__logo">LogoType</a>

        <ul className="header__items">
          <li className="header__item">
            <Link className="header__link">Home</Link>
          </li>
          <li className="header__item">
            <Link className="header__link">Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
