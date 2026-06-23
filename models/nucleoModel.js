import pool from '../db/connection';

const NucleoModel = {
  getAll: async () => {
    const [rows] = await pool.query('SELECT * FROM nucleo_conocimiento');
    return rows;
  },
  create: async (nombre_nucleo) => {
    const [result] = await pool.query(
      'INSERT INTO nucleo_conocimiento (nombre_nucleo) VALUES (?)',
      [nombre_nucleo]
    );
    return result;
  },
};

export default NucleoModel;
