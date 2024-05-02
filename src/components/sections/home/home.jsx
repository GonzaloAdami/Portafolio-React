import React, { useState } from 'react';
import planta from '../../../assets/planta.webp';
import pieza from '../../../assets/pieza.webp';
import copy from '../../../assets/copy.webp';
import send from '../../../assets/send.webp';
import './home.css';

function Home() {
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000); // Ocultar el mensaje después de 2 segundos
            })
            .catch((error) => {
                console.error('Error al copiar al portapapeles:', error);
            });
    };

    const openGmail = () => {
        window.open('https://mail.google.com/mail/?view=cm&fs=1&to=gonzaloadamie@gmail.com', '_blank');
    };
    const [copied, setCopied] = useState(false);

    return (
        <>
            <main id="section-home">
                <div className='container-skills'>
                    <article className="container-data-database">
                        <h1 className="title-data">DATABASE</h1>
                        <p className="element-data">MySQL 8</p>                
                    </article>


                    <article className="container-data-framework">
                        <h1 className="title-data">FRAMEWORK</h1>
                        <p className="element-data">Angular 17</p>
                        <p className="element-data">React 18.1</p>
                    </article>

                    <article className="container-data-skills">
                        <h1 className="title-data">SKILLS</h1>
                        <p className="element-data">JavaScript ECMAScript 2021</p>
                        <p className="element-data">TypeScript 5.3</p>
                    </article>
                </div>

                <div className="container-photos">
                    <img src={pieza} alt="Reina" className="pieza" />
                    <img src={planta} alt="planta" className="planta" />
                </div>

                <div className='container-about'>           
                        <h1 className="title-data-about">
                            Gonzalo Ezequiel 
                            <br />
                            Adami
                            <br />
                            FrontEnd
                        </h1>
                        <p className="element-data-gmail">
                            gonzaloadamie@gmail.com
                            <img src={copy} alt="" className="icon"  onClick={() => copyToClipboard('gonzaloadamie@gmail.com')}/>
                            <img src={send} alt="" className="icon"  onClick={openGmail}/>
                        </p>
                        {copied && <p style={{ fontSize: '1vw', backgroundColor: 'green', padding: '5px', borderRadius: '5px', color: 'white', position: 'absolute', top: '60%', left: '50%', transform: 'translate(25%, -50%)'}}>¡Copiado al portapapeles!</p>}
                        <div className="divisor-about"></div>
                        <p className="element-data-about">Amplia experiencia en desarrollo web con un enfoque principal en Angular y TypeScript. Destacando la priorización de un código limpio, semántico, responsivo y escalable para garantizar la eficiencia y calidad del producto final.</p>                          
                </div>

               {/*<article>
                    }<p className="element-data-en">EN</p>
                    <p className="element-data-es">ES</p>
                </article>*/}
            </main>    
        </>              
    );
}

export default Home;
