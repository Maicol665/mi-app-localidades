'use client';
import { useState, useEffect } from 'react';
import styles from '../shared.module.css';

export default function NucleosPage() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [nuevoVal, setNuevoVal] = useState('');
  const [msg, setMsg] = useState('');

  const fetchData = () =>
    fetch('/api/nucleos').then(r => r.json())
      .then(d => Array.isArray(d) ? setData(d) : setError(d.error))
      .catch(e => setError(e.message));

  useEffect(() => { fetchData(); }, []);

  const crear = async (e) => {
    e.preventDefault();
    setMsg('');
    const res = await fetch('/api/nucleos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre_nucleo: nuevoVal }),
    });
    const json = await res.json();
    setMsg(json.message || json.error);
    setNuevoVal('');
    fetchData();
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Insertar Núcleos de Conocimiento</h1>
      {error && <div className={styles.error}>{error}</div>}
      {msg && <div style={{ background: '#f0fff4', border: '1px solid #38a169', padding: '10px', borderRadius: '4px', marginBottom: '16px', color: '#276749' }}>{msg}</div>}

      <form onSubmit={crear} className={styles.form}>
        <input className={styles.input} placeholder="Nombre del núcleo de conocimiento"
          value={nuevoVal} onChange={e => setNuevoVal(e.target.value)} required />
        <button type="submit" className={styles.btn}>Agregar</button>
      </form>

      <table className={styles.table}>
        <thead><tr><th>ID</th><th>Nombre Núcleo</th></tr></thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id_nucleo}>
              <td>{item.id_nucleo}</td>
              <td>{item.nombre_nucleo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
