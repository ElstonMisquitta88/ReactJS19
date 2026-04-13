import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import authservice from "../services/auth.service";
import { UserContext } from "../context/UserProvider";

function login() {

    //Accessing the UserContext to get the current user information and the function to update it.
    const { currentUser, setCurrentUser } = useContext(UserContext);

    const initialLogin = {
        userName: "",
        password: ""
    }

    const [message, setmessage] = useState("");
    const [token, setToken] = useState(localStorage.getItem("token"));

    const loginValidationSchema = Yup.object({
        userName: Yup.string().required("User Name Required"),
        password: Yup.string().required("Password Required")
    })


    const navigate = useNavigate();
    const redirectTodoPage = () => {
        navigate(`/TodoList`);
    }

    const onLogin = (frm) => {
        authservice.login(frm)
            .then(response => {
                setToken(response);
                setmessage("Login Successfully");
                // set the current user information in the context so that it can be accessed across the app
                setCurrentUser({
                    userName: frm.userName
                });
                redirectTodoPage();
            }
            )
            .catch(error => {
                setmessage("Error logging in");
            });
    }
    const onlogout = () => {
        authservice.logout();
        setToken("");
        // CLEAR USER
        setCurrentUser(null);
        setmessage("Logged Out");
    }

    return (
        <>

            {message && (
                <div className="alert alert-success" role="alert">
                    {message}
                </div>
            )}


            <h4>ToDo List Login Page</h4>

            <div className="row">
                <div className="col-lg-6">

                    <Formik initialValues={initialLogin}
                        enableReinitialize={true}
                        validationSchema={loginValidationSchema}
                        onSubmit={(frm) => onLogin(frm)}>
                        <Form>

                            {!token && (
                                <span>
                                    <div className="form-group">
                                        <label>userName</label>
                                        <Field name="userName" className="form-control"></Field>
                                        <ErrorMessage className="text-danger" component="label" name="userName"></ErrorMessage>
                                    </div>

                                    <div className="form-group">
                                        <label>password</label>
                                        <Field name="password" className="form-control"></Field>
                                        <ErrorMessage className="text-danger" component="label" name="password"></ErrorMessage>
                                    </div>
                                </span>
                            )}
                            <br />
                            <div className="d-flex justify-content-start">
                                {!token && (
                                    <button type="submit" className="btn btn-primary me-2">Login </button>
                                )}

                                {token && (
                                    <button type="button" onClick={onlogout} className="btn btn-danger">Logout</button>
                                )}
                            </div>
                        </Form>
                    </Formik>


                </div>
            </div>
        </>
    )
}

export default login;