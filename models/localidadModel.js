// models/localidadModel.js
import pool from '../db/connection';

const LocalidadModel = {
  getAll: async () => {
    const [rows] = await pool.query('SELECT * FROM localidad');
    return rows;
  },
  create: async (codloc, localidad) => {
    const [result] = await pool.query(
      'INSERT INTO localidad (codloc, localidad) VALUES (?, ?)',
      [codloc, localidad]
    );
    return result;
  },
  update: async (id_localidad, codloc, localidad) => {
    const [result] = await pool.query(
      'UPDATE localidad SET codloc = ?, localidad = ? WHERE id_localidad = ?',
      [codloc, localidad, id_localidad]
    );
    return result;
  },
  delete: async (id_localidad) => {
    const [result] = await pool.query(
      'DELETE FROM localidad WHERE id_localidad = ?',
      [id_localidad]
    );
    return result;
  }
};

export default LocalidadModel;
