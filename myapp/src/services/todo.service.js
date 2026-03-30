import api from "./api";

function getAllTodos() {
    return api.get('/api/Todos')
        .then(res => res.data);
}


function AddTodo(task) {
    return api.post('/api/Todos', JSON.stringify(task), {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.data);
}

function MarkComplete(todoid) {
    return api.put(`/api/Todos/${todoid}/Complete`)
        .then(res => res.data);
}

function DeleteTodo(todoid) {
    return api.delete(`/api/Todos/${todoid}`)
        .then(res => res.data);
}



export default {
    getAllTodos,
    AddTodo,
    MarkComplete,
    DeleteTodo
};