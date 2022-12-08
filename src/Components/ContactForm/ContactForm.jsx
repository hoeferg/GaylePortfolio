import './ContactForm.css';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ContactForm() {
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [show, setShow] = useState(false);
    const [emailDelivery, setEmailDelivery] = useState('')

    const handleClose = () => {
        setShow(false);
        setEmailDelivery('');
    };
    const handleShow = () => (setShow(true));

    const form = useRef();

    function handleChange(e) {
        const {target} = e;
        const {name: inputType, value: inputValue} = target;

        switch(inputType) {
            case "subject": setSubject(inputValue);
                break;
            case "email": setEmail(inputValue);
                break;
            default: setMessage(inputValue);
                break;
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(subject, email, message);
        emailjs.sendForm(process.env.SERVICE, process.env.TEMPLATE, form.current, process.env.PUBLIC)
        .then((result) => {
            console.log(result.text);
            setEmailDelivery("success");
            handleShow();
        }, (error) => {
            console.log(error.text);
            setEmailDelivery("rejected");
            handleShow();
        });
        setSubject("");
        setEmail("");
        setMessage("");
    }

    return (
        <>
            <div className ="d-flex py-5">
                <form ref={form} className ="offset-3 col-6 py-2" onSubmit={handleSubmit}>
                    <div className ="d-flex justify-content-center flex-wrap py-5">
                        <h2 className="text-light py-3 form-header">Send Me A Message!</h2>
                        <div className="d-flex col-10 justify-content-between m-3">
                            <div className ="col-5">
                                <input value={subject} name="subject" type="text" className ="customInput" placeholder='Enter Subject Here' onChange={handleChange} required/>
                                <span className ="form-helper-text">Subject</span>
                            </div>
                            <div className ="col-5">
                                <input value={email} name="email" type="email" className ="customInput" placeholder='example@email.com' onChange={handleChange} required/>
                                <span className ="form-helper-text">Email</span>
                            </div>
                        </div>
                        <div className ="col-10 m-3">
                            <textarea value={message} id="contactForm" name='message' className ="customTxtArea" rows="4" placeholder='Enter Message Here' onChange={handleChange} required></textarea>
                            <span className ="form-helper-text">Message</span>
                        </div>
                        <button className="col-3 btn btn-primary form-button" type="submit">Submit</button>
                    </div>
                </form>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{(emailDelivery === "success")? "Message Received!": "Message Failed To Send"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{emailDelivery === "success" ? "I'll reach out to you shortly": "Something went wrong, please email me directly at gaylehoefer@gmail.com"}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}