# Sistema de Control de Aeronaves

Sistema backend para recibir y procesar coordenadas de posición de aeronaves cercanas a la torre de control, con detección automática de alertas de colisión.

## Descripción

Este sistema permite:
- Almacenar y actualizar posiciones de aeronaves en tiempo real
- Detectar automáticamente riesgos de colisión entre aeronaves (distancia < 500 metros)
- Listar todas las aeronaves registradas con sus posiciones actuales

## Requisitos Previos

- Node.js (versión 18 o superior)
- npm

## Instalación

1. Clonar el repositorio o descargar el proyecto

2. Instalar las dependencias:
```bash
npm install
```

3. Crear un archivo `.env` en la raíz del proyecto (opcional, para configuraciones adicionales):
```
PORT=8080
PERSISTENCE=MEM
```

## Ejecución

### Modo desarrollo (con auto-reload)
```bash
npm run watch
```

### Modo producción
```bash
npm start
```

El servidor se ejecutará por defecto en `http://localhost:8080`

### Ejecutar tests
```bash
npm run test
```

## Endpoints

### 1. Registrar/Actualizar Aeronave

**POST** `/aircraft`

Registra una nueva aeronave o actualiza la posición de una existente. Automáticamente verifica si hay riesgo de colisión con otras aeronaves.

**Body (JSON):**
```json
{
  "id": "AAB001",
  "xa": 7500,
  "ya": 6200,
  "za": 1000
}
```

**Validaciones:**
- `id`: Exactamente 6 caracteres alfanuméricos (3 letras + 3 números, ej: "AAB001")
- `xa`, `ya`, `za`: Valores numéricos (coordenadas en metros)

### 2. Listar Todas las Aeronaves

**GET** `/aircraft`

Retorna la lista completa de todas las aeronaves registradas con sus posiciones actuales.

**Respuesta exitosa (200):**
```json
[
  {
    "id": "AAB001",
    "xa": 7500,
    "ya": 6200,
    "za": 1000
  },
  {
    "id": "BBC002",
    "xa": 7800,
    "ya": 6300,
    "za": 1050
  }
]
```

## Estructura del Proyecto MVC adaptado para APIs REST

```
finales-tp2/
├── src/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── test/
├── .env
├── .gitignore
├── aircrafts.json
├── index.js
├── package.json
└── README.md
```

## Autor

Debora Rolon

## Licencia

MIT