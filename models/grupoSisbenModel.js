import pool from '../db/connection';

const GrupoSisbenModel = {
  getAll: async () => {
    const [rows] = await pool.query('SELECT * FROM grupo_sisben');
    return rows;
  },
  delete: async (id) => {
    const [result] = await pool.query(
      'DELETE FROM grupo_sisben WHERE id_grupo_sisben = ?',
      [id]
    );
    return result;
  },
};

export default GrupoSisbenModel;
