import { useState } from "react";
import Swal from "sweetalert2";
import axios from 'axios';
import  '../App.css'

function Changepassword() {
    const [formData, setFormData] = useState({
        email: '',
        oldPassword: '',
        newPassword:'',
    });


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Destructure formData to get individual fields
        const { email,oldPassword,newPassword } = formData;

        // Define the API endpoint
        const Api = 'http://localhost:3000/user/changePassword';

        // Prepare the signup data
        const Changepassword = { email,oldPassword,newPassword};

        try {
            // Send a POST request to the API
            const response = await axios.post(Api, Changepassword);
            console.log('Change successfully', response.data);

            // Show success message
            Swal.fire({
                title: "Change successfully!",
                icon: "success",
            });

        } catch (error) {
            if (error.response) {
                console.error('Change Password failed', error.response.data);
                Swal.fire({
                    title: "change Password Failed",
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
                console.error('Error during changepassowrd', error.message);
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
                    <h2>Change Password </h2>
                    <div className="form-group">
                        <label htmlFor="Email">Email</label>
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
                        <label htmlFor="oldPassword">oldPassword</label>
                        <input
                            type="oldPassword"
                            id="oldPassword"
                            name="oldPassword"
                            value={formData.oldPassword}
                            onChange={handleChange}
                            placeholder="Enter your oldPassword"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="newPassword">newPassword</label>
                        <input
                            type="newPassword "
                            id="newPassword "
                            name="newPassword"
                            value={formData.newPassword }
                            onChange={handleChange}
                            placeholder="Enter your newPassword "
                            required
                        />
                    </div>
                    <button type="submit" className="submit-btn">Change Password</button>
                </form>
            </div>
        </div>
        </div>
    );
}

export default Changepassword;
