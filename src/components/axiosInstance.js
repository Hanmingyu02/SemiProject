// axiosInstance.js
import axios from "axios";
import { checkTokenExpiration, refreshAccessToken } from "./authUtil";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
    async (config) => {
        const accessToken = sessionStorage.getItem("accessToken");
        console.log("요청 인터셉터 실행중 ... accessToken: " + accessToken);
        if (accessToken) {
            if (checkTokenExpiration(accessToken)) {
                console.log("요청 인터셉터...accessToken유효시간 지난 경우...");

                const newAccessToken = await refreshAccessToken(); //
                console.log("새 억세스토큰 발급 받음");

                if (newAccessToken) {
                    sessionStorage.setItem("accessToken", newAccessToken);
                    config.headers["Authorization"] = `Bearer ${accessToken}`;
                    return config;
                }
            }

            config.headers["Authorization"] = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const status = error.response?.status;
        console.log("응답 인터셉터에서 받은 응답 상태코드(status): ", status);
        if (status === 400) {
            alert(error.response.data.message);
            window.location.href = "/";
            return Promise.reject(error);
        }

        if (status === 401) {
            const refreshToken = localStorage.getItem("refreshToken");
            if (refreshToken) {
                try {
                    const newAccessToken = await refreshAccessToken();
                    if (newAccessToken) {
                        sessionStorage.setItem("accessToken", newAccessToken);
                        error.config.headers["Authorization"] = `Bearer ${newAccessToken}`;
                        return axiosInstance(error.config);
                    }
                } catch (err) {}
            }
            localStorage.removeItem("refreshToken");
            sessionStorage.removeItem("accessToken");
            window.location.href = "/";
            return Promise.reject(error);
        }
        if (status === 403) {
            alert("접근 권한이 없습니다");
            window.location.href = "/";
            return Promise.reject(error);
        }
    }
);

export default axiosInstance;
