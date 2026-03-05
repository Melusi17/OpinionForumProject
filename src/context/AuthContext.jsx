import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

// Create context
const AuthContext = createContext();

// Custom hook to use auth context
export const useAuth = () => useContext(AuthContext);

// Your backend API URL - FIXED FOR DOCKER!
const API_URL = 'http://localhost:5000/api';

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState(localStorage.getItem('token'));

    // Set axios default header when token changes
    useEffect(() => {
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
            delete axios.defaults.headers.common['Authorization'];
        }
    }, [token]);

    // Load user if token exists (on page refresh)
    useEffect(() => {
        const loadUser = async () => {
            if (token) {
                try {
                    const response = await axios.get(`${API_URL}/User/me`);
                    setUser(response.data);
                } catch (error) {
                    console.error('Failed to load user:', error);
                    // If token is invalid, clear it
                    localStorage.removeItem('token');
                    setToken(null);
                }
            }
            setLoading(false);
        };

        loadUser();
    }, [token]);

    // Register function
    const register = async (userData) => {
        try {
            const response = await axios.post(`${API_URL}/Auth/register`, userData);

            // Save token and user data
            localStorage.setItem('token', response.data.token);
            setToken(response.data.token);
            setUser({
                id: response.data.id,
                firstName: response.data.firstName,
                lastName: response.data.lastName,
                email: response.data.email
            });

            return { success: true };
        } catch (error) {
            return {
                success: false,
                error: error.response?.data?.message || 'Registration failed'
            };
        }
    };

    // Login function
    const login = async (email, password) => {
        try {
            const response = await axios.post(`${API_URL}/Auth/login`, {
                email,
                password
            });

            // Save token and user data
            localStorage.setItem('token', response.data.token);
            setToken(response.data.token);
            setUser({
                id: response.data.id,
                firstName: response.data.firstName,
                lastName: response.data.lastName,
                email: response.data.email
            });

            return { success: true };
        } catch (error) {
            return {
                success: false,
                error: error.response?.data?.message || 'Login failed'
            };
        }
    };

    // Logout function
    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        setUser(null);
    };

    // Value object to be provided to all children
    const value = {
        user,
        loading,
        register,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};