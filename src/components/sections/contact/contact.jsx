import React, { useState } from 'react';
import pieza from '../../../assets/pieza.webp';
import planta from '../../../assets/planta.webp';
import copy from '../../../assets/copy.webp';
import send from '../../../assets/send.webp';
import './contact.css';

function Contact() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Hide message after 2 seconds
      })
      .catch((error) => {
        console.error('Error copying to clipboard:', error);
      });
  };

  const openGmail = () => {
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=gonzaloadamie@gmail.com', '_blank');
  };

  return (
    <>
        <div className="section-contact">
            <img src={pieza} alt="" className="pieza" />
            <img src={planta} alt="" className="planta" />



            <div className="container-data-contact">
                <h1 className="title-data-contact">CONTACTO</h1>
                <p className="element-data-gmail-contact">
                    gonzaloadamie@gmail.com
                    <img src={copy} alt="" className="icon" onClick={() => copyToClipboard('gonzaloadamie@gmail.com')} />
                    <img src={send} alt="" className="icon" onClick={openGmail} />
                </p>
                {copied && <p style={{ fontSize: '1em', backgroundColor: 'green', padding: '7px', borderRadius: '5px', color: 'white', position: 'absolute', top: '16%', right: '26%', width: '15em' }}>¡Copiado al portapapeles!</p>}
                <div className="divisor-contact"></div>
                <p className="element-data-contact">Envia tu correo con tu solicitud y en breve respondere, gracias por su tiempo y estare encantado en trabajar con ustedes</p>
                <div className="form-container">
                <form action="https://formsubmit.co/gonzaloadamie@gmail.com" method="POST">
                    <p className="title-contact">Email</p>
                    <input type="email" name="email" required placeholder="Introducir email" className="input-gmail" />
                    <p className="title-contact">Mensaje</p>
                    <textarea type="text" name="message" required placeholder="Deja tu mensaje" className='input-message' />
                    <button type="submit" className='button-contact'>ENVIAR</button>
                </form>
                </div>
            </div>



        </div>
    </>
  );
}

export default Contact;
