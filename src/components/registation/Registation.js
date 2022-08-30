import React, { useState, useEffect } from 'react'
import "./Registation.css"


const Registation = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = "GNC-Registation"
    }, [])
    const [stream, setStream] = useState("");
    const [errrmsg, setErrormsg] = useState("");
    const [registerVal, setRegisterVal] = useState({
        name: "",
        dob: "",
        email: "",
        fName: "",
        foccupation: "",
        mName: "",
        moccupation: "",
        Address: "",
        phNumber: "",
        stream: "",
    })
    const formValChangeStream = (e) => {
        if (e.target.checked === true) {
            setStream(e.target.value);
        }
    }

    const formValChange = (e) => {
        setRegisterVal({ ...registerVal, [e.target.name]: e.target.value })
    }

    //while subliting button
    const preRegistrationFormSubmit = (e) => {
        e.preventDefault();
        let a = document.getElementsByName("stream");
        let newVar = 0;
        for (let i = 0; i < a.length; i++) {
            if (a[i].checked === true) {
                newVar++;
                setRegisterVal({ ...registerVal, stream: a[i].value });
            }
            else {
                setRegisterVal({ ...registerVal, stream: "" });
            }
        }
        let validation = true;

        if (newVar !== 1) {
            // console.log("cannot send");
            setErrormsg("Please Check One stream")
            validation = false;
        }
        else {
            setErrormsg("")
            validation = true;
        }

        //to send in backend
        if (validation === true) {
            console.log("good");
            registerVal.stream = stream
            console.log(registerVal);

        }
        else {
            console.log("bad");
        }

    }

    return (
        <div id='regFormweb'>
            <form action="#" onSubmit={preRegistrationFormSubmit}>
                <h4>PRE-REGISTRATION FORM</h4>
                <div id="RegCheckStream">
                    <label htmlFor="stream" id='stream'>Stream*: </label>
                    <div className="optionsStream">
                        <div className="options">
                            <label htmlFor="streamBCA">B.C.A</label>
                            <input type="checkbox" name="stream" id="streamBCA" value="BCA" onChange={formValChangeStream} />
                        </div>
                        <div className="options">
                            <label htmlFor="streamBBM">B.B.M</label>
                            <input type="checkbox" name="stream" id="streamBBM" value="BBM" onChange={formValChangeStream} />
                        </div>
                        <div className="options">
                            <label htmlFor="streamBBS">B.B.S</label>
                            <input type="checkbox" name="stream" id="streamBBS" value="BBS" onChange={formValChangeStream} />
                        </div>
                        <div className="options">
                            <label htmlFor="streamBSW">B.S.W</label>
                            <input type="checkbox" name="stream" id="streamBSW" value="BSW" onChange={formValChangeStream} />
                        </div>
                        <div className="options">
                            <label htmlFor="streamMBS">M.B.S</label>
                            <input type="checkbox" name="stream" id="streamMBS" value="MBS" onChange={formValChangeStream} />
                        </div>
                    </div>
                </div>
                <p id='ErrorMessageReg'>{errrmsg}</p>

                <div id="registerInputfield">
                    <div id="RegName" className="inpfilds">
                        <label htmlFor="name">Name*: </label>
                        <input type="text" name="name" id="name" value={registerVal.name} onChange={formValChange} minLength="5" required placeholder='Enter Your Full Name' />
                    </div>

                    <div id="DOB" className="inpfilds">
                        <label htmlFor="DBO">Date Of Birth*: </label>
                        <input type="date" name="dob" id="dob" value={registerVal.dob} onChange={formValChange} required />
                    </div>

                    <div id="RegEmail" className="inpfilds">
                        <label htmlFor="email">Email*: </label>
                        <input type="email" name="email" id="email" value={registerVal.email} onChange={formValChange} required placeholder='Enter Your Email Address' />
                    </div>

                    <div id="RegFName" className="inpfilds">
                        <label htmlFor="fName">Father Name: </label>
                        <input type="text" name="fName" id="fName" value={registerVal.fName} onChange={formValChange} minLength="5" placeholder="Enter Father's Name" />
                    </div>

                    <div id="RegFOccupation" className="inpfilds">
                        <label htmlFor="foccupation">Occupation: </label>
                        <input type="text" name="foccupation" id="foccupation" value={registerVal.foccupation} onChange={formValChange} minLength="5" placeholder="Father's Occupation" />
                    </div>

                    <div id="RegMName" className="inpfilds">
                        <label htmlFor="mName">Mother Name: </label>
                        <input type="text" name="mName" id="mName" value={registerVal.mName} onChange={formValChange} minLength="5" placeholder="Enter Mother's Name" />
                    </div>

                    <div id="RegMOccupation" className="inpfilds">
                        <label htmlFor="moccupation">Occupation: </label>
                        <input type="text" name="moccupation" id="mfoccupation" value={registerVal.moccupation} onChange={formValChange} minLength="5" placeholder="Mother's Occupation" />
                    </div>


                    <div id="RegPH" className="inpfilds">
                        <label htmlFor="phNumber">Phone Number*: </label>
                        <input type="number" name="phNumber" id="phNumber" value={registerVal.phNumber} onChange={formValChange} minLength="10" required placeholder='Enter Your Phone Number' />
                    </div>

                    <div id="RegAddress" className="inpfilds">
                        <label htmlFor="Address">Address*: </label>
                        <input type="text" name="Address" id="Address" value={registerVal.Address} onChange={formValChange} minLength="5" required placeholder="Enter Your Address" />
                    </div>

                    <div id="RegSubBtn">
                        <button type='submit'>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Registation
