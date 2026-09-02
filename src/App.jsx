import React from 'react';
import './App.css';

// El link de destino de tu embudo
const nextEraUrl = 'https://claude.ai/code/artifact/234b964b-9ca7-4b3e-89bc-484c32c0e5c5'; 

function App() {
  
  const handleClick = (e) => {
    // 1. Prevenimos la redirección inmediata por defecto del tag <a>
    e.preventDefault(); 

    // 2. Creamos un enlace invisible para disparar la descarga
    const downloadLink = document.createElement('a');
    
    // La barra "/" apunta a la carpeta public de Vite
    downloadLink.href = '/escenarios_inversion.docx'; 
    downloadLink.download = 'escenarios_inversion.docx'; // Nombre con el que se guarda
    
    // Lo agregamos al documento, hacemos clic y lo borramos
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

    // 3. Le damos al navegador 500 milisegundos para que inicie la descarga 
    // tranquilamente, y luego lo mandamos a la siguiente URL.
    setTimeout(() => {
      window.location.href = nextEraUrl;
    }, 500); 
  };

  return (
    <a href={nextEraUrl} onClick={handleClick} className="full-screen-link">
      <div className="background-layer"></div>
      <span className="button-text">Próxima Era</span>
    </a>
  );
}

export default App;