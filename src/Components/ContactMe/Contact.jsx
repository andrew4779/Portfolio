import { useRef } from 'react';
import './Contact';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const formRef = useRef();
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsPending(true);
        // Emailjs SDK
        emailjs.sendForm('service_37o2ry4', 'template_iszvx1g', formRef.current, 's35Q1dxJHBaG_Uhj6')
            .then((result) => {
                console.log(result.text);
                alert("Message Sent!");
                setIsPending(false);
                navigate("/");
            }, (error) => {
                console.log(error.text);
                alert("Failed! Message NOT Sent", error);
                navigate("/contact")
            } 
        );
    }

    return (
        <div className="contact-body">
            <div className="">
                <h2 className="navbar-brand headline" href="/"><span className="dot align-top mr-3">do</span>Contact Me</h2>
                <div className="contact-form">
                    <div className="contact-box">
                        <form action="" ref={formRef} onSubmit={handleSubmit}>
                            <div className="form-place">
                                <div className="d-flex res-flex">
                                    <label htmlFor="user-name">Name <span className="star">*</span>
                                        <input type="text" name="username" required />
                                    </label>
                                    <label htmlFor="user-email">Email <span className="star">*</span>
                                        <input type="email" name="useremail" required />
                                    </label>
                                </div>
                                <label htmlFor="user-subject">Subject <span className="star">*</span>
                                    <input type="text" name="user-subject" id="subject" required />
                                </label>
                                <label htmlFor="user-message">Message <span className="star">*</span>
                                    <textarea form-control="true" name="message" id="message" cols="45" rows="4" required></textarea>
                                </label>
                                {!isPending && <button id="submit" className="btn">SEND</button>}
                                {isPending && <button id="submit" className="btn">Sending...</button>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}


export default Contact;