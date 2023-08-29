import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className={`footer page-padding section-padding`}>
      <Link to='/' className='footerItem'>
        Terms of use
      </Link>
      <Link to='/' className='footerItem'>
        Privacy policy
      </Link>
      <span> </span>
      <p className='footerItem copyright'>CAT COUTURE</p>
    </footer>
  );
};

export default Footer;
