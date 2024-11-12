import React, { useState } from 'react';
import './App.css'; // Asegúrate de importar el archivo de estilos CSS

function App() {
  const [numero, setNumero] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [mensajeTipo, setMensajeTipo] = useState(''); // Para manejar el estilo de los mensajes

  const verificarNumero = () => {
    if (numero === '') {
      setMensaje('Por favor ingresa un número');
      setMensajeTipo('error');
    } else if (numero > 10) {
      setMensaje('El número es mayor que 10');
      setMensajeTipo('mayor');
    } else if (numero < 10) {
      setMensaje('El número es menor que 10');
      setMensajeTipo('menor');
    } else {
      setMensaje('El número es igual a 10');
      setMensajeTipo('igual');
    }
  };

  return (
    <div className="App">
      <h1>Condicional en React</h1>
      <div className="input-container">
        <input
          type="number"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
          placeholder="Ingresa un número"
          className="input"
        />
        <button onClick={verificarNumero} className="button">Verificar</button>
      </div>

      {mensaje && <h2 className={`mensaje ${mensajeTipo}`}>{mensaje}</h2>}
    </div>
  );
}

export default App;
