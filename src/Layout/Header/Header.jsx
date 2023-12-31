import { NavLink } from "react-router-dom";
import "./Heder.css";

const Header = () => {
  return (
    <div>
      <div className="container">
        <div className="nav">
          <input type="checkbox" id="nav-check" />
          <div className="nav-header">
            <div className="nav-title">HALAL JIVIKA</div>
          </div>
          <div className="nav-btn">
            <label htmlFor="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>

          <div className="nav-links">
            <ul>
              <NavLink to={"/"}>HOME</NavLink>
              <NavLink to={"/jobs"}>JOBS</NavLink>
              <NavLink to={"/about"}>ABOUT</NavLink>
              <NavLink to={"/contact"}>CONTACT</NavLink>
              <NavLink to={"/favorite"}>FAVORITE</NavLink>
            </ul>
          </div>
          <div className="login">
            <ul>
              <NavLink className={"sign-btn"} to={"/signup"}>
                SIGN UP
              </NavLink>
              <NavLink className={"login-btn"} to={"/login"}>
                LOGIN
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
