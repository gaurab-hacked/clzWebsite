import "./Login.css";
import React, { useEffect, useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    // for scrolling top
    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = "GNC-Login"
    }, [])


    //for imputfield message error
    const [error, setError] = useState({
        username: "",
        password: ""
    });


    //for user name and password
    const [initialVal, setInitialVal] = useState({
        username: "",
        password: ""
    })
    const inpvalchange = (e) => {
        setInitialVal({ ...initialVal, [e.target.name]: e.target.value })
    }

    //for check box
    const [checkbox, setCheckBox] = useState("");
    const checkboxchange = (e) => {
        if (e.target.checked) {
            setCheckBox("true");
        }
        else {
            setCheckBox("false");
        }
    }

    //needs to send in backend
    const handelSubmit = (e) => {
        e.preventDefault();
        //include check box value
        initialVal.remember = checkbox;
        //include error logic
        if (initialVal.username.toString().length < 5 || initialVal.username.toString().length > 50 || !isNaN(initialVal.username)) {
            toast.error(<><div id="ErrorforTost">Error</div>{" "}Please Enter a Valid Username</>);
            setError({ username: "Name must be 5-50 character.", password: "" })
        }
        else if (initialVal.password.toString().length < 6 || initialVal.password.toString().length > 16) {
            toast.error(<><div id="ErrorforTost">Error</div>{" "}Please Enter a Valid Password</>);
            setError({ username: "", password: "Password must be 6-16 character" })
        }
        else {
            toast.success(<><div id="SuccessforTost">Success</div>{" "}Login Success</>);              
            setError({ username: "", password: "" });
            console.log(initialVal);
        }
    }

    // TODO: Check box

    return (
        <div id='Login'>
            <div className="loginSection">
                <h1>Log in</h1>
                <div id="LoginForm">
                    <form action="#" onSubmit={handelSubmit}>
                        <div className="Loginsection">
                            <label htmlFor="username">Username/Email</label>
                            <input type="text" name="username" id="username" placeholder='Enter your Username..' value={initialVal.username} onChange={inpvalchange} />
                            <p className="msgerror">{error.username}</p>
                        </div>

                        <div className="Loginsection">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="address" placeholder='Enter your password..' value={initialVal.password} onChange={inpvalchange} />
                            <p className="msgerror">{error.password}</p>
                        </div>

                        <div className="Loginsection">
                            <div className="remrmberme">
                                <input type="checkbox" name="checkbox" id="checkbox" value={checkbox} onChange={checkboxchange} />
                                <label htmlFor="checkbox">Remember me</label>
                            </div>
                        </div>

                        <div className="Loginsection">
                            <button>Login</button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    )
}

export default Login;