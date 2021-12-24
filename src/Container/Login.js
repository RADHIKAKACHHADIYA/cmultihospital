import React, { useState } from 'react';

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
                                <button type="submit" onClick={() => handleReset()}>Submit</button>
                                :
                                userType === 'Login' ?
                                    <button className="border-0 bg-primary text-white py-2 px-3" type="submit" onClick={() => handleLogin()}>Log in</button>
                                    :
                                    <button className="border-0 bg-primary text-white py-2 px-3" type="submit" onClick={() => handleSignup()}>sign up</button>
                        }
                    </div>
                    <div className="text-center my-4 ps-0">
                        {
                            userType === 'Login' ?
                                <div>
                                    <label  className="pe-2">don't have an account :</label>
                                    <button className="border-0 bg-primary text-white py-2 px-3" onClick={() => { setReset(); setuserType('Signup') }}>Sign up</button>
                                </div>
                                :
                                <div>
                                    <label>Already have an account?</label>
                                    <button className="border-0 bg-primary text-white py-2 px-3" onClick={() => { setReset(); setuserType('Login') }}>Log in</button>
                                </div>
                        }
                    </div>
                    <div className="text-center">
                        <div> forgot password ? <button className="border-0 bg-white text-primary" onClick={() => setReset(true)}>Click</button></div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Login;