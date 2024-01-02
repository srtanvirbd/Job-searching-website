import { NavLink } from "react-router-dom";
import styles from "./JobsButton.module.css";
const JobsButton = () => {
  return (
    <div>
      <div className="container">
        <NavLink to={"/jobs"} className={styles.jobbtn}>
          Explore All Jobs
        </NavLink>
      </div>
    </div>
  );
};

export default JobsButton;
