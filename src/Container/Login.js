import React, { useState } from 'react';
import Button ,{ ButtonType } from '../Componets/Common/Button/Button';

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
                                                required
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
                                required
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
                                        required
                                    />
                                </div>
                            </div>
                    }
                    <div className="mt-4">
                        {
                            reset === true ?
                                <Button  buttonType={ButtonType.PRIMARY}  type="submit" onClick={() => handleReset()}>Submit</Button>
                        
                                :
                                userType === 'Login' ?
                                    <Button  buttonType={ButtonType.PRIMARY} type="submit" onClick={() => handleLogin()}>Log in</Button>
                                    :
                                    <Button  buttonType={ButtonType.PRIMARY} type="submit" onClick={() => handleSignup()}>sign up</Button>
                        }
                    </div>
                    <div className="text-center my-4 ps-0">
                        {
                            userType === 'Login' ?
                                <div>
                                    <label  className="pe-2">don't have an account :</label>
                                    <Button  buttonType={ButtonType.LINK} onClick={() => { setReset(); setuserType('Signup') }}>Sign up</Button>
                                </div>
                                :
                                <div>
                                    <label>Already have an account?</label>
                                    <Button  buttonType={ButtonType.LINK} onClick={() => { setReset(); setuserType('Login') }}>Log in</Button>
                                </div>
                        }
                    </div>
                    <div className="text-center">
                        <div> forgot password ? <Button  buttonType={ButtonType.LINK} onClick={() => setReset(true)}>Click</Button></div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Login;