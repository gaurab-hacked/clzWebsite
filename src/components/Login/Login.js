import "./Login.css";
import React, { useState } from 'react'


const Login = () => {
    //for user name and password
    const [initialVal, setInitialVal] = useState({
        username:"",
        password:""
    })
    const inpvalchange = (e)=>{
        setInitialVal({...initialVal, [e.target.name]:e.target.value})
    }

    //for check box
    const [checkbox, setCheckBox] = useState("");
    const checkboxchange =(e)=>{
        if (e.target.checked) {
            setCheckBox("true");
        }
        else{
            setCheckBox("false");
        }
    }
    
    //needs to send in backend
    const handelSubmit = (e) =>{
        e.preventDefault();
        console.log("clicked");
        initialVal.remember = checkbox;
        console.log(initialVal);
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
                        </div>

                        <div className="Loginsection">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="address" placeholder='Enter your password..' value={initialVal.password} onChange={inpvalchange} />
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
        </div>
    )
}

export default Login;