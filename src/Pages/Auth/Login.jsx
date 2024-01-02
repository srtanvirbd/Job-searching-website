import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Authentication from "../../Componets/Authentication/Authentication";
import { NavLink } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear the error when the user types
  };

  const handleLogin = () => {
    // Validation logic
    const newErrors = {};
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    if (Object.keys(newErrors).length === 0) {
      // Successful login logic here

      // Show success message using react-toastify
      toast.success("Login successfully", {
        position: "bottom-center",
        autoClose: 3000, // Close the toast after 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
      });
      setFormData({
        email: "",
        password: "",
      });

      console.log("Login button clicked. Form data:", formData);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="login-container">
        <form className="login-form">
          <h2>Login</h2>

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <span className="error">{errors.password}</span>}

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
