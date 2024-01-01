import { NavLink } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div className="banner">
        <div className="container">
          <div className="job">
            <h3>
              We Have <span>208,000+</span> Live Jobs
            </h3>
            <h1 className="find">
              Find and Apply for <span>Halal</span> Job that suits you!
            </h1>

            <p>
              Here you can find your best job, Explore hundreds of jobs with us.
              Ready for your next adventure?
            </p>

            <NavLink to={"signup"}>Explore</NavLink>
          </div>
          <div>
            <img
              className="man-img"
              src="../../../public/handsome-black-man-speaks-by-phone-smiles.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
