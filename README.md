🗺️ Sistema de Beneficiarios — Localidades

Aplicación web fullstack desarrollada con Next.js 16 y MySQL, que permite gestionar información social y geográfica de beneficiarios a través de una interfaz organizada por operaciones CRUD.


📋 Descripción

Este sistema centraliza la administración de datos sociales relacionados con beneficiarios, incluyendo su localidad, institución, modalidad de atención, grupos étnicos, condición de discapacidad, clasificación Sisbén, entre otros. Está diseñado para consulta, registro, actualización y eliminación de información desde una interfaz web sencilla y navegable.

📁 Estructura del Proyecto

mi-app-localidades/
├── app/
│   ├── page.js                  # Página de inicio con menú principal
│   ├── layout.js                # Layout global con barra de navegación
│   ├── api/                     # Endpoints de la API REST (Route Handlers)
│   │   ├── localidades/
│   │   ├── beneficiarios/
│   │   ├── instituciones/
│   │   ├── modalidades/
│   │   ├── discapacidades/
│   │   ├── sexos/
│   │   ├── grupos-etnicos/
│   │   ├── nucleos/
│   │   ├── sectores/
│   │   └── grupos-sisben/
│   └── [modulo]/page.js         # Vistas por módulo
├── models/                      # Modelos de acceso a datos (MySQL)
├── db/
│   └── connection.js            # Pool de conexiones MySQL
└── public/                      # Archivos estáticos

⚙️ Módulos del Sistema

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
