import "./SignUp.css";
import { useState } from "react";
import Authentication from "../../Componets/Authentication/Authentication";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
      <div>
        <Authentication />
      </div>
      <div>
        <h3>
          Already have an Accountt?{" "}
          <span>
            <NavLink to={"/login"}>Login </NavLink>
          </span>
        </h3>
      </div>
      <div>
        <NavLink to={"/"}>Go to Home</NavLink>
      </div>
    </div>
  );
};

export default SignUp;
