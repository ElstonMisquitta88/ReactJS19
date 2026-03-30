import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import TodoService from "../services/todo.service";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TodoForm() {

    const initialProductForm = {
        task: ""
    }

    const [message, setmessage] = useState("");

    const navigate = useNavigate();
    const redirectToTodoList = () => {
        navigate(`/TodoList`);
    }


    const onHandleSaveTodo = (frm, resetForm) => {
        TodoService.AddTodo(frm.task)
            .then(response => {
                setmessage("TODO Saved Successfully!");
                resetForm();
                redirectToTodoList();
            })
            .catch(error => {
                setmessage("Error saving todo!");
            });
    }


    const productValidationSchema = Yup.object({
        task: Yup.string().required("TODO Task Required")
    })

    return (
        <>
            <h4>Add TODO </h4>
            {message && (
                <div className="alert alert-success" role="alert">
                    {message}
                </div>
            )}


            <div className="row">
                <div className="col-lg-6">

                    <Formik initialValues={initialProductForm}
                        enableReinitialize={true}
                        validationSchema={productValidationSchema}
                        onSubmit={(frm, { resetForm }) => onHandleSaveTodo(frm, resetForm)}>
                        <Form>

                            <div className="form-group">
                                <label>TODO Task</label>
                                <Field name="task" className="form-control"></Field>
                                 <ErrorMessage className="text-danger" component="label" name="task"></ErrorMessage>
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