import Link from 'next/link';

const secciones = [
  {
    tipo: 'Consulta', color: '#0070f3', items: [
      { href: '/localidades', label: 'Localidades' },
      { href: '/beneficiarios', label: 'Beneficiarios' },
      { href: '/instituciones', label: 'Instituciones' },
      { href: '/modalidades', label: 'Modalidades' },
    ]
  },
  {
    tipo: 'Update', color: '#dd6b20', items: [
      { href: '/discapacidades', label: 'Discapacidades' },
      { href: '/sexos', label: 'Sexos' },
    ]
  },
  {
    tipo: 'Insert', color: '#38a169', items: [
      { href: '/grupos-etnicos', label: 'Grupos Étnicos' },
      { href: '/nucleos', label: 'Núcleos de Conocimiento' },
    ]
  },
  {
    tipo: 'Delete', color: '#e53e3e', items: [
      { href: '/sectores', label: 'Sectores / Zona' },
      { href: '/grupos-sisben', label: 'Grupos Sisbén' },
    ]
  },
];

export default function Home() {
  return (
    <div style={{ padding: '32px', fontFamily: 'Arial, sans-serif', maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '8px' }}>Sistema de Beneficiarios</h1>
      <p style={{ color: '#666', marginBottom: '32px' }}>Selecciona una vista para comenzar</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
        {secciones.map(sec => (
          <div key={sec.tipo}>
            <h3 style={{ color: sec.color, borderBottom: `2px solid ${sec.color}`, paddingBottom: '6px', marginBottom: '12px' }}>
              {sec.tipo}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {sec.items.map(item => (
                <Link key={item.href} href={item.href} style={{
                  display: 'block', padding: '10px 14px',
                  background: `${sec.color}15`, border: `1px solid ${sec.color}40`,
                  borderRadius: '6px', color: sec.color, textDecoration: 'none', fontWeight: '500'
                }}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
