'use client';
import { useState, useEffect } from 'react';
import styles from '../shared.module.css';

export default function ModalidadesPage() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/modalidades')
      .then(r => r.json())
      .then(d => { Array.isArray(d) ? setData(d) : setError(d.error); setLoading(false); })
      .catch(e => { setError(e.message); setLoading(false); });
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Consulta de Modalidades</h1>
      {error && <div className={styles.error}>{error}</div>}
      <p style={{ color: '#666', marginBottom: '16px' }}>{data.length} modalidades registradas</p>
      {loading ? <p>Cargando...</p> : (
        <table className={styles.table}>
          <thead>
            <tr><th>ID</th><th>Modalidad</th></tr>
          </thead>
          <tbody>
            {data.map(m => (
              <tr key={m.id_modalidad}>
                <td>{m.id_modalidad}</td>
                <td><span className={styles.badge}>{m.modalidad}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
