// src/context/UserContext.js
import { createContext, useContext, useState } from 'react';
import axiosInstance from '../components/axiosInstance';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = async (email, passwd) => {
        try {
            const response = await fetch('http://localhost:7777/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, passwd }),
            });
            const data = await response.json();
            console.log('Login response:', data); // 백엔드 응답 확인
    
            if (response.ok && data.result === 'success') {
                const userData = data.data; // { userId, email, username }
                setUser(userData);
                sessionStorage.setItem('accessToken', data.accessToken);
                localStorage.setItem('refreshToken', data.refreshToken);
               
                
                return true;
            } else {
                throw new Error(data.message || 'Login failed');
            }
        } catch (error) {
            console.error('Login error:', error.message);
            return false;
        }
    };
    

    const logoutUser = async (email) => {
        try {
            if (email) {
                const url = 'http://localhost:7777/api/auth/logout';
                await axiosInstance.post(url, { email });
            }
            setUser(null);
            sessionStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            console.log('User logged out');
            return true;
        } catch (error) {
            console.error('Logout error:', error);
            setUser(null);
            return false;
        }
    };

    const updateUser = (updatedUser) => {
        console.log('Updating user in context:', updatedUser);
        setUser(updatedUser); // user 상태 업데이트
    };

    return (
        <UserContext.Provider value={{ user, setUser, login, logoutUser, updateUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};

export default UserContext;