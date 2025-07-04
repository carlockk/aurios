# Aurios API

API REST Node.js + Express para autenticación de usuarios, gestión de productos y documentación Swagger, con base de datos MongoDB. especial para sistemas que requieren autenticación y control de datos.

---

## Documentación Swagger

La API está documentada con Swagger:

[https://aurios-production.up.railway.app/api-docs](https://aurios-production.up.railway.app/api-docs)

Desde ahí puede probar todos los endpoints con autenticación JWT incluida.

---

## Tecnologías utilizadas

- **Node.js** + **Express**
- **MongoDB Atlas**
- **Mongoose**
- **JWT (jsonwebtoken)** para autenticación
- **bcryptjs** para hash de contraseñas
- **Swagger UI** para documentación
- **dotenv** para manejo de variables de entorno
- Despliegue en **Railway**

---

## structura del proyecto

```
api/
│
├── config/              # Conexión a MongoDB y Swagger config
├── controllers/         # Lógica de usuarios y productos
├── middleware/          # Middleware de autenticación
├── models/              # Esquemas de Mongoose
├── routes/              # Rutas de API documentadas con Swagger
├── .env                 # Variables de entorno (ignorado en git)
├── index.js             # Punto de entrada del servidor
└── package.json         # Configuración de dependencias y scripts
```

se creo archivo swagger.js para la documentación

---

## Autenticación

La API usa **JSON Web Tokens (JWT)**. Para acceder a rutas protegidas, para incluir en los headers:
Al crear un producto, ahora le asigna el usuario automáticamente desde el token JWT

para poder realizar acciones como eliminar o agregar, debe ir primero:
Ir al login, usar un usuario que puede ver al obtener todos los usuarios
Luego Authorize parte superior derecha y poner el token sin ""
Luego si desea verificar esta la opción
Y luego puede ejecutar eliminar usuario u otras que requieran autenticación
```
Authorization: Bearer TOKEN_JWT
```

Puede obtener un token iniciando sesión con `POST /api/users/login`.

---

## Endpoints disponibles

### Usuarios

| Acción                     | Método | Endpoint                            |
|---------------------------|--------|-------------------------------------|
| Registrar usuario         | POST   | `/api/users/register`              |
| Iniciar sesión (JWT)      | POST   | `/api/users/login`                 |
| Verificar token           | GET    | `/api/users/verifytoken`          |
| Obtener todos los usuarios| GET    | `/api/users/getAll`               |
| Actualizar perfil         | PUT    | `/api/users/update`               |

> Requieren token: `verifytoken`, `update`

---

### Productos

| Acción                      | Método | Endpoint                            |
|----------------------------|--------|-------------------------------------|
| Crear producto             | POST   | `/api/product/create`              |
| Obtener todos los productos| GET    | `/api/product/readall`             |
| Obtener producto por ID    | GET    | `/api/product/readone/:id`         |
| Actualizar producto        | PUT    | `/api/product/update/:id`          |
| Eliminar producto          | DELETE | `/api/product/delete/:id`          |

Logre asociar el usuario autenticado al crear un producto nuevo

> Requieren token: `create`, `update`, `delete`

---

## 🛠 Scripts

```bash
npm install       # Instala dependencias
npm run dev       # Ejecuta en desarrollo con nodemon
npm run start     # Ejecuta en producción (Railway)
npm install swagger-ui-express swagger-jsdoc  # Ejecuta en producción swagger
```

---

## 🛰 Despliegue

- 🌐 Producción: [https://aurios-production.up.railway.app](https://aurios-production.up.railway.app)
- 📘 Swagger Docs: [https://aurios-production.up.railway.app/api-docs](https://aurios-production.up.railway.app/api-docs)
- 🗄️ MongoDB: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

---

