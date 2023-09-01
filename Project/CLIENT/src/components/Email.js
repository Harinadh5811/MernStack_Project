import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Email = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phone: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_83p2sqh ', 'template_ubzg5ud ', form.current, 'Mnhx1-02wQ7baR5We')
      .then((result) => {
        console.log(result.text);
        setIsSubmitted(true);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="services-container">
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-row">
          <label>Name:</label>
          <input type="text" name="name" value={`${formData.firstName} ${formData.lastName}`} onChange={handleInputChange} />
        </div>
        <div className="form-row">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
        </div>
        <div className="form-row">
          <label>Phone:</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} />
        </div>
        <div className="form-row">
          <label>Message:</label>
          <textarea name="message" value={formData.message} onChange={handleInputChange}></textarea>
        </div>
        <Button variant="contained" color="primary" type="submit" disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Send'}
        </Button>
      </form>
      {isSubmitted && <p className="form-success">Thank you for contacting us!</p>}
    </div>
  );
};

export default Email;
