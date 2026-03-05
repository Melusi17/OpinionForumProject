import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './UserDetails.css';

const UserDetails = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a small delay to show loading state
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    if (loading) {
        return <div className="loading-container">Loading...</div>;
    }

    return (
        <div className="user-details-container">
            <div className="user-details-card">
                <h2>User Profile</h2>
                {user ? (
                    <div className="user-info">
                        <div className="info-row">
                            <strong>First Name:</strong>
                            <span>{user.firstName}</span>
                        </div>
                        <div className="info-row">
                            <strong>Last Name:</strong>
                            <span>{user.lastName}</span>
                        </div>
                        <div className="info-row">
                            <strong>Email:</strong>
                            <span>{user.email}</span>
                        </div>
                        <div className="info-row">
                            <strong>User ID:</strong>
                            <span>{user.id}</span>
                        </div>
                    </div>
                ) : (
                    <p className="no-user">No user information available</p>
                )}
                <button onClick={handleLogout} className="btn-secondary">
                    Logout
                </button>
            </div>
        </div>
    );
};

export default UserDetails;