import pool from '../db/connection';

const ModalidadModel = {
  getAll: async () => {
    const [rows] = await pool.query('SELECT * FROM modalidad');
    return rows;
  },
};

export default ModalidadModel;
