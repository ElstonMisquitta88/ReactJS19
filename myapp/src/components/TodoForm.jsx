import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import TodoService from "../services/todo.service";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function TodoForm() {

    const { id } = useParams();
    const [message, setmessage] = useState("");
    const [todoItem, settodoItem] = useState({
        task: ""
    });
    const _formMode = id ? "Edit" : "Add";



    const navigate = useNavigate();
    const redirectToTodoList = () => {
        navigate(`/TodoList`);
    }


    useEffect(() => {
        if (id) {
            console.log(`Edit Mode for ID: ${id}`);
            TodoService.getTodoById(id)
                .then(data => {
                    settodoItem({
                        task: data.task
                    });
                    console.log(`Fetched TODO: ${data.task}`);
                })
                .catch(error => console.error(`Error fetching todo for ID ${id}:`, error));
        }
        else {
            console.log("Add Mode");
        }
    }, []);


    const onHandleSaveTodo = (frm, resetForm) => {
        console.log(`Form Mode: ${_formMode}`);
        if (_formMode === "Add") {
            TodoService.AddTodo(frm.task)
                .then(response => {
                    setmessage("TODO Saved Successfully!");
                    resetForm();
                    redirectToTodoList();
                })
                .catch(error => {
                    setmessage("Error saving todo!");
                });
        } else if (_formMode === "Edit") {
            TodoService.UpdateTodo(frm.task, id)
                .then(response => {
                    setmessage("TODO Updated Successfully!");
                    resetForm();
                    redirectToTodoList();
                })
                .catch(error => {
                    setmessage("Error updating todo!");
                });
        }
    }


    const productValidationSchema = Yup.object({
        task: Yup.string().required("TODO Task Required")
    })

    return (
        <>
            <h4>{_formMode} TODO </h4>
            {message && (
                <div className="alert alert-success" role="alert">
                    {message}
                </div>
            )}


            <div className="row">
                <div className="col-lg-6">

                    <Formik initialValues={todoItem}
                        enableReinitialize={true}
                        validationSchema={productValidationSchema}
                        onSubmit={(frm, { resetForm }) => onHandleSaveTodo(frm, resetForm)}>
                        <Form>

                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">TODO Task</label>

                                <div className="col-sm-9">
                                    <Field name="task" className="form-control" />
                                    <ErrorMessage className="text-danger" component="label" name="task" />
                                </div>
                            </div>

                            <br />
                            <button type="submit" className="btn btn-primary">
                                Save TODO
                            </button>

                        </Form>
                    </Formik>


                </div>
            </div>
        </>
    )
}

export default TodoForm;