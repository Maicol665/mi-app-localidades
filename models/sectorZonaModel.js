import pool from '../db/connection';

const SectorZonaModel = {
  getAll: async () => {
    const [rows] = await pool.query('SELECT * FROM sector_zona');
    return rows;
  },
  delete: async (id) => {
    const [result] = await pool.query(
      'DELETE FROM sector_zona WHERE id_sector_zona = ?',
      [id]
    );
    return result;
  },
};

export default SectorZonaModel;
