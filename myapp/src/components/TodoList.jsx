import { useState, useEffect } from "react";
import TodoService from "../services/todo.service";



function TodoList() {
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        TodoService.getAllTodos()
            .then(data => {
                console.log("API Data:", data);
                setTodoList(data);
            })
            .catch(error => console.error('Error fetching todos:', error));
    }, []);


    const handleToggle = (todoitem) => {
        console.log(todoitem.id);
        console.log(todoitem.isComplete);

        TodoService.MarkComplete(todoitem.id)
            .then(() => {
                setTodoList(prev =>
                    prev.map(t =>
                        t.id === todoitem.id
                            ? { ...t, isComplete: true } // ✅ update here
                            : t
                    )
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
                    </tr>
                </thead>
                <tbody>
                    {todoList.map((todoitem, index) => (
                        <tr key={todoitem.id}>
                            <td>{todoitem.id}</td>
                            <td>{todoitem.task}</td>
                            <td>
                                <input
                                    type="checkbox"
                                    checked={todoitem.isComplete}
                                    onChange={() => handleToggle(todoitem)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )   // Component implementation
}


export default TodoList;