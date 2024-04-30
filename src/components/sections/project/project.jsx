import React from 'react';
import marketImage from '../../../assets/market.webp';
import portfolioImage from '../../../assets/portafolio.webp';



class Proyecto {
  constructor(img, titulo, tecnologia, descripcion, url) {
    this.img = img;
    this.titulo = titulo;
    this.tecnologia = tecnologia;
    this.descripcion = descripcion;
    this.url = url;
  }
}

function Project() {
  
  const proyectos = [
    new Proyecto(marketImage, 'Markets_Analyst', ['JavaScript'], 'Herramienta compacta desarrollada en JavaScript (ECMAScript 2021), empleando la API de Polygon.io. Este proyecto recopila y organiza datos de acciones estadounidenses en tiempo real, permitiendo la identificación de ganancias o pérdidas de manera eficiente.', 'https://github.com/GonzaloAdami/Market_Analyst/blob/main/Market_Analyst.js'),
    new Proyecto(portfolioImage, 'Portafolio', ['JavaScript', 'HTML5', 'CSS3'], 'He creado un portafolio web semántico y adaptable utilizando las tecnologías HTML5 y CSS3, junto con código JavaScript (ECMAScript 2021) escalable. Esta implementación no solo se centra en el diseño visual, sino que también considera una experiencia de usuario fluida y agradable (UX/UI), optimización para motores de búsqueda (SEO), y un manejo eficiente de múltiples idiomas. Además, el diseño incorpora una estructura de información optimizada, con una jerarquía de relevancia cuidadosamente planificada para facilitar la comprensión y navegación del contenido.', 'https://github.com/GonzaloAdami/Market_Analyst/blob/main/Market_Analyst.js'),
  ];

  const handleRedirect = (url) => {
    window.location.href = url;
  };

  return (
    <>
      <main id="section-project">
        
          <div id="carrusel" className="carrusel">
            <div className="carrusel-content">
              {proyectos.map((proyecto, index) => (
                <div key={index} className="box-project">
                  <div
                    className="background-project"
                    alt=""
                    style={{ backgroundImage: `url(${proyecto.img})` }}
                  ></div>
                  <div className="card-body">
                    <h1 className="title-card">{proyecto.titulo}</h1>
                    <div className="divisor-project"></div>
                    <div className="container-skills">
                      {proyecto.tecnologia.map((tech, index) => (
                        <div key={index} className={`ticket-skills ${tech}`}>{tech}</div>
                      ))}
                    </div>
                    <p className="information-project">{proyecto.descripcion}</p>
                    <div className="btn-container">
                      <button
                        className="btn-go-project"
                        onClick={() => handleRedirect(proyecto.url)}
                      >
                        Visitar Proyecto
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
      
      </main>
    </>
  );
}

export default Project;
