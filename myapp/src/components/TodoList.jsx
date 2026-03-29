import { useState, useEffect } from "react";
import TodoService from "../services/todo.service";



function TodoList() {
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        TodoService.getAllTodos()
            .then(data => {
                setTodoList(data);
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

    return (
        <>
            <h1>Todo List</h1>
            <table className="table table-striped" border="1" cellPadding="10" cellSpacing="0">
                <thead>
                    <tr>
                        <th>Todo Id</th>
                        <th>Task</th>
                        <th>Is Complete</th>
                        <th>Delete Task</th>
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
                                <button className="btn btn-danger" onClick={() => handleDelete(todoitem.id)}>Delete</button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )   // Component implementation
}


export default TodoList;