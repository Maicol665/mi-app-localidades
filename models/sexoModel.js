import pool from '../db/connection';

const SexoModel = {
  getAll: async () => {
    const [rows] = await pool.query('SELECT * FROM sexo');
    return rows;
  },
  update: async (id, sexo) => {
    const [result] = await pool.query(
      'UPDATE sexo SET sexo = ? WHERE id_sexo = ?',
      [sexo, id]
    );
    return result;
  },
};

export default SexoModel;
