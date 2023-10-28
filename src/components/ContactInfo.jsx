import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import images from '../assets/images';

const Result = () =>{


    return(
        <div className='div-form'>
            <div>
                <h1 className='span' >Message sent</h1>
                <p>I have received your mail. I will contact you soon.</p>
                <img src={images.check} alt="" className='check'/>
            </div> 
        </div>
    )
}

const ContactInfo = ({language}) => {
  const form = useRef();
  const [result, showResult] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a6aeegx', 'template_qvfpurw', form.current, 'TX2wNnJ55Hpr0-Kwp')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.form?.reset
      showResult(true)
  };

  const content ={
    english:{
      name:'Name',
      email: 'Email',
      message: 'Message',
      send:'Send'
    },
    spanish:{
      name:'Nombre',
      email: 'Correo',
      message: 'Mensaje',
      send:'Enviar'
    }
  }




  return (
    <div className="div-form">
    <form ref={form} className="form" onSubmit={sendEmail}>
      <label className='labels' > {content[language].name} </label>
      <input className='input-space' type="text" name="user_name" />
      <br />
      <label className='labels' > {content[language].email} </label>
      <input className='input-space' type="email" name="user_email" />
      <br />
      <label className='labels' > {content[language].message} </label>
      <textarea className='input-space' name="message" />
      <br />
      <input className='box' type="submit" value={content[language].send} />
      <div className="divform">
      <div className="div-form"> {
                result ? <Result/> : null
      } 
      </div>
      </div>
    </form>
    </div>
  );
};

export default ContactInfo;