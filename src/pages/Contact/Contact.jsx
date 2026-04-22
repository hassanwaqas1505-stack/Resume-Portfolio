import React from 'react'
import "./Contact.css"
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane  } from "react-icons/fa";
import { useState } from 'react';

const Contact = () => {

     const [formData, setFormData] = useState({
      name: "",
      email: "",
      subject: "",
      message: ""
     });

     const handleChange = (e) =>{
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
     };
     
     const handleSubmit = async(e) =>{
      e.preventDefault()

      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })

      const data = await res.json()
      alert(data.message)
     }
  return (
    <div className='contact-form'>
        <h2>Get in Touch</h2>
        <p>Have a question or want to work together? Drop us a message!</p>
   
       <div className="info-item">
         <FaEnvelope />
        <h3>Email</h3>
        <p>hassanmugall123@gmail.com</p>
       </div>

      <div className="info-type">
      <FaMapMarkerAlt />
      <h3>Location</h3>
      <p>Lahore, Pakistan</p>
      </div>


      <form onSubmit={handleSubmit}>
        <input type="text" name='name' placeholder='Your Name' onChange={handleChange}/>
        <input type="email" name='email' placeholder='Your Email' onChange={handleChange}/>
        <input type="text" name='subject' placeholder='Subject' onChange={handleChange}/>
        <textarea name='message' placeholder='Your Message' rows="5" onChange={handleChange}></textarea>
        <button>Send Message
            <FaPaperPlane />
        </button>
      </form>
    </div>
  )
}

export default Contact
