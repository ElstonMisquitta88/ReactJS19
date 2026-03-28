import api from "./api";

function login(credentials) {
    return api.post('/api/Authentication/Token', credentials)
        .then(res => {
            const token = res.data;
            localStorage.setItem("token", token);
            return { token }; // normalized response
        });
}

function logout() {
    localStorage.removeItem("token");
}

export default {
    login,
    logout
};