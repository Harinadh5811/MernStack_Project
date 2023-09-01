import React, { useRef, useState } from 'react';
import '../App.css';
import emailjs from '@emailjs/browser';

function ContactUs(){
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qhq459a', 'template_hdn2ceu', form.current, '1VuuFEQz5uPnJSSGo')
      .then((result) => {
          console.log(result.text);
          setIsSubmitted(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div style={{ color:"green" }} className="App-login">
      <p>Contact us </p>
      <p class="solid" style={{color:"black"}}>
        <form ref={form} onSubmit={ sendEmail }>
          <label style={{color:"blue"}}>Name</label>
          <input type="text" name="from_name" /><br></br>
          <label style={{color:"blue"}}>Email</label>
          <input type="email" name="from_email" /><br></br>
          <label style={{color:"blue"}}>Message</label>
          <textarea name="message" /><br></br>
          <input type="submit" value="Send Request" style={{color:"red"}} /><br></br>
        </form>
      </p>
      {isSubmitted && <p>Thank you for contacting us!</p>}
    </div>
  );
};

export default ContactUs;
