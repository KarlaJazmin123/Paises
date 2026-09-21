import { useState, useEffect } from 'react';

function usePaises() {
  const [paises, setPaises] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function obtenerPaises() {
      try {
        setCargando(true);
        setError(null);

        const LIMITE = 100; // máximo permitido 
        let offset = 0;
        let todos = [];
        let hayMas = true;

        while (hayMas) {
          const respuesta = await fetch(
            `https://api.restcountries.com/countries/v5?limit=${LIMITE}&offset=${offset}`,
            {
              headers: {
                Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
              },
              signal: controller.signal,
            }
          );

          if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
          }

          const datos = await respuesta.json();
          todos = [...todos, ...datos.data.objects];

          hayMas = datos.data.meta.more;
          offset += LIMITE;
        }
    

        setPaises(todos);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setCargando(false);
      }
    }

    obtenerPaises();

    return () => controller.abort();
  }, []);

  return { paises, cargando, error };
}

export default usePaises;