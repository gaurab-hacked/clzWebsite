import React, { useEffect, useState } from 'react'
import "./Contact.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "GNC-Contact"
  }, [])


  //for error message 
  const [error, setError] = useState({
    name: "",
    address: "",
    phnumber: "",
    email: "",
    message: ""
  })


  const [initialContact, setInitialContact] = useState({
    name: "",
    address: "",
    phnumber: "",
    email: "",
    message: ""
  })
  const inpchange = (e) => {
    setInitialContact({ ...initialContact, [e.target.name]: e.target.value });
  }
  const contactHandelSubmit = (e) => {
    e.preventDefault();
    //for error logic
    if (initialContact.name.toString().length < 5 || initialContact.name.toString().length > 30 || !isNaN(initialContact.name)) {
      setError({ name: "Name must be 5-30 character.", address: "", phnumber: "", email: "", message: "" })
      toast.error(<><div id="ErrorforTost">Error</div>{" "}Please Enter a Valid Name</>);
    }
    else if (initialContact.address.toString().length < 5 || initialContact.address.toString().length > 40) {
      toast.error(<><div id="ErrorforTost">Error</div>{" "}Please Enter a Valid Address</>);
      setError({ name: "", address: "Address must be 5-40 character.", phnumber: "", email: "", message: "" })
    }
    else if (initialContact.phnumber.toString().length < 10 || initialContact.address.toString().length > 14) {
      toast.error(<><div id="ErrorforTost">Error</div>{" "}Please Enter a Valid Phone Number</>);
      setError({ name: "", address: "", phnumber: "Please Enter a Valid phone number", email: "", message: "" })
    }
    else if (initialContact.email.toString().length < 5) {
      toast.error(<><div id="ErrorforTost">Error</div>{" "}Please Enter a Valid Email</>);
      setError({ name: "", address: "", phnumber: "", email: "Please Enter a Valid Email address", message: "" })
    }
    else if (initialContact.message.toString().length < 20 || initialContact.message.toString().length > 500) {
      toast.error(<><div id="ErrorforTost">Error</div>{" "}Please Enter a Valid Message</>);
      setError({ name: "", address: "", phnumber: "", email: "", message: "Message must be 20-500 character" })
    }
    else {
      setError({ name: "", address: "", phnumber: "", email: "", message: "" })
      toast.success(<><div id="SuccessforTost">Success</div>{" "}Submit Success</>);              
      console.log(initialContact);
    }
  }
  return (
    <div id='Contact'>
      <div className="contentSection">
        <h1>Contact</h1>
        <div id="ContactForm">
          <form action="#" onSubmit={contactHandelSubmit}>
            <div className="Contactsection">
              <label htmlFor="name">Your Name</label>
              <input type="text" name="name" id="name" placeholder='Enter your name..' value={initialContact.name} onChange={inpchange} />
              <p className='Contacterrormsg'>{error.name}</p>
            </div>

            <div className="Contactsection">
              <label htmlFor="address">Address</label>
              <input type="text" name="address" id="address" placeholder='Enter your Address..' value={initialContact.address} onChange={inpchange} />
              <div className="Contacterrormsg">{error.address}</div>
            </div>

            <div className="Contactsection">
              <label htmlFor="phnumber">Phone Number</label>
              <input type="number" name="phnumber" id="phnumber" placeholder='Enter your phone number (980-000-0000)..' value={initialContact.phnumber} onChange={inpchange} />
              <div className="Contacterrormsg">{error.phnumber}</div>
            </div>

            <div className="Contactsection">
              <label htmlFor="email">E-mail</label>
              <input type="email" name="email" id="email" placeholder='Enter Your E-mail..' value={initialContact.email} onChange={inpchange} />
              <div className="Contacterrormsg">{error.email}</div>
            </div>

            <div className="Contactsection">
              <textarea name="message" id="message" cols="30" rows="10" placeholder='Your message..' value={initialContact.message} onChange={inpchange}></textarea>
              <div className="Contacterrormsg">{error.message}</div>
            </div>
            <div className="Contactsection">
              <button>Submit</button>
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

export default Contact