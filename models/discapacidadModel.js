import pool from '../db/connection';

const DiscapacidadModel = {
  getAll: async () => {
    const [rows] = await pool.query('SELECT * FROM discapacidad');
    return rows;
  },
  update: async (id, discapacidad) => {
    const [result] = await pool.query(
      'UPDATE discapacidad SET discapacidad = ? WHERE id_discapacidad = ?',
      [discapacidad, id]
    );
    return result;
  },
};

export default DiscapacidadModel;
