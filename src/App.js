import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Home from './components/sections/home/home';
import Project from './components/sections/project/project';
import './App.css';

function App() {
  // Estado para controlar la sección activa
  const [activeSection, setActiveSection] = useState('home');

  // Función para manejar el cambio de sección
  const handleSectionChange = (sectionName) => {
    setActiveSection(sectionName);
  };

  // Renderizar el componente NavBar y el componente correspondiente a la sección activa
  return (
    <div className="App">
      <NavBar cambiar={activeSection} onSectionChange={handleSectionChange} />
      <main className="section-container">
        {activeSection === 'home' ? <Home /> : null}
        {activeSection === 'project' ? <Project />  : null}
      </main>
    </div>
  );
}

export default App;
