import Banner from "../../Componets/Banner/Banner";
import Feature from "../../Componets/Feature/Feature";
import JobList from "../../Componets/Joblist/JobList";
import JobsButton from "../../Componets/JobsButton/JobsButton";

const Home = () => {
  return (
    <div>
      <Banner />
      <div>
        <Feature />
      </div>
      <JobList />
      <div>
        <JobsButton />
      </div>
    </div>
  );
};

export default Home;
