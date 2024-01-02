/* eslint-disable react/prop-types */
import { FaRegBookmark } from "react-icons/fa";
import "./JObCard.css";
const Jobcard = ({ job }) => {
  return (
    <div>
      <div className="job-card">
        <div>
          <div className="job-company">
            <div>
              <img src={job.logo} alt="" />
            </div>
            <div className="usa">
              <h2 className="logo-name">{job.companyName}</h2>
              <p>Maryland, USA</p>
              <p>Posted: 5 Days Ago</p>
            </div>
          </div>
          <div>
            <FaRegBookmark />
          </div>
        </div>

        <h2 className="tittle">{job.title}</h2>
        <h3>{job.position}</h3>
        <p>{job.description}</p>
        <div className="btn-apply">
          <button>Apply Now</button>
          <button className="more">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Jobcard;
