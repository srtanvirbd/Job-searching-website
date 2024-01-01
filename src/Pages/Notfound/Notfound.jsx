import { NavLink } from "react-router-dom";
import Style from "./Notfound.module.css";

const Notfound = () => {
  return (
    <div>
      <div>
        <section className={Style.page404}>
          <div>
            <div className={Style.row}>
              <div>
                <div>
                  <div className={Style.fourZeroBourBg}>
                    <h1> 404</h1>
                  </div>
                  <div className={Style.contantBox404}>
                    <h3 className="h2">Look like youre lost</h3>
                    <p>the page you are looking for not available!</p>
                    <NavLink to={"/"} className={Style.link404}>
                      Go to Home
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Notfound;
