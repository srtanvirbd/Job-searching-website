/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import "./JobList.css";
import Jobcard from "../JobCard/JobCard";

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Fetch only the first 6 jobs
    fetch("http://localhost:9000/jobs")
      .then((response) => response.json())
      .then((data) => setJobs(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div>
      <div className="container">
        <div className="job-list">
          {jobs &&
            jobs.slice(0, 6).map((job) => <Jobcard key={job.id} job={job} />)}
        </div>
      </div>
    </div>
  );
};

export default JobList;
