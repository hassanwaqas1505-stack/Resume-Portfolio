// import React, { useRef, useEffect } from 'react'
// import "./Contact.css"
// import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
// import { useState } from 'react';
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Contact = () => {
//   const sectionRef = useRef(null);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: ""
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     })
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     const res = await fetch("https://portfolio-backend-ten-rho.vercel.app/api/contact", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(formData)
//     })

//     const data = await res.json()
//     alert(data.message)
//   }

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const elements = gsap.utils.toArray(
//         ".contact-form h2, .contact-form p, .info-item, .info-type, .contact-form form"
//       );

//       gsap.set(elements, { transition: "none" });

//       gsap.fromTo(
//         elements,
//         {
//           autoAlpha: 0,
//           y: 60
//         },
//         {
//           autoAlpha: 1,
//           y: 0,
//           duration: 1,
//           stagger: 0.2,
//           ease: "power2.out",
//           overwrite: "auto",
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top 80%",
//             toggleActions: "play none none none"
//           },
//           onComplete: () => {
//             gsap.set(elements, { clearProps: "transform,transition" });
//           }
//         }
//       );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div className='contact-form' ref={sectionRef}>
//       <h2>Get in Touch</h2>
//       <p>Have a question or want to work together? Drop us a message!</p>

//       <div className="info-item">
//         <FaEnvelope />
//         <h3>Email</h3>
//         <p>hassanmugall123@gmail.com</p>
//       </div>

//       <div className="info-type">
//         <FaMapMarkerAlt />
//         <h3>Location</h3>
//         <p>Lahore, Pakistan</p>
//       </div>

//       <form onSubmit={handleSubmit}>
//         <input type="text" name='name' placeholder='Your Name' onChange={handleChange} />
//         <input type="email" name='email' placeholder='Your Email' onChange={handleChange} />
//         <input type="text" name='subject' placeholder='Subject' onChange={handleChange} />
//         <textarea name='message' placeholder='Your Message' rows="5" onChange={handleChange}></textarea>
//         <button>Send Message
//           <FaPaperPlane />
//         </button>
//       </form>
//     </div>
//   )
// }

// export default Contact

import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

const Contact = () => {
    const sectionRef = useRef(null);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(
                "https://portfolio-backend-ten-rho.vercel.app/api/contact",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                }
            );

            const data = await res.json();

            alert(data.message);

            if (res.ok) {
                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: ""
                });
            }
        } catch (error) {
            console.error("Contact Error:", error);
            alert("Something went wrong. Please try again.");
        }
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            const leftItems = gsap.utils.toArray(
                ".contact-form h2, .contact-form > p, .info-item, .info-type"
            );

            const form = sectionRef.current.querySelector("form");

            gsap.fromTo(
                leftItems,
                {
                    opacity: 0,
                    x: -70
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.9,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                        toggleActions: "play none none none"
                    }
                }
            );

            gsap.fromTo(
                form,
                {
                    opacity: 0,
                    x: 80,
                    scale: 0.96
                },
                {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="contact-form" ref={sectionRef}>
            <h2>Get in Touch</h2>

            <p>
                Have a question or want to work together? Drop us a message!
            </p>

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
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                />

                <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>

                <button type="submit">
                    Send Message
                    <FaPaperPlane />
                </button>
            </form>
        </div>
    );
};

export default Contact;