import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Hero from "./Hero";
import Logo from "./Logo";
import Slider from "./Slider";
import Category from "./Category";
import Product1 from "./Product1";
// import Logo1 from "./logo1";
import "./Dashboard.css";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import Changepassword from "./Changepassword";
import useSessionManager from "./useSessionManager";


function Dashboard() {
  useSessionManager();
  const test=useContext(ThemeContext);

  const location = useLocation();
  const name = location.state?.name || "Guest";
  const navigate=useNavigate();
  // const{userData}=location.state||{};



  const [currentview, setCurrentview] = useState("Hero");

  // check if the token exists on component mount
  useEffect(()=>{
    const token=localStorage.getItem("token");
    if(!token){
      // Redirect to login if no token is found
      navigate("/Login");
    }
  },[navigate]);

  const handleLogout=()=>{
    // Remove the token from localstorage
    localStorage.removeItem("token");
    // navigate to the home  or login page
    navigate('/Login');
  };

  const handleMenuClick = (view) => {
    setCurrentview(view);
  };

  const renderContent = () => {
    switch (currentview) {
      case "Hero":
        return <Hero />;
      case "Logo":
        return <Logo />;
        // case "Logo1":
        // return <Logo1 />;
      case "Slider":
        return <Slider />;
      case "Category":
        return <Category />;
     
        case "Product1":
          return <Product1 />;
          case "Changepassword":
            return <Changepassword />;
      default:
        return <Hero />;
    }
  };

  return (
    <div 
    style={{backgroundColor:test.theme==="light"?"#fff":"#333",
      color:test.theme==="light"?"#000":"#fff",
      height:"100vh",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"column",
    }}
    >
  
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h3>Sidebar Menu</h3>
        <ul>
          <li onClick={() => handleMenuClick("Hero")}>Dashboard</li>
          <li onClick={() => handleMenuClick("Logo")}>Logo</li>
          {/* <li onClick={() => handleMenuClick("Logo1")}>Logo1</li> */}
          <li onClick={() => handleMenuClick("Slider")}>Slider</li>
          <li onClick={() => handleMenuClick("Category")}>Category</li>
          <li onClick={() => handleMenuClick("Product1")}>Product1</li>
          <li onClick={() => handleMenuClick("Changepassword")}>ChangePassword</li>
        </ul>
      </div>

      {/* Main dashboard area */}
      <div className="main-content">
        {/* Header */}
        <header className="header ">
        <h2 className="view-title">Dashboard</h2>
<button onClick={test.toggleTheme} className="btn px-3 bg-warning text-light border-0" > Theme</button>

          <div className="profile-section ">
            <img src="https://via.placeholder.com/40" alt="profile" className="profile-picture " />
            <span className="profile-name">{name}</span>
            <button  onClick={ handleLogout} className="px-4 py-2 bg-danger border-0 text-light rounded">Logout</button>
          </div>
        </header>
        <main className="content">{renderContent()}</main>
      </div>
    </div>
    </div>
  );
}

export default Dashboard;
