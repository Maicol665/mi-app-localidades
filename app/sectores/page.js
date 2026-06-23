'use client';
import { useState, useEffect } from 'react';
import styles from '../shared.module.css';

export default function SectoresPage() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [msg, setMsg] = useState('');
  const [confirmId, setConfirmId] = useState(null);

  const fetchData = () =>
    fetch('/api/sectores').then(r => r.json())
      .then(d => Array.isArray(d) ? setData(d) : setError(d.error))
      .catch(e => setError(e.message));

  useEffect(() => { fetchData(); }, []);

  const eliminar = async (id) => {
    const res = await fetch(`/api/sectores/${id}`, { method: 'DELETE' });
    const json = await res.json();
    setMsg(json.message || json.error);
    setConfirmId(null);
    fetchData();
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Eliminar Sectores / Zona</h1>
      {error && <div className={styles.error}>{error}</div>}
      {msg && <div style={{ background: '#f0fff4', border: '1px solid #38a169', padding: '10px', borderRadius: '4px', marginBottom: '16px', color: '#276749' }}>{msg}</div>}

      <table className={styles.table}>
        <thead><tr><th>ID</th><th>Sector Colegio</th><th>Zona Colegio</th><th>Acción</th></tr></thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id_sector_zona}>
              <td>{item.id_sector_zona}</td>
              <td>{item.sector_colegio}</td>
              <td>{item.zona_colegio}</td>
              <td>
                {confirmId === item.id_sector_zona ? (
                  <span>
                    ¿Seguro?&nbsp;
                    <button className={`${styles.btn} ${styles.btnRed}`}
                      onClick={() => eliminar(item.id_sector_zona)}>Sí, eliminar</button>
                    &nbsp;
                    <button className={`${styles.btn} ${styles.btnGray}`}
                      onClick={() => setConfirmId(null)}>Cancelar</button>
                  </span>
                ) : (
                  <button className={`${styles.btn} ${styles.btnRed}`}
                    onClick={() => setConfirmId(item.id_sector_zona)}>Eliminar</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
