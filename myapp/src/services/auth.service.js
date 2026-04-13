import api from "./api";

function login(credentials) {
    return api.post('/api/Authentication/Token', credentials)
        .then(res => {
            const token = res.data;
            localStorage.setItem("token", token);
            sessionStorage.setItem("authuser", credentials.userName);
            return { token }; // normalized response
        });
}

function getauthuser() {
    return JSON.parse(sessionStorage.getItem("authuser"));
}

function logout() {
    localStorage.removeItem("token");
    sessionStorage.removeItem("authuser");
}


export default {
    login,
    logout,
    getauthuser
};