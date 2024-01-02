/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./JObCard.css";

const Jobcard = ({ job }) => {
  const [applied, setApplied] = useState(false);

  const handleApply = () => {
    // Toggle the applied state
    setApplied((prevApplied) => !prevApplied);

    // Show toast notification
    toast.success(applied ? "Application Withdrawn" : "Applied Successfully", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
    });
  };

  return (
    <div>
      <ToastContainer />
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
          {/* Change button text based on the applied state */}
          <button onClick={handleApply}>
            {applied ? "Applied" : "Apply Now"}
          </button>
          <button className="more">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Jobcard;
