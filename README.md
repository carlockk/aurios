
---

## 🧪 Thunder Client – Rutas disponibles

## Usuarios

| Acción                    | Método | Endpoint                                                               |
|--------------------------|--------|------------------------------------------------------------------------|
| Registrar usuario        | POST   | https://auriosback-production.up.railway.app/api/users/register       |
| Login de usuario (JWT)   | POST   | https://auriosback-production.up.railway.app/api/users/login          |
| Verificar token          | GET    | https://auriosback-production.up.railway.app/api/users/verifytoken    |
| Obtener todos los usuarios | GET  | https://auriosback-production.up.railway.app/api/users/getAll         |
| Actualizar perfil usuario | PUT   | https://auriosback-production.up.railway.app/api/users/update         |

**Nota:** Para rutas protegidas, ponga el siguiente encabezado:


Authorization: Bearer TOKEN_JWT


## Productos

| Acción                     | Método | Endpoint                                                               |
|---------------------------|--------|------------------------------------------------------------------------|
| Crear nuevo producto       | POST   | https://auriosback-production.up.railway.app/api/product/create       |
| Obtener todos los productos| GET    | https://auriosback-production.up.railway.app/api/product/readall      |
| Obtener un producto por ID | GET    | https://auriosback-production.up.railway.app/api/product/readone/:id  |
| Actualizar producto por ID | PUT    | https://auriosback-production.up.railway.app/api/product/update/:id   |
| Eliminar producto por ID   | DELETE | https://auriosback-production.up.railway.app/api/product/delete/:id   |


---

## Despliegue

Proyecto está listo para ser desplegado en:
- 🔄 [Render.com](auriosback-production.up.railway.app)
- 🌍 [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (Rutas temporales hasta la subida de la real)


---

## Requisitos

- Node.js  
- MongoDB local o Atlas  
- Thunder Client / Postman para pruebas

---
