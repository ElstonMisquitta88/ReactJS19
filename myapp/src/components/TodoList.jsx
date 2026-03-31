import { useState, useEffect } from "react";
import TodoService from "../services/todo.service";
import { useNavigate } from "react-router-dom";


function TodoList() {
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        TodoService.getAllTodos()
            .then(data => {
                setTodoList(data.sort((a, b) => b.id - a.id));
            })
            .catch(error => console.error('Error fetching todos:', error));
    }, []);


    const handleToggle = (todoitem) => {
        TodoService.MarkComplete(todoitem.id)
            .then(() => {
                setTodoList(prev =>
                    prev.map(t =>
                        t.id === todoitem.id
                            ? { ...t, isComplete: true }
                            : t
                    )
                );
            })
            .catch(error => console.error('Error:', error));
    }

    const handleDelete = (id) => {
        console.log(`Id To Delete ${id}`)
        TodoService.DeleteTodo(id)
            .then(() => {
                setTodoList(prev =>
                    prev.filter(item => item.id !== id)
                );
            })
            .catch(error => console.error('Error:', error));
    }

    const navigate = useNavigate();
    const redirectToTodoForm = (id) => {
        navigate(`/edit-todo/${id}`);
    }


    return (
        <>
            <div className="text-center mb-4">
                <h5 style={{ backgroundColor: '#007bff', color: 'white', borderRadius: '15px', padding: '10px 20px', display: 'inline-block', border: 'none' }}>
                    Todo List Details</h5>
            </div>
            <table className="table table-striped" border="1" cellPadding="10" cellSpacing="0">
                <thead>
                    <tr>
                        <th>Todo Id</th>
                        <th>Task</th>
                        <th>Is Complete</th>
                        <th>Delete Task</th>
                        <th>Edit Task</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {todoList.map((todoitem, index) => (
                        <tr key={todoitem.id}>
                            <td>{todoitem.id}</td>
                            <td>{todoitem.task}</td>
                            <td>
                                <input type="checkbox" checked={todoitem.isComplete} onChange={() => handleToggle(todoitem)} />
                            </td>
                            <td>
                                <button className="btn btn-danger" onClick={() => handleDelete(todoitem.id)}>X</button>
                            </td>

                            <td>
                                <button disabled={todoitem.isComplete} className="btn btn-info" onClick={() => redirectToTodoForm(todoitem.id)}>Edit</button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )   
}


export default TodoList;