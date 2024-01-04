/* eslint-disable no-undef */
import style from "./About.module.css";
const About = () => {
  return (
    <div>
      <div className="container">
        <div className={style.about}>
          <div className={style.abtimg}>
            <img src="./undraw_career_progress_ivdb.png" alt="" />
          </div>
          <h2 className={style.abt}>About Us</h2>
          <p>
            The Halal Jibika Revolution in Job Applications In a world that is
            constantly evolving, the job market is no exception. Job seekers
            face a myriad of challenges, from finding the right opportunities to
            navigating the intricate application processes. Recognizing the need
            for a streamlined and user-friendly platform, Halal Jibika emerges
            as a delightful solution that simplifies the job application
            journey. At the heart of Halal Jibika is a commitment to empowering
            individuals in their quest for meaningful employment. <br /> <br />{" "}
            The platform offers a diverse array of job opportunities, allowing
            users to explore various industries and positions tailored to their
            skills and aspirations. Whether youre a recent graduate entering the
            workforce or a seasoned professional seeking a career change, Halal
            Jibika provides a comprehensive space to discover and apply for your
            dream job. The companys vision is encapsulated in a simple yet
            profound mantra: Keep hardworking, take patience, and make yourself
            always ready for jobs <br /> <br /> This ethos reflects a deep
            understanding of the challenges job seekers face and the resilience
            required to navigate the competitive job market successfully. One of
            the cornerstones of Halal Jibika is its intuitive registration and
            login system, designed to enhance user experience and ensure a
            seamless interaction with the platform. Users can create
            personalized profiles that showcase their skills, experiences, and
            aspirations, providing employers with a holistic view of their
            potential contributions to the workforce.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
