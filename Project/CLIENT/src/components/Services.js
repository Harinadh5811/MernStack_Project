import React, { useRef, useState } from 'react';
import '../App.css';
import emailjs from '@emailjs/browser';
import './Services.css';
function Services(){
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cqabfji', 'template_quv76ne', form.current, '1VuuFEQz5uPnJSSGo')
      .then((result) => {
          console.log(result.text);
          setIsSubmitted(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="services-container">
      <h2 className="services-header">Laptop Repair Request Form</h2>
      <form ref={form} onSubmit={ sendEmail }>
        <div className="form-row">
          <label>Name:</label>
          <input type="text" name="from_name" />
        </div>
        <div className="form-row">
          <label>Email:</label>
          <input type="email" name="from_email" />
        </div>
        <div className="form-row">
          <label>Laptop Name:</label>
          <input type="text" name="lap_name" />
        </div>
        <div className="form-row">
          <label>Laptop Model:</label>
          <input type="text" name="mod_num" />
        </div>
        <div className="form-row">
          <label>Warranty Information:</label>
          <input type="text" name="war_info" />
        </div>
        <div className="form-row">
          <label>Type of Issue:</label>
          <input type="text" name="iss_type" />
        </div>
        <div className="form-row">
          <label>Message:</label>
          <textarea name="message" />
        </div>
        <div className="form-row">
          <button type="submit">Send Request</button>
        </div>
      </form>
      {isSubmitted && <p className="form-success">Thank you for contacting us!</p>}
    </div>
  );
};

export default Services;
