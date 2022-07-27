import {useState, useRef} from 'react'
import emailjs from '@emailjs/browser';

import "./Contact.css";

const Contact = () => {
  const form = useRef()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  
  const nameHandler = (e) => setName(e.target.value)
  const emailHandler = (e) => setEmail(e.target.value)
  const messageHandler = (e) => setMsg(e.target.value)
  
  const sendMail = (event) => {
    event.preventDefault()
    
    emailjs.sendForm('service_mmpbb7p', 'template_bdvtt1s', form.current, 'DNRlZZitYJts7E-V6')
      .then((result) => {
          console.log(result.text);
    }, (error) => {
          console.log(error.text);
    });
    
    document.getElementById('result').innerText = `I've received your message, I'll get back to you soon.`

    setName('')
    setEmail('')
    setMsg('')
  }

  return (
    <div className="contact">
      <div className="contact-container">
        <h1>
          Contact Me<label Style="float:right;">&#9993;</label>
        </h1>
        <hr />
        <form ref={form} className="contact-div">
          <h2>Let's Talk</h2>
          <input Style="color:white;" name='user_name' type="text" value={name} placeholder="Name" required onChange={nameHandler}/>
          <div></div>
          <input Style="color:white;" name='user_email' type="email" value={email} placeholder="Email" required onChange={emailHandler}/>
          <br />
          <br />
          <textarea name='message' Style="color:white;" value={msg} placeholder="How can I help you..." required onChange={messageHandler}></textarea>
          <br />
          <br />
          <button className="button" type="submit" value="submit" onClick={sendMail}>
            Send Message
          </button>
          <div id="result"></div>
        </form>
        <h1>
          <label Style="padding-left:15%;">&#128231;</label>
          <label Style="float:right;padding-right:15%;">&#128241;</label>
        </h1>
        <h3>
          <label Style="padding-left:14%;">E-mail</label>
          <label Style="float:right;padding-right:12%;">Send Message</label>
        </h3>
      </div>
    </div>
  );
};

export default Contact;
