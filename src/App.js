import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Home from './components/sections/home/home';
import Project from './components/sections/project/project';
import Contact from './components/sections/contact/contact';


import './App.css';

function App() {
  // Estado para controlar la sección activa
  const [activeSection, setActiveSection] = useState('home');

  const handleSectionChange = (sectionName) => {
    setActiveSection(sectionName);
  };


  return (
    <div className="App">
      <NavBar cambiar={activeSection} onSectionChange={handleSectionChange} />
      <main className="section-container">
        {activeSection === 'home' ? <Home /> : null}
        {activeSection === 'project' ? <Project />  : null}
        {activeSection === 'contact' ? <Contact /> : null}

      </main>
    </div>
  );
}

export default App;
