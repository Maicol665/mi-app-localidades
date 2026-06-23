'use client';
import { useState, useEffect } from 'react';
import styles from '../shared.module.css';

export default function DiscapacidadesPage() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [editId, setEditId] = useState(null);
  const [editVal, setEditVal] = useState('');
  const [msg, setMsg] = useState('');

  const fetchData = () =>
    fetch('/api/discapacidades').then(r => r.json())
      .then(d => Array.isArray(d) ? setData(d) : setError(d.error))
      .catch(e => setError(e.message));

  useEffect(() => { fetchData(); }, []);

  const iniciarEdicion = (item) => {
    setEditId(item.id_discapacidad);
    setEditVal(item.discapacidad);
    setMsg('');
  };

  const guardar = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/discapacidades/${editId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ discapacidad: editVal }),
    });
    const json = await res.json();
    setMsg(json.message || json.error);
    setEditId(null);
    setEditVal('');
    fetchData();
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Actualizar Discapacidades</h1>
      {error && <div className={styles.error}>{error}</div>}
      {msg && <div style={{ background: '#f0fff4', border: '1px solid #38a169', padding: '10px', borderRadius: '4px', marginBottom: '16px', color: '#276749' }}>{msg}</div>}

      {editId && (
        <form onSubmit={guardar} className={styles.form}>
          <input className={styles.input} value={editVal} onChange={e => setEditVal(e.target.value)} required />
          <button type="submit" className={styles.btn}>Guardar</button>
          <button type="button" className={`${styles.btn} ${styles.btnGray}`}
            onClick={() => { setEditId(null); setEditVal(''); }}>Cancelar</button>
        </form>
      )}

      <table className={styles.table}>
        <thead><tr><th>ID</th><th>Discapacidad</th><th>Acción</th></tr></thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id_discapacidad}>
              <td>{item.id_discapacidad}</td>
              <td>{item.discapacidad}</td>
              <td>
                <button className={`${styles.btn} ${styles.btnOrange}`}
                  onClick={() => iniciarEdicion(item)}>Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
