import "../Styles/Footer.css";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaGithub,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {

  return (
    <footer>
      <div className="footer-links">
        <Link
          to={
            "https://www.facebook.com/chibundu.okolo.kelvin.3?mibextid=ZbWKwL"
          }
        >
          <FaFacebookF />
        </Link>

        <Link to={"https://github.com/kel-D-coder"}>
          <FaGithub />
        </Link>

        <Link to={"https://wa.me/07089338862"}>
          <FaWhatsapp />
        </Link>

        <Link
          to={"https://instagram.com/chibunduokolo?igshid=MzNlNGNkZWQ4Mg=="}
        >
          <FaInstagram />
        </Link>
      </div>
        <p>Kel-D-Coder &copy; 2023 </p> 
    </footer>
  );
}

export default Footer;
