import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="footer_container">
        <div className="footer_text">
          <h1>BrandStream</h1>
          <p>&copy; 2023 BrandStream Inc. All rights reserved.</p>
        </div>
        <div className="footer_link">
          <li>
            <Link className="ft_link">Privacy Policy</Link>
          </li>
          <li>
            <Link className="ft_link">Terms of Service</Link>
          </li>
          <li>
            <Link className="ft_link">Cookies</Link>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Footer;
