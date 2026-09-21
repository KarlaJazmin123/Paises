import PaisCard from './PaisCard.jsx';

function ListaPaises({ paises }) {
  return (
    <div className="lista-paises">
      {paises.map((pais) => (
        <PaisCard key={pais.uuid} pais={pais} />
      ))}
    </div>
  );
}

export default ListaPaises;