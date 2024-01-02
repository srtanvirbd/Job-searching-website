import { useEffect, useState } from "react";
import JobsCard from "../JobsCard/JobsCard";

const JobsDetails = () => {
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
          {jobs && jobs.map((job) => <JobsCard key={job.id} job={job} />)}
        </div>
      </div>
    </div>
  );
};

export default JobsDetails;
