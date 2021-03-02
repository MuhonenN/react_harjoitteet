import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './App.css';

function App() {
    const [registrationFormStatus, setRegistrationFormStatus] = useState(false)
    const loginProps = useSpring({ left: registrationFormStatus ? -500 : 0 })
    const registerProps = useSpring({ left: registrationFormStatus ? 0 : 500 })

    const loginBtnProps = useSpring({ borderBottom: registrationFormStatus ? 'solid 0px transparent' : 'solid 2px #1059FF' })
    const registerBtnProps = useSpring({ borderBottom: registrationFormStatus ? 'solid 2px #1059FF' : 'solid 0px transparent' })

    function registerClicked() { setRegistrationFormStatus(true) }
    function loginClicked() { setRegistrationFormStatus(false) }

    return (
        <div className="login-register-wrapper">
            <div className="nav-buttons">
                <animated.button
                    onClick={loginClicked}
                    id="loginBtn"
                    style={loginBtnProps}
                >
                    Login
                </animated.button>
                <animated.button
                    onClick={registerClicked}
                    id="registerBtn"
                    style={registerBtnProps}
                >
                    Register
                </animated.button>
            </div>
            <div className="form-group">
                <animated.form
                    action=""
                    id="loginform"
                    style={loginProps}
                >
                    <LoginForm />
                </animated.form>
                <animated.form
                    action=""
                    id="registerform"
                    style={registerProps}
                >
                    <RegisterForm />
                </animated.form>
            </div>
            <animated.div
                className="forgot-panel"
                style={loginProps}
            >
                <a href="#">Forgot your password</a>
            </animated.div>
        </div>
    );
}

function LoginForm() {
    return (
        <React.Fragment>
            <label for='username'>USERNAME</label>
            <input type='text' id='username' />
            <lable for='password'>PASSWORD</lable>
            <input type='password' id='password' />
            <input type='submit' value='submit' className='submit' />
        </React.Fragment>
    )
}

function RegisterForm() {
    return (
        <React.Fragment>
            <label for='fullname'>full name</label>
            <input fype='text' id='fullname' />
            <label for='email'>email</label>
            <input type='email' id='email' />
            <label for='password'>password</label>
            <input type='password' id='password' />
            <label for='password2'>confirm password</label>
            <input type='password' id='password2' />
            <input type='submit' value='submit' class='submit' />
        </React.Fragment>
    )
}


export default App;
