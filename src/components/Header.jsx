function Header({ busqueda, onBusquedaChange, region, onRegionChange }) {
    return (
        <header className="header">
            <h1>Explorador de Países</h1>
            <p>Descubre datos de países de todo el mundo</p>

            <div className="filtros">
                <input
                    type="text"
                    placeholder="Buscar país por nombre..."
                    value={busqueda}
                    onChange={(e) => onBusquedaChange(e.target.value)}
                    className="buscador"
                />

                <select
                value={region}
                onChange={(e) => onRegionChange(e.target.value)}
                className="filtro-region"
                >
                <option value="">Todas las regiones</option>
                <option value="Africa">África</option>
                <option value="Americas">Américas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europa</option>
                <option value="Oceania">Oceanía</option>
                </select>
                </div>
        </header>
    );
}

export default Header;