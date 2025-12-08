Plus-Gym Backend

Descripción general:
Este proyecto corresponde al "backend de la página Gym plus", una plataforma orientada a la gestión de un gimnasio y tienda de suplementos deportivos.

* Tecnologías utilizadas
- Node.js
- Express.js
- MongoDB + Mongoose
- dotenv
- cors
- bcryptjs 
- jsonwebtoken (JWT) 
- Nodemon (para desarrollo)

* Estructura de carpetas

backend/
│
├── config/
│   └── db.js               # Conexión a la base de datos MongoDB
│
├── controllers/
│   ├── userController.js   # Lógica de control de usuarios
│   ├── productController.js # Lógica de control de productos
│   └── categoryController.js# Lógica de control de categorías
│
├── models/
│   ├── userModel.js        # Esquema y modelo de usuario
│   ├── productModel.js     # Esquema y modelo de producto
│   └── categoryModel.js    # Esquema y modelo de categoría
│
├── routes/
│   ├── userRoutes.js       # Rutas del módulo usuarios
│   ├── productRoutes.js    # Rutas del módulo productos
│   └── categoryRoutes.js   # Rutas del módulo categorías
│
├── services/
│   ├── userService.js      # Lógica de negocio (capa de servicios)
│   ├── productService.js
│   └── categoryService.js
│
├── middleware/
│   ├── authMiddleware.js   # Verificación de tokens JWT
│
├── .env                    # Variables de entorno
├── package.json
├── server.js               # Punto de entrada del servidor
└── README.md

* Esquema de la base de datos (MongoDB)

Usuario (`User`)
json
{
  "_id": "ObjectId",
  "nombre": "string",
  "email": "string",
  "password": "string (hash)",
  "rol": "string (admin | cliente)",
  "fechaRegistro": "Date"
}

Categoría (Category)
json
{
  "_id": "ObjectId",
  "nombre": "string",
  "descripcion": "string"
}

Producto (Product)
json
{
  "_id": "ObjectId",
  "nombre": "string",
  "descripcion": "string",
  "precio": "number",
  "stock": "number",
  "categoria": "ObjectId (ref: Category)"
}

Endpoints principales

Usuarios
| Método | Endpoint | Descripción |
|GET|/api/users| Obtener todos los usuarios |
|GET|/api/users/:id| Obtener usuario por ID |
|POST|/api/users/register| Registrar nuevo usuario |
|POST|/api/users/login| Iniciar sesión (retorna token JWT) |
|PUT|/api/users/:id| Actualizar datos de usuario |
|DELETE|/api/users/:id| Eliminar usuario |

Productos
| Método | Endpoint | Descripción |
|GET|/api/products| Listar todos los productos |
|GET|/api/products/:id| Obtener producto por ID |
|POST|/api/products| Crear nuevo producto |
|PUT|/api/products/:id| Actualizar producto |
|DELETE|/api/products/:id| Eliminar producto |

Categorías
| Método | Endpoint | Descripción |
|GET|/api/categories| Listar todas las categorías |
|POST|/api/categories| Crear nueva categoría |
|PUT|/api/categories/:id| Actualizar categoría |
| `DELETE` | `/api/categories/:id` | Eliminar categoría |


* Autenticación
- El sistema utiliza JWT (JSON Web Token) para proteger rutas privadas.  
- El token se genera al iniciar sesión (/api/users/login) y debe enviarse en el header Authorization:
- 
  Authorization: Bearer <token>

* Variables de entorno (.env)
env
PORT=4000
MONGO_URI=mongodb+srv://<usuario>:<contraseña>@plusgym123.xn6ner3.mongodb.net/plusgym?appName=Cluster0
JWT_SECRET=claveSecreta123

(Asegúrate de crear el archivo ".env" en la raíz del backend antes de ejecutar el servidor.)

* Instalación y ejecución

1- Clonar el repositorio.

git bash
git clone https://github.com/SadicStroke/Plus-Gym---Project.git
cd Plus-Gym---Project/backend

2️- Instalar dependencias

git bash
npm install

3- Configurar variables de entorno
Crea un archivo ".env" con las claves indicadas arriba.

4️- Iniciar el servidor

git bash
npm run dev

5- Probar la API
La API correrá en:

http://localhost:4000

Puedes usar **Postman** o **Insomnia** para testear los endpoints.

Capa de Servicios
Cada controlador utiliza una capa intermedia (/services) que contiene la lógica de negocio.  
Esto mejora la organización y separa responsabilidades:
- Los controladores manejan peticiones HTTP.
- Los servicios realizan la lógica (consultas, validaciones, cálculos, etc).
- Los modelos definen los datos y su estructura.

Autor: Bautista Aiello (SadicStroke)
