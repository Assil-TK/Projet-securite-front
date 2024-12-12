import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProtectedPage.css'; // Ensure you have this CSS imported

const ProtectedPage = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const response = await axios.get('http://localhost:5000/users/protected', {
                        headers: { Authorization: `Bearer ${token}` },
                    });
                    setMessage(response.data.message);
                } catch (error) {
                    setMessage('Error: Unauthorized or token expired');
                }
            } else {
                setMessage('No token found. Please sign in.');
            }
        };
        fetchData();
    }, []);

    return (
        <div className="center-container">
            <div className="center-content">
                <p>{message}</p>
            </div>
        </div>
    );
};

export default ProtectedPage;
