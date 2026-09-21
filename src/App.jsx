import Header from './components/Header.jsx';
import ListaPaises from './components/ListaPaises.jsx';
import usePaises from './hooks/usePaises.js';
import './App.css'
import { useState } from 'react';

function App() {
  const { paises, cargando, error } = usePaises();
  const [busqueda, setBusqueda] = useState('');
  const [region, setRegion] = useState('');

  const paisesFiltrados = paises.filter((pais) => {
    const coincideNombre = pais.names?.common
      ?.toLowerCase()
      .includes(busqueda.toLowerCase());
    const coincideRegion = region === '' || pais.region === region;
    return coincideNombre && coincideRegion;
  });

  return (
    <div className="app">
      <Header
        busqueda={busqueda}
        onBusquedaChange={setBusqueda}
        region={region}
        onRegionChange={setRegion}
      />

      {cargando && <p className="mensaje">Cargando países...</p>}

      {error && <p className="mensaje error">Ocurrió un error: {error}</p>}

      {!cargando && !error && <ListaPaises paises={paisesFiltrados} />}
    </div>
  );
}

export default App;