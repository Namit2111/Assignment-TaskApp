import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./register.css"
const Register = ({ history }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/auth/register', { username, password });
            navigate('/');
        } catch (error) {
            console.log(error);
            console.error('Registration failed');
        }
    };

    return (
        <div className="register-page">
            <form className="register-form" onSubmit={handleSubmit}>
                <input 
                    className="input-username" 
                    type="text" 
                    placeholder="Username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    required 
                />
                <input 
                    className="input-password" 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <button className="register-button" type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
