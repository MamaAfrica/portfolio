import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import '../css/Contact.css';
// import contactImg from "./img/about-9.jpg"

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_twhywe8', 'template_gu3dn1s', form.current, '32B24Hxyp2N6w4dze')
        .then((result) => {
            console.log(result.text);
             // alert("successful message")
            const success = document.querySelector('.success');
            const danger = document.querySelector('.danger');
            if (result.text == 'OK'){
                success.style.display ='block'
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
                           <input type="text" className="contact name" placeholder="Your name *" name='user_name' required/>
                           <input type="email" className="contact email" placeholder="Your Email *" name='user_email' required/>
                           <input type="text" className="contact subject" placeholder="Write a Subject" name='subject' />
                           <textarea name="message" id="message" placeholder="Write Your message" required></textarea>
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