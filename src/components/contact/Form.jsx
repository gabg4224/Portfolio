import emailjs from '@emailjs/browser';
import React, { useRef } from "react";
import "./Form.css";

const Form = () => {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oj7apvr",
        "template_xr8bx9r",
        form.current,
        "IVMnq10GW3UpUd8Pa"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );


      e.target.reset()
  };
  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="name" placeholder="Your Full Name" />

      <input type="email" name="email" placeholder="Your Email" required />
      <textarea
        name="message"
        rows="7"
        placeholder="Your Message"
        required
      ></textarea>

      <button type="submit" className="btn btn-primary">
        Send Message
      </button>
    </form>
  );
};

export default Form;
