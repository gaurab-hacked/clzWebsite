import React, { useState, useEffect } from 'react'
import "./Registation.css"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Registation = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = "GNC-Registration"
    }, [])
    const [stream, setStream] = useState("");
    const [errrmsg, setErrormsg] = useState("");
    const [inpError, setInpError] = useState({
        name: "",
        dob: "",
        email: "",
        Address: "",
        phNumber: "",
    })
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
            toast.error(<><div id="ErrorforTost">Error</div>{" "}Please Check One Stream</>);
            setErrormsg("Please check one stream")
            validation = false;
        }
        else {
            setErrormsg("")
            validation = true;
            if (registerVal.name.length < 5 || registerVal.name.length >=30 || !isNaN(registerVal.name)) {
                // toast.error("Please Enter a Valid Name");
                toast.error(<><div id="ErrorforTost">Error</div>{" "}Please Enter a Valid Name</>);
                setInpError({ name: "Name must be 5-30 character.", dob: "", email: "", fName: "", foccupation: "", mName: "", moccupation: "", Address: "", phNumber: "", })
                validation = false;
            }
            else if (Number(registerVal.dob.slice(0, 4)) < 2040 || Number(registerVal.dob.slice(0, 4)) > 2075) {
                toast.error(<><div id="ErrorforTost">Error</div>{" "}Please Enter a Valid Date Of Birth</>);
                setInpError({ name: "", dob: "Please Enter a Valid date of birth in BS", email: "", fName: "", foccupation: "", mName: "", moccupation: "", Address: "", phNumber: "", })
                validation = false
            }
            else if (registerVal.email.length < 5) {
                toast.error(<><div id="ErrorforTost">Error</div>{" "}Please Enter a Valid Email</>);
                setInpError({ name: "", dob: "", email: "Please Enter a Valid email", fName: "", foccupation: "", mName: "", moccupation: "", Address: "", phNumber: "", })
                validation = false;
            }
            else if (registerVal.phNumber.length < 10 ||registerVal.phNumber.length >= 14) {
                toast.error(<><div id="ErrorforTost">Error</div>{" "}Please Enter a Valid Phone Number</>);
                setInpError({ name: "", dob: "", email: "", fName: "", foccupation: "", mName: "", moccupation: "", Address: "", phNumber: "Please Enter a Valid phone number", })
                validation = false;
            }
            else if (registerVal.Address.length < 5 || registerVal.Address.length >= 50 || !isNaN(registerVal.Address)) {
                toast.error(<><div id="ErrorforTost">Error</div>{" "}Please Enter a Valid Address</>);
                setInpError({ name: "", dob: "", email: "", fName: "", foccupation: "", mName: "", moccupation: "", Address: "Address must be 5-50 character", phNumber: "", })
                validation = false;
            }
            else{                
                setInpError({ name: "", dob: "", email: "", fName: "", foccupation: "", mName: "", moccupation: "", Address: "", phNumber: "", })
                validation = true;
            }
            
        }

        //to send in backend
        if (validation === true) {
            toast.success(<><div id="SuccessforTost">Success</div>{" "}Registration Success</>);              
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
                <p className='ErrorMessageReg'>{errrmsg}</p>

                <div id="registerInputfield">
                    <div id="RegName" className="inpfilds">
                        <label htmlFor="name">Name*: </label>
                        <input type="text" name="name" id="name" value={registerVal.name} onChange={formValChange} placeholder='Enter Your Full Name' />
                        <p className='ErrorMessageReg'>{inpError.name}</p>
                    </div>

                    <div id="DOB" className="inpfilds">
                        <label htmlFor="DBO">Date Of Birth*: </label>
                        <input type="date" name="dob" id="dob" value={registerVal.dob} onChange={formValChange} />
                        <p className='ErrorMessageReg'>{inpError.dob}</p>
                    </div>

                    <div id="RegEmail" className="inpfilds">
                        <label htmlFor="email">Email*: </label>
                        <input type="email" name="email" id="email" value={registerVal.email} onChange={formValChange} placeholder='Enter Your Email Address' />
                        <p className='ErrorMessageReg'>{inpError.email}</p>
                    </div>

                    <div id="RegFName" className="inpfilds">
                        <label htmlFor="fName">Father Name: </label>
                        <input type="text" name="fName" id="fName" value={registerVal.fName} onChange={formValChange} placeholder="Enter Father's Name" />
                    </div>

                    <div id="RegFOccupation" className="inpfilds">
                        <label htmlFor="foccupation">Occupation: </label>
                        <input type="text" name="foccupation" id="foccupation" value={registerVal.foccupation} onChange={formValChange} placeholder="Father's Occupation" />
                        <p className='ErrorMessageReg'>{inpError.foccupation}</p>
                    </div>

                    <div id="RegMName" className="inpfilds">
                        <label htmlFor="mName">Mother Name: </label>
                        <input type="text" name="mName" id="mName" value={registerVal.mName} onChange={formValChange} placeholder="Enter Mother's Name" />
                    </div>

                    <div id="RegMOccupation" className="inpfilds">
                        <label htmlFor="moccupation">Occupation: </label>
                        <input type="text" name="moccupation" id="mfoccupation" value={registerVal.moccupation} onChange={formValChange} placeholder="Mother's Occupation" />
                        <p className='ErrorMessageReg'>{inpError.moccupation}</p>
                    </div>


                    <div id="RegPH" className="inpfilds">
                        <label htmlFor="phNumber">Phone Number*: </label>
                        <input type="number" name="phNumber" id="phNumber" value={registerVal.phNumber} onChange={formValChange} placeholder='Enter Your Phone Number' />
                        <p className='ErrorMessageReg'>{inpError.phNumber}</p>
                    </div>

                    <div id="RegAddress" className="inpfilds">
                        <label htmlFor="Address">Address*: </label>
                        <input type="text" name="Address" id="Address" value={registerVal.Address} onChange={formValChange} placeholder="Enter Your Address" />
                        <p className='ErrorMessageReg'>{inpError.Address}</p>
                    </div>

                    <div id="RegSubBtn">
                        <button type='submit'>Submit</button>
                    </div>
                </div>
            </form>
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

export default Registation
