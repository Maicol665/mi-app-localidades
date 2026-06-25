🗺️ Sistema de Beneficiarios — Localidades

Aplicación web fullstack desarrollada con Next.js 16 y MySQL, que permite gestionar información social y geográfica de beneficiarios a través de una interfaz organizada por operaciones CRUD.


📋 Descripción

Este sistema centraliza la administración de datos sociales relacionados con beneficiarios, incluyendo su localidad, institución, modalidad de atención, grupos étnicos, condición de discapacidad, clasificación Sisbén, entre otros. Está diseñado para consulta, registro, actualización y eliminación de información desde una interfaz web sencilla y navegable.

# 📁 Estructura del Proyecto

| Carpeta / Archivo | Descripción |
|-------------------|-------------|
| `app/page.js` | Página de inicio con menú principal. |
| `app/layout.js` | Layout global con barra de navegación. |
| `app/[modulo]/page.js` | Vista de cada módulo (localidades, beneficiarios, etc.). |
| `app/api/[modulo]/route.js` | Endpoints REST por módulo (`GET`, `POST`, `PUT`, `DELETE`). |
| `models/` | Modelos de acceso a datos; contiene las consultas MySQL por entidad. |
| `db/connection.js` | Pool de conexiones a la base de datos MySQL. |
| `public/` | Archivos estáticos del proyecto. |

## 📦 Módulos Disponibles

Los siguientes módulos cuentan con vistas y endpoints API:

- `localidades`
- `beneficiarios`
- `instituciones`
- `modalidades`
- `discapacidades`
- `sexos`
- `grupos-etnicos`
- `nucleos`
- `sectores`
- `grupos-sisben`

## 🗂️ Estructura General

```text
proyecto/
├── app/
│   ├── page.js
│   ├── layout.js
│   ├── localidades/
│   ├── beneficiarios/
│   ├── instituciones/
│   └── api/
│       ├── localidades/
│       ├── beneficiarios/
│       ├── instituciones/
│       └── ...
├── models/
├── db/
│   └── connection.js
├── public/
└── README.md
```

El sistema está organizado en cuatro tipos de operaciones:

🔵 Consulta (GET)


Localidades — Listado y detalle de localidades
Beneficiarios — Información de beneficiarios registrados
Instituciones — Instituciones vinculadas al sistema
Modalidades — Modalidades de atención disponibles


🟠 Actualización (PUT/PATCH)


Discapacidades — Modificación de tipos de discapacidad
Sexos — Actualización de categorías de sexo


🟢 Inserción (POST)


Grupos Étnicos — Registro de nuevos grupos étnicos
Núcleos de Conocimiento — Creación de núcleos académicos


🔴 Eliminación (DELETE)


Sectores / Zona — Eliminación de sectores geográficos
Grupos Sisbén — Gestión de grupos de clasificación Sisbén

<img width="1589" height="788" alt="image" src="https://github.com/user-attachments/assets/f9e74b40-bd74-4953-ab5d-43e261732cca" />

