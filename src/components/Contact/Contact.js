import React, { useState } from 'react'
import "./Contact.css"

const Contact = () => {
  const [initialContact, setInitialContact] = useState({
    name:"",
    address:"",
    phnumber:"",
    email:"",
    message:""
  })
  const inpchange = (e)=>{
    setInitialContact({...initialContact, [e.target.name]:e.target.value});
  }
  const contactHandelSubmit = (e) =>{
    e.preventDefault();
    console.log(initialContact);
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
            </div>

            <div className="Contactsection">
              <label htmlFor="address">Address</label>
              <input type="text" name="address" id="address" placeholder='Enter your Address..' value={initialContact.address} onChange={inpchange} />
            </div>

            <div className="Contactsection">
              <label htmlFor="phnumber">Phone Number</label>
              <input type="number" name="phnumber" id="phnumber" placeholder='Enter your phone number (980-000-0000)..' value={initialContact.phnumber} onChange={inpchange} />
            </div>

            <div className="Contactsection">
              <label htmlFor="email">E-mail</label>
              <input type="email" name="email" id="email" placeholder='Enter Your E-mail..' value={initialContact.email} onChange={inpchange} />
            </div>

            <div className="Contactsection">
              <textarea name="message" id="message" cols="30" rows="10" placeholder='Your message..' value={initialContact.message} onChange={inpchange}></textarea>
            </div>
            <div className="Contactsection">
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact