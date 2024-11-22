# Backend - Turismo

Este es el backend del proyecto de turismo. Está desarrollado en **Node.js** usando **Express** y conectado a una base de datos MySQL. Incluye operaciones CRUD para gestionar información de lugares turísticos.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [XAMPP](https://www.apachefriends.org/) para gestionar el servidor MySQL
- [Git](https://git-scm.com/) para clonar el repositorio (opcional)


## Instrucciones de Instalación

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/tu-usuario/Backend-Turismo.git
   cd Backend-Turismo

2. **Instala las dependencias:**

Una vez dentro del directorio del proyecto, debes instalar todas las dependencias necesarias. Para ello, puedes usar uno de los siguientes comandos, dependiendo de si prefieres usar npm o yarn.

**Si usas npm : npm install**

**Si usas Yarn : yarn install**


3. **Inicia el servidor de desarrollo:**

Una vez que todo esté configurado, puedes iniciar el servidor de desarrollo para ver la aplicación en tu navegador.

**Si usas npm : npm run dev**

**Si usas Yarn : yarn dev**

Esto iniciará el servidor de desarrollo y podrás acceder al proyecto en http://localhost:5173 (por defecto en Vite).

3. **Configura la base de datos:**

   1.**Abre XAMPP y asegúrate de que el servidor MySQL está       corriendo.**

   2.**Accede a phpMyAdmin (por defecto en http://localhost/phpmyadmin).**

   3.**Crea una base de datos llamada **turismo****

   4.**Importa la siguiente estructura de tabla en la base de datos:**



   ```bash
   CREATE TABLE turismo (
   id INT AUTO_INCREMENT PRIMARY KEY,
   nombre VARCHAR(255) NOT NULL,
   ubicacion VARCHAR(255) NOT NULL,
   descripcion TEXT NOT NULL,
   imagen VARCHAR(255) NOT NULL
   );


4. **Configura el archivo de conexión db.js:**

   ```bash
   const connection = mysql.createConnection({
   host: 'localhost',
   user: 'root', // Cambia si tu usuario es distinto
   password: '', // Agrega la contraseña si la tienes configurada
   database: 'turismo', 
   });


5. **Inicia el servidor:**

   node index.js


**Endpoints Disponibles:**


Método	Ruta	Descripción

GET	**/**	Verifica que el servidor está funcionando

GET	**/lugares**	Obtiene todos los lugares

GET	**/lugares/:id**	Obtiene un lugar por su ID

POST	**/lugares**	Crea un nuevo lugar

PUT	**/lugares/:id**	Actualiza un lugar por su ID

DELETE	**/lugares/:id**	Elimina un lugar por su ID
