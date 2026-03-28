import api from "./api";

function getAllTodos() {
    return api.get('/api/Todos')
        .then(res => res.data);
}

export default {
    getAllTodos
};