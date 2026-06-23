import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = { title: "Sistema de Beneficiarios", description: "CRUD Next.js" };

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <nav style={{ background: '#0070f3', padding: '10px 20px', display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }}>Inicio</Link>
          <span style={{ color: 'rgba(255,255,255,0.5)' }}>|</span>
          <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px' }}>Consultas:</span>
          <Link href="/localidades" style={{ color: 'white', textDecoration: 'none', fontSize: '13px' }}>Localidades</Link>
          <Link href="/beneficiarios" style={{ color: 'white', textDecoration: 'none', fontSize: '13px' }}>Beneficiarios</Link>
          <Link href="/instituciones" style={{ color: 'white', textDecoration: 'none', fontSize: '13px' }}>Instituciones</Link>
          <Link href="/modalidades" style={{ color: 'white', textDecoration: 'none', fontSize: '13px' }}>Modalidades</Link>
          <span style={{ color: 'rgba(255,255,255,0.5)' }}>|</span>
          <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px' }}>Update:</span>
          <Link href="/discapacidades" style={{ color: 'white', textDecoration: 'none', fontSize: '13px' }}>Discapacidades</Link>
          <Link href="/sexos" style={{ color: 'white', textDecoration: 'none', fontSize: '13px' }}>Sexos</Link>
          <span style={{ color: 'rgba(255,255,255,0.5)' }}>|</span>
          <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px' }}>Insert:</span>
          <Link href="/grupos-etnicos" style={{ color: 'white', textDecoration: 'none', fontSize: '13px' }}>Grupos Étnicos</Link>
          <Link href="/nucleos" style={{ color: 'white', textDecoration: 'none', fontSize: '13px' }}>Núcleos</Link>
          <span style={{ color: 'rgba(255,255,255,0.5)' }}>|</span>
          <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px' }}>Delete:</span>
          <Link href="/sectores" style={{ color: 'white', textDecoration: 'none', fontSize: '13px' }}>Sectores/Zona</Link>
          <Link href="/grupos-sisben" style={{ color: 'white', textDecoration: 'none', fontSize: '13px' }}>Grupos Sisbén</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
