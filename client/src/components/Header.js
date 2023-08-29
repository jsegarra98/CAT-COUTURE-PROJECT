import { NavLink } from "react-router-dom";
import LoginButton from "./LoginButton";
import "./Header.css";
import Logo from "../components/ImageCSSFolder/LOGO.jpeg";

const Header = () => {
  return (
    <header>
      <nav className={`navbar page-padding`}>
        <div className='logo-name'>CAT COUTURE</div>
        <div className='navbar menu'>
          <div className='dropdown'>
            <button className='dropbtn'>
              Menu
              <i className='fa fa-caret-down'></i>
            </button>
            <div className='dropdown-content'>
              <NavLink to='/' className='dropdown-link'>
                Products
              </NavLink>
              <NavLink to='/dashboard' className='dropdown-link'>
                Dashboard
              </NavLink>
            </div>
          </div>
          <LoginButton className='login-button' />
        </div>
      </nav>
      <header className={`header main-layout section-padding`}>
        <img src={Logo} width='300' height='300' alt='Logo' />
      </header>
    </header>
  );
};

export default Header;
