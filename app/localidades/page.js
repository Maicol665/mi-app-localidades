'use client';

import { useState, useEffect } from 'react';
import styles from './styles.module.css';

export default function LocalidadesCrud() {
  const [localidades, setLocalidades] = useState([]);
  const [codloc, setCodloc] = useState('');
  const [localidad, setLocalidad] = useState('');
  const [apiError, setApiError] = useState(null);
  const [editId, setEditId] = useState(null);

  const fetchLocalidades = async () => {
    try {
      const res = await fetch('/api/localidades');
      const data = await res.json();
      if (Array.isArray(data)) {
        setLocalidades(data);
        setApiError(null);
      } else {
        setApiError(data?.error || JSON.stringify(data));
        setLocalidades([]);
      }
    } catch (err) {
      setApiError('No se pudo conectar: ' + err.message);
    }
  };

  useEffect(() => { fetchLocalidades(); }, []);

  const guardarLocalidad = async (e) => {
    e.preventDefault();
    if (editId) {
      await fetch(`/api/localidades/${editId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ codloc, localidad })
      });
      setEditId(null);
    } else {
      await fetch('/api/localidades', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ codloc, localidad })
      });
    }
    setCodloc(''); setLocalidad('');
    fetchLocalidades();
  };

  const iniciarEdicion = (loc) => {
    setEditId(loc.id_localidad);
    setCodloc(String(loc.codloc));
    setLocalidad(loc.localidad);
  };

  const borrarLocalidad = async (id) => {
    await fetch(`/api/localidades/${id}`, { method: 'DELETE' });
    fetchLocalidades();
  };

  return (
    <div className={styles.container}>
      <h1>Gestion de Localidades (CRUD)</h1>

      {apiError && (
        <div style={{ background: '#fff0f0', border: '1px solid #ff4d4f', padding: '12px', borderRadius: '4px', marginBottom: '20px', color: '#cc0000' }}>
          <strong>Error:</strong> {apiError}
        </div>
      )}

      <form onSubmit={guardarLocalidad} className={styles.form}>
        <input className={styles.input} type="number" placeholder="Codigo (Ej. 1)"
          value={codloc} onChange={(e) => setCodloc(e.target.value)} required />
        <input className={styles.input} type="text" placeholder="Nombre (Ej. Usaquen)"
          value={localidad} onChange={(e) => setLocalidad(e.target.value)} required />
        <button type="submit" className={styles.button}>
          {editId ? 'Actualizar' : 'Crear Localidad'}
        </button>
        {editId && (
          <button type="button" className={styles.button} style={{ backgroundColor: '#888' }}
            onClick={() => { setEditId(null); setCodloc(''); setLocalidad(''); }}>
            Cancelar
          </button>
        )}
      </form>

      <div>
        {localidades.map((loc) => (
          <div key={loc.id_localidad} className={styles.card}>
            <strong>Codigo: {loc.codloc}</strong> - {loc.localidad}
            <button className={`${styles.button} ${styles.buttonDelete}`}
              onClick={() => borrarLocalidad(loc.id_localidad)}>Borrar</button>
            <button className={styles.button} style={{ marginLeft: '10px' }}
              onClick={() => iniciarEdicion(loc)}>Editar</button>
          </div>
        ))}
      </div>
    </div>
  );
}