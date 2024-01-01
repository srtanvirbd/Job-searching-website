import { FaGoogle, FaGithub } from "react-icons/fa";
import "./Authentication.css";

const Authentication = () => {
  return (
    <div>
      <div className="social-icons">
        <div className="google-icon">
          <button className="btn">
            {" "}
            <FaGoogle /> Sign in with Google
          </button>
        </div>
        <div className="github-icon">
          <button className="btn">
            {" "}
            <FaGithub />
            Sign in with Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
