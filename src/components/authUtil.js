import axios from "axios";
import axiosInstance from "./axiosInstance";

export const checkTokenExpiration = (token) => {
    const payload = JSON.parse(atob(token.split(".")[1]));
    const expTime = payload.exp * 1000;
    let isInValid = expTime < Date.now();
    return isInValid;
};

export const refreshAccessToken = async () => {
    const refreshToken = localStorage.getItem("refreshToken");
    if (refreshToken) {
        let url = `http://localhost:7777/api/auth/refresh`;
        try {
            const response = await axiosInstance.post(url, { refreshToken });
            const newAccessToken = response.data;
            return newAccessToken;
        } catch (error) {
            console.error("refresh token error: ", error);
            return null;
        }
    }
    console.log("refreshToken  없음");
    return null;
};

export const getAuthenticUserInfo = async () => {
    let url = `http://localhost:7777/api/auth/user`;

    try {
        const accessToken = sessionStorage.getItem("accessToken");
        if (accessToken) {
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            const { id, name, email } = response.data;
            const authUser = { id, name, email };
            return authUser;
        }
        return null;
    } catch (error) {
        alert("error [getAuthenticUserInfo 에서 에러] " + error);
        console.log(error);
        sessionStorage.removeItem("accessToken");
        return null;
    }
};
