'use client';
import { useState, useEffect } from 'react';
import styles from '../shared.module.css';

export default function InstitucionesPage() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filtro, setFiltro] = useState('');

  useEffect(() => {
    fetch('/api/instituciones')
      .then(r => r.json())
      .then(d => { Array.isArray(d) ? setData(d) : setError(d.error); setLoading(false); })
      .catch(e => { setError(e.message); setLoading(false); });
  }, []);

  const filtrados = data.filter(i =>
    i.nombre_institucion?.toLowerCase().includes(filtro.toLowerCase()) ||
    String(i.codigo_snies_ies).includes(filtro)
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Consulta de Instituciones</h1>
      {error && <div className={styles.error}>{error}</div>}
      <div className={styles.form}>
        <input className={styles.input} placeholder="Filtrar por nombre o código SNIES..."
          value={filtro} onChange={e => setFiltro(e.target.value)} />
        <span style={{ alignSelf: 'center', color: '#666' }}>{filtrados.length} registros</span>
      </div>
      {loading ? <p>Cargando...</p> : (
        <table className={styles.table}>
          <thead>
            <tr><th>ID</th><th>Código SNIES</th><th>Nombre Institución</th></tr>
          </thead>
          <tbody>
            {filtrados.map(i => (
              <tr key={i.id_institucion}>
                <td>{i.id_institucion}</td>
                <td>{i.codigo_snies_ies}</td>
                <td>{i.nombre_institucion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
