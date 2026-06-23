import pool from '../db/connection';

const BeneficiarioModel = {
  getAll: async () => {
    const [rows] = await pool.query(`
      SELECT b.id_beneficiario, b.convocatoria, b.beneficiarios_programa,
        l.localidad, i.nombre_institucion, n.nombre_nucleo,
        m.modalidad, s.sector_colegio, s.zona_colegio,
        sx.sexo, ge.grupo_etnico, d.discapacidad, e.edad
      FROM beneficiarios b
      LEFT JOIN localidad l ON b.id_localidad = l.id_localidad
      LEFT JOIN institucion i ON b.id_institucion = i.id_institucion
      LEFT JOIN nucleo_conocimiento n ON b.id_nucleo = n.id_nucleo
      LEFT JOIN modalidad m ON b.id_modalidad = m.id_modalidad
      LEFT JOIN sector_zona s ON b.id_sector_zona = s.id_sector_zona
      LEFT JOIN sexo sx ON b.id_sexo = sx.id_sexo
      LEFT JOIN grupo_etnico ge ON b.id_grupo_etnico = ge.id_grupo_etnico
      LEFT JOIN discapacidad d ON b.id_discapacidad = d.id_discapacidad
      LEFT JOIN edad e ON b.id_edad = e.id_edad
      LIMIT 100
    `);
    return rows;
  },
};

export default BeneficiarioModel;
