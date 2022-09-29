import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import '../css/Contact.css';
// import contactImg from "./img/about-9.jpg"

function Contact() {
    const form = useRef();
    const [username, setUserName] = useState('');
    const [useremail, setUserEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(process.env.REACT_APP_SERVICE_ID,process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
             // alert("successful message")
            const success = document.querySelector('.success');
            const danger = document.querySelector('.danger');
            if (result.text === 'OK'){
                success.style.display ='block'
                setUserName('');
                setUserEmail('');
                setSubject('');
                setMessage('');
            }
            else{
                danger.style.display ='block'
            };
            setTimeout(()=>{
                danger.style.display ='none';
                success.style.display='none'
            }, 4000);
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <form ref={form} onSubmit={sendEmail}>
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Hire Me.</h1>
                            <p className="hire__text white">I am available for freelance work. Connect with me via phone:</p>
                           <p className="hire__text white"><strong>+234 7064 348 121</strong> or email <strong>nnabukomiracle@gmail.com</strong></p>
                        </div>
                        <div className="input__box">
                           <input type="text" className="contact name" placeholder="Your name *" name='user_name' onChange={e => setUserName(e.target.value)} value={username} required/>
                           <input type="email" className="contact email" placeholder="Your Email *" name='user_email' onChange={e => setUserEmail(e.target.value)} value={useremail} required/>
                           <input type="text" className="contact subject" placeholder="Write a Subject" name='subject' onChange={e => setSubject(e.target.value)} value={subject} />
                           <textarea name="message" id="message" placeholder="Write Your message" onChange={e => setMessage(e.target.value)} value={message} required></textarea>
                           <button className="btn contact pointer" type="submit">Submit</button>
                        </div>
                        <div className='message'>
                            <span className='message success'>Your message was successful!</span>
                            <span className='message danger'>Message failed! Please check you details and retry</span>
                        </div>
                    </div>
                </div>
                <div className="col__2">
                    {/* <img src={contactImg} alt="" className="contact__img" /> */}
                </div>
            </div>
        </div>
        </form>
    )
}

export default Contact