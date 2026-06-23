import pool from '../db/connection';

const GrupoEtnicoModel = {
  getAll: async () => {
    const [rows] = await pool.query('SELECT * FROM grupo_etnico');
    return rows;
  },
  create: async (grupo_etnico) => {
    const [result] = await pool.query(
      'INSERT INTO grupo_etnico (grupo_etnico) VALUES (?)',
      [grupo_etnico]
    );
    return result;
  },
};

export default GrupoEtnicoModel;
