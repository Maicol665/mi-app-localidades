import pool from '../db/connection';

const InstitucionModel = {
  getAll: async () => {
    const [rows] = await pool.query('SELECT * FROM institucion');
    return rows;
  },
};

export default InstitucionModel;
