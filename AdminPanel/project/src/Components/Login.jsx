import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data", formData);

    try {
      const response = await axios.post("http://localhost:3000/user/login", formData, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200) {
        Swal.fire({
          title: "Login Successfully!",
          text: "Welcome back!",
          icon: "success",
        });
console.log(response);
console.log("token here",response.data)
const result=response.data.token;
const token = result;
localStorage.setItem("token",token);
console.log(token);


localStorage.setItem("token",token);  //save token to the localstorage
localStorage.setItem("loginTimestamp",Date.now());


        // Pass user's name to the dashboard
        navigate("/dashboard", { state: { name: response.data.user.name,token } });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Invalid credentials!",
        });
      }
    } catch (error) {
      console.error("Error during login:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "An error occurred. Please try again later.",
      });
    }
  };

  return (
    <div className="container-fluid">
      
      <div className="login-container">
        <form className="login-form" onSubmit={handlesubmit}>
          <h2>Login Form</h2>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="submit-btn">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
