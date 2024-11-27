import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import NaveCenter from './NaveBareCenter/NaveCenter';






function App() {
  const [file, setFile] = useState(null);
  
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleImport = async () => {
    const formData = new FormData();
    formData.append('file', file);
    await axios.post('http://localhost:3000/import', formData);
    alert('Import réussi');
  };

  return (
    <>
    <div>
    <NaveCenter/>
    </div>
    <form  className="serveur">
    <div className='gestion'>
      <h1>Importer votre Base de donné excel</h1>
      <input type="file" onChange={handleFileChange} className='importation' />
      <button onClick={handleImport}>Importer</button>
    </div>
    </form>
    </>
  );
}

export default App;
