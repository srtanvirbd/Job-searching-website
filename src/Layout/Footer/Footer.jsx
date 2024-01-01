import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGooglePlus,
  FaInstagram,
  FaMapMarker,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="container">
        <footer className={styles.footer}>
          <div className={`${styles["footer-left"]} col-md-4 col-sm-6`}>
            <img
              className={styles.footerLogo}
              src="../../../public/Screenshot 2024-01-01 101302.png"
              alt=""
            />
            <p className={styles.about}>
              {" "}
              Halal Jibika is a user-friendly job platform streamlining the
              application process. With a secure registration and login system,
              our vision revolves around the principles of diligence, patience,
              and perpetual readiness for career opportunities. Join us at Halal
              Jibika and embark on your journey towards fulfilling employment
            </p>
            <div className={styles.icons}>
              <a href="https://www.facebook.com/">
                <FaFacebook />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
              <a href="#">
                <FaGooglePlus />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className={`${styles["footer-center"]} col-md-4 col-sm-6`}>
            <h2>Contact Us</h2>
            <div className={styles.maps}>
              <FaMapMarker />
              <p>Chandertech ,Beraid,Badda,Dhaka,Bangladesh</p>
            </div>
            <div className={styles.phone}>
              <FaPhone />
              <p> (+00) 0000 000 000</p>
            </div>
            <div className={styles.mail}>
              <FaEnvelope />

              <p>
                <p href="#"> halaljibika@company.com</p>
              </p>
            </div>
          </div>
          <div className={`${styles["footer-right"]} col-md-4 col-sm-6`}>
            <h2>Our Services</h2>
            <p className={styles.menu}>
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/contact"}>Contact</NavLink>
              <NavLink to={"/jobs"}>Jobs</NavLink>
              <NavLink to={"/about"}>About</NavLink>
              <NavLink to={"/favorite"}>Favorite</NavLink>
            </p>
            <p className={styles.name}> Halal Jibika &copy; 2024</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
