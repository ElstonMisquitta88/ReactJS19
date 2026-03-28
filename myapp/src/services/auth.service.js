import api from "./api";

function login(credentials) {
    return api.post('/api/Authentication/Token', credentials)
        .then(res => {
            localStorage.setItem("token", res.data.token);
            return res.data;
        });
}

function logout() {
    localStorage.removeItem("token");
}

export default {
    login,
    logout
};