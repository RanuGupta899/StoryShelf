import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import  '../App.css'

function Signin() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const navigate = useNavigate(); 

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Destructure formData to get individual fields
        const { name, email, password } = formData;

        // Define the API endpoint
        const Api = 'http://localhost:3000/user/signup';

        // Prepare the signup data
        const signindata = { name, email, password };

        try {
            // Send a POST request to the API
            const response = await axios.post(Api, signindata);
            console.log('Signup successfully', response.data);

            // Show success message
            Swal.fire({
                title: "Registered successfully!",
                icon: "success",
            });

            // Redirect to login page
            navigate('/login');
        } catch (error) {
            if (error.response) {
                console.error('Signup failed', error.response.data);
                Swal.fire({
                    title: "Signup Failed",
                    text: error.response.data.message || "An error occurred.",
                    icon: "error",
                });
            } else if (error.request) {
                console.error('Error from server', error.request);
                Swal.fire({
                    title: "Server Error",
                    text: "No response from server. Please try again later.",
                    icon: "error",
                });
            } else {
                console.error('Error during signup', error.message);
                Swal.fire({
                    title: "Error",
                    text: error.message,
                    icon: "error",
                });
            }
        }
    };

    return (
        <div className="container-fluid">
           <div className="box">
            {/* <div className="img">hello</div> */}
            <div className="signin-container">
                <form className="signin-form" onSubmit={handleSubmit}>
                    <h2>Sign-in Form</h2>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
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
                    <button type="submit" className="submit-btn">Sign Up</button>
                </form>
            </div>
        </div>
        </div>
    );
}

export default Signin;
