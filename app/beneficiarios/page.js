'use client';
import { useState, useEffect } from 'react';
import styles from '../shared.module.css';

export default function BeneficiariosPage() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filtro, setFiltro] = useState('');

  useEffect(() => {
    fetch('/api/beneficiarios')
      .then(r => r.json())
      .then(d => { Array.isArray(d) ? setData(d) : setError(d.error); setLoading(false); })
      .catch(e => { setError(e.message); setLoading(false); });
  }, []);

  const filtrados = data.filter(b =>
    b.convocatoria?.toLowerCase().includes(filtro.toLowerCase()) ||
    b.localidad?.toLowerCase().includes(filtro.toLowerCase()) ||
    b.nombre_institucion?.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Consulta de Beneficiarios</h1>
      {error && <div className={styles.error}>{error}</div>}
      <div className={styles.form}>
        <input className={styles.input} placeholder="Filtrar por convocatoria, localidad o institución..."
          value={filtro} onChange={e => setFiltro(e.target.value)} />
        <span style={{ alignSelf: 'center', color: '#666' }}>{filtrados.length} registros</span>
      </div>
      {loading ? <p>Cargando...</p> : (
        <div style={{ overflowX: 'auto' }}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>#</th><th>Convocatoria</th><th>Localidad</th><th>Institución</th>
                <th>Núcleo</th><th>Modalidad</th><th>Sexo</th><th>Grupo Étnico</th>
                <th>Discapacidad</th><th>Edad</th><th>Beneficiarios</th>
              </tr>
            </thead>
            <tbody>
              {filtrados.map(b => (
                <tr key={b.id_beneficiario}>
                  <td>{b.id_beneficiario}</td>
                  <td>{b.convocatoria}</td>
                  <td>{b.localidad}</td>
                  <td style={{ fontSize: '12px' }}>{b.nombre_institucion}</td>
                  <td style={{ fontSize: '12px' }}>{b.nombre_nucleo}</td>
                  <td><span className={styles.badge}>{b.modalidad}</span></td>
                  <td>{b.sexo}</td>
                  <td>{b.grupo_etnico}</td>
                  <td>{b.discapacidad}</td>
                  <td>{b.edad}</td>
                  <td style={{ textAlign: 'center' }}>{b.beneficiarios_programa}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
