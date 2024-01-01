import Authentication from "../../Componets/Authentication/Authentication";
import "./Login.css";
import { NavLink } from "react-router-dom";

const Login = () => {
  const handleLogin = () => {
    // Add your login logic here
    console.log("Login button clicked");
  };
  return (
    <div>
      <div className="login-container">
        <form className="login-form">
          <h2>Login</h2>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />

          <button type="button" onClick={handleLogin}>
            Login
          </button>
          <div>
            <Authentication />
          </div>
          <div>
            <h3>
              No account yet?{" "}
              <span>
                <NavLink to={"/signup"}>Sign Up </NavLink>
              </span>
            </h3>
          </div>
          <div>
            <NavLink to={"/"}>Go to Home</NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
