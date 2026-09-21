function PaisCard({ pais }) {
    // "||" da un valor por defecto cuando el dato no viene en la API
  const nombre = pais.names?.common || 'Nombre desconocido';
  const region = pais.region || 'Sin región';
  const poblacion = pais.population?.toLocaleString() || 'Sin datos';
  const capital = pais.capitals?.[0]?.name || 'Sin capital';
  const bandera = pais.flag?.url_png;

  return (
    <div className="pais-card">
      {bandera ? (
        <img src={bandera} alt={`Bandera de ${nombre}`} className="pais-bandera" />
      ) : (
        <div className="pais-bandera pais-bandera-vacia">Sin bandera</div>
      )}
      <div className="pais-info">
        <h3>{nombre}</h3>
        <p><strong>Capital:</strong> {capital}</p>
        <p><strong>Región:</strong> {region}</p>
        <p><strong>Población:</strong> {poblacion}</p>
      </div>
    </div>
  );
}

export default PaisCard;