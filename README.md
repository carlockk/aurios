
---

## 🧪 Thunder Client – Rutas disponibles

### 🔐 Usuarios

| Acción                          | Método | Endpoint |
|-------------------------------|--------|----------|
| Registrar usuario             | POST   | `http://localhost:3001/api/users/register` |
| Login de usuario (retorna JWT)| POST   | `http://localhost:3001/api/users/login`    |
| Verificar token               | GET    | `http://localhost:3001/api/users/verifytoken` |
| Obtener todos los usuarios    | GET    | `http://localhost:3001/api/users/getAll`   |
| Actualizar perfil usuario     | PUT    | `http://localhost:3001/api/users/update`   |

> ⚠️ Para las rutas protegidas, incluye este header:
> `Authorization: Bearer TU_TOKEN_JWT`

---

### 📦 Productos

| Acción                    | Método | Endpoint |
|--------------------------|--------|----------|
| Crear nuevo producto     | POST   | `http://localhost:3001/api/product/create`     |
| Obtener todos los productos | GET | `http://localhost:3001/api/product/readall`    |
| Obtener un producto por ID | GET | `http://localhost:3001/api/product/readone/:id`|
| Actualizar producto por ID | PUT | `http://localhost:3001/api/product/update/:id` |
| Eliminar producto por ID   | DELETE| `http://localhost:3001/api/product/delete/:id` |

---

## 🌐 Despliegue

Este proyecto está listo para ser desplegado en:
- 🔄 [Render.com](https://render.com)
- 🌍 [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

Agrega aquí tus URLs cuando estén listas.

---

## ✅ Requisitos

- Node.js  
- MongoDB local o Atlas  
- Thunder Client / Postman para pruebas

---

## 🔓 Licencia

MIT
