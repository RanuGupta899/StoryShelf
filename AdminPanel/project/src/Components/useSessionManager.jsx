import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const useSessionManager = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const handleStorageChange = (event) => {
            if (event.key === "token") {
                if (event.newValue === null) {
                    // Token removed, logout detected
                    Swal.fire({
                        icon: "warning",
                        title: "Session Expired",
                        text: "You have been logged out due to logging in on another tab.",
                    }).then(() => {
                        navigate("/login");
                    });
                } else if (event.oldValue !== event.newValue) {
                    // Token changed, new login detected
                    Swal.fire({
                        icon: "info",
                        title: "New Login Detected",
                        text: "You have logged in on another tab.",
                    }).then(() => {
                        navigate("/login");
                    });
                }
            }
        };

        window.addEventListener("storage", handleStorageChange);
        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, [navigate]);

    const login = (token) => {
        localStorage.setItem("token", token);
    };

    const logout = () => {
        localStorage.removeItem("token");
    };

    return { login, logout };
};

export default useSessionManager;
