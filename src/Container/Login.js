import React, { useState } from 'react';
import Button, { ButtonType } from '../Componets/Common/Button/Button';
import { Form, FormikProvider, useFormik } from "formik";

import * as yup from 'yup';


function Login(props) {
    const [userType, setuserType] = useState('Login')
    const [name, setName] = useState('')
    const [reset, setReset] = useState(false)

    const handleLogin = () => {
        console.log(name)
    }

    const handleSignup = () => {
        console.log(name)
    }
    const handleReset = () => {
    }


    let signUpSchema = {
        email: yup.string()
            .required("E-mail is must be required")
            .email("Invalid E-mail"),
        password: yup.string()
            .required("The password you entered is incorrect.")
            .min(8, "password is must be 8 character")
    };
  let schema = yup.object().shape(signUpSchema);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });
      
    const { handleSubmit, errors, getFieldProps } = formik;


    return (
        <div>

            <div className="container">
                <div className="section-title">
                    {
                        reset === true ? <h2> forgot password</h2> :
                            userType === 'Signup' ?
                                <h2> Sign Up</h2>
                                :
                                <h2>Log In</h2>
                    }
                </div>
                <FormikProvider>
                    <Form onSubmit={handleSubmit}>
                        <div className="php-email-form ">
                            <div className="row justify-conatnt-center text-center ">
                                <div className="col-md-6 form-group mt-3 mt-md-0 mb-4  ">
                                    {
                                        reset === true ? null :
                                            userType === 'Login' ?
                                                <div className="row">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        className="form-control"
                                                        id="name"
                                                        onChange={(e) => setName(e.target.value)}
                                                        placeholder="Your Name"
                                                    />
                                                </div>
                                            : null
                                    }
                                </div>
                            </div>
                            <div className="col-md-6 form-group mt-3 my-4 mt-md-0">
                                <div className="row justify-content-center">
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        id="email"
                                        placeholder="Your Email"
                                        {...getFieldProps("email")}
                                         errors={Boolean(errors.email)}
                                        errorMessage={errors.email}
                                    />
                                </div>
                            </div>
                            {
                                reset === true ? null :
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <div className="row">
                                            <input
                                                type="password"
                                                className="form-control"
                                                name="password"
                                                id="password"
                                                placeholder="Your Password"
                                                 {...getFieldProps("password")}
                                                errors={Boolean(errors.password)}
                                               errorMessage={errors.password}
                                            />
                                        </div>
                                    </div>
                            }
                            <div className="mt-4">
                                {
                                    reset === true ?
                                        <Button buttonType={ButtonType.PRIMARY} type="submit" >Submit</Button>

                                        :
                                        userType === 'Login' ?
                                            <Button buttonType={ButtonType.PRIMARY}  type="submit">Log in</Button>
                                            :
                                            <Button buttonType={ButtonType.PRIMARY} type="submit" onClick={() => handleSignup()}>sign up</Button>
                                }
                            </div>
                            <div className="text-center my-4 ps-0">
                                {
                                    userType === 'Login' ?
                                        <div>
                                            <label className="pe-2">don't have an account :</label>
                                            <Button buttonType={ButtonType.LINK} onClick={() => { setReset(); setuserType('Signup') }}>Sign up</Button>
                                        </div>
                                        :
                                        <div>
                                            <label>Already have an account?</label>
                                            <Button buttonType={ButtonType.LINK} onClick={() => { setReset(); setuserType('Login') }}>Log in</Button>
                                        </div>
                                }
                            </div>
                            <div className="text-center">
                                <div> forgot password ? <Button buttonType={ButtonType.LINK} onClick={() => setReset(true)}>Click</Button></div>
                            </div>

                        </div>
                    </Form>
                </FormikProvider>
            </div>
        </div>
    );
}

export default Login;