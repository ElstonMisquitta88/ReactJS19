import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authservice from "../services/auth.service";

function Login() {

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
        navigate(`/Login`);
    }

    const onHandleLogin = (frm, resetForm) => {
        authservice.login(frm)
            .then(response => {
                setToken(response);
                setmessage("Login Successfully! Token :" + response);
                resetForm();
                redirectTodoPage();
            }
            )
            .catch(error => {
                setmessage("Error logging in!");
            });
    }

    useEffect(() => {
        console.log("Updated token:", token);
    }, [token]);

    const logout = () => {
        authservice.logout();
        setToken("");
        setmessage("Logged Out");
    }



    return (
        <>

            {message && (
                <div className="alert alert-success" role="alert">
                    {message}
                </div>
            )}


            <h4>Login</h4>

            <div className="row">
                <div className="col-lg-6">

                    <Formik initialValues={initialLogin}
                        enableReinitialize={true}
                        validationSchema={loginValidationSchema}
                        onSubmit={(frm, { resetForm }) => onHandleLogin(frm, resetForm)}>
                        <Form>

                            {!token && (
                                <span>
                                    <div className="form-group">
                                        <label>userName</label>
                                        <Field name="userName" className="form-control"></Field>
                                    </div>

                                    <div className="form-group">
                                        <label>password</label>
                                        <Field name="password" className="form-control"></Field>
                                        <ErrorMessage className="text-danger" component="label" name="password"></ErrorMessage>
                                    </div>
                                </span>
                            )}
                            <br />
                            <div class="d-flex justify-content-start">
                                {!token && (
                                    <button type="submit" className="btn btn-primary me-2">Login </button>
                                )}

                                {token && (
                                    <button type="button" onClick={logout} className="btn btn-danger">Logout</button>
                                )}
                            </div>
                        </Form>
                    </Formik>


                </div>
            </div>
        </>
    )
}

export default Login;