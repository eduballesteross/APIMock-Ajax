# Documentación Técnica del Proyecto

## Introducción

**Nombre del Proyecto:** Proyecto Gestiones Principales de la Red Social de Motos con API Mock

**Descripción:**  
Este proyecto tiene como objetivo implementar las funcionalidades de login, alta y baja de los clubes de motos utilizando AJAX y una API Mock. Mediante esta aplicación, los usuarios pueden gestionar su acceso y los registros de clubes en una red social de motos. Utilizamos una API simulada para la gestión de datos en lugar de una base de datos real.

**Objetivo:**  
Investigar por nuestra cuenta el funcionamiento de AJAX y la integración con la API Mock para implementar estas funcionalidades en una red social de motos. La aplicación permite interactuar con los usuarios y realizar gestiones de clubes.

---

## Roles del Equipo y Contribuciones

- **Eduardo Ballesteros**: Jefe de equipo y encargado de implementar las distintas partes del proyecto, así como de la investigación y desarrollo de AJAX en la aplicación.
- **Rubén Pacho**: Encargado de la investigación y la implementación de AJAX dentro del proyecto.
- **Sergio Alfonseca**: Responsable de la investigación y comprensión del funcionamiento de la API Mock. Además, de explicar los conocimientos adquiridos a los demás miembros del equipo.
- **Carlos Haro**: Encargado del diseño de la página web, así como de la investigación y funcionamiento de la API.

---

## Requisitos Previos

Para desarrollar y ejecutar el proyecto, se han utilizado las siguientes herramientas y dependencias:

- **Node.js**: Requerido para usar npm (Node Package Manager) y ejecutar el JSON Server, la herramienta que hemos utilizado para simular nuestra API.
- **JSON Server**: Permite simular una API de backend usando un archivo `db.json` que funciona como base de datos para pruebas.
- **Eclipse IDE**: Entorno de desarrollo utilizado para crear y gestionar el proyecto como un *Dynamic Web Project*.

---

## Estructura del Proyecto

### Dynamic Web Project
Este es el proyecto principal de la aplicación web, que contiene el desarrollo del HTML, CSS, JavaScript y la configuración para hacer funcionar las solicitudes AJAX hacia la API Mock.

### Carpetas y Archivos Recomendados:

1. **WebApp**: Carpeta que contiene los archivos visibles en el frontend.
    - `index.html`: Página principal (por ejemplo, página de login).
    - `login.html`: Página de alta de usuarios.
    - `delete.html`: Página de baja de usuarios.
    - `css/`: Carpeta que incluye los estilos CSS para las distintas páginas HTML.
    - `js/`: Carpeta para los archivos JavaScript de la aplicación:
        - `server.js`: Archivo JavaScript para gestionar las solicitudes AJAX a la API.
        - `script.js`: Archivo que contiene funcionalidades adicionales para los botones y eventos.
    - `img/` (opcional): Carpeta para almacenar imágenes.

2. **ApiMock**
    - `db.json`: Archivo JSON que actúa como base de datos para simular la API Mock. Contiene los datos de prueba para el proyecto.

---

## Ejemplo de Contenido

A continuación se describe cómo funciona la aplicación con respecto a las funcionalidades clave:

### Descripción de AJAX y Funcionalidad

El propósito de implementar AJAX en este proyecto es permitir la comunicación asíncrona entre el cliente (interfaz de usuario) y el servidor sin necesidad de recargar la página. Esto mejora la experiencia del usuario al hacer que las interacciones sean más rápidas y fluidas, ya que solo se actualizan los datos necesarios sin afectar el contenido de toda la página.

### Métodos de Gestión

1. **Método de Alta (Login):**  
   Este método permite al usuario registrarse o iniciar sesión en la plataforma. Los datos ingresados en el formulario de login se envían a la API Mock mediante una solicitud AJAX para autenticar al usuario.

2. **Método de Baja (Delete):**  
   Para eliminar un club, se verifica el correo y la contraseña del club. Al hacer clic en "Eliminar Club", se solicita la confirmación mediante un campo de texto donde el usuario debe ingresar el nombre del club. Si el nombre ingresado coincide con el de la base de datos, el club se elimina de la API Mock.

3. **Método de Login:**  
   La funcionalidad de login permite que el usuario ingrese sus credenciales (correo y contraseña) para acceder a la red social de motos. Si las credenciales son correctas, el sistema permite el acceso a las funciones de gestión del club.

---

## Cómo Ejecutar el Proyecto

Para ejecutar el proyecto en tu máquina local, sigue los pasos a continuación:

1. **Instalar Node.js**  
   Si no lo tienes instalado, puedes descargarlo desde [nodejs.org](https://nodejs.org).

2. **Instalar las dependencias del proyecto**  
   En la terminal, navega hasta la carpeta del proyecto y ejecuta:

3. **Ejecutar el servidor JSON Server**  
Una vez instaladas las dependencias, inicia el servidor de API Mock ejecutando el siguiente comando en la terminal:

Claro, aquí tienes el código en formato Markdown para tu archivo README:

markdown
Copiar código
# Documentación Técnica del Proyecto

## Introducción

**Nombre del Proyecto:** Proyecto Gestiones Principales de la Red Social de Motos con API Mock

**Descripción:**  
Este proyecto tiene como objetivo implementar las funcionalidades de login, alta y baja de los clubes de motos utilizando AJAX y una API Mock. Mediante esta aplicación, los usuarios pueden gestionar su acceso y los registros de clubes en una red social de motos. Utilizamos una API simulada para la gestión de datos en lugar de una base de datos real.

**Objetivo:**  
Investigar por nuestra cuenta el funcionamiento de AJAX y la integración con la API Mock para implementar estas funcionalidades en una red social de motos. La aplicación permite interactuar con los usuarios y realizar gestiones de clubes.

---

## Roles del Equipo y Contribuciones

- **Eduardo Ballesteros**: Jefe de equipo y encargado de implementar las distintas partes del proyecto, así como de la investigación y desarrollo de AJAX en la aplicación.
- **Rubén Pacho**: Encargado de la investigación y la implementación de AJAX dentro del proyecto.
- **Sergio Alfonseca**: Responsable de la investigación y comprensión del funcionamiento de la API Mock. Además, de explicar los conocimientos adquiridos a los demás miembros del equipo.
- **Carlos Haro**: Encargado del diseño de la página web, así como de la investigación y funcionamiento de la API.

---

## Requisitos Previos

Para desarrollar y ejecutar el proyecto, se han utilizado las siguientes herramientas y dependencias:

- **Node.js**: Requerido para usar npm (Node Package Manager) y ejecutar el JSON Server, la herramienta que hemos utilizado para simular nuestra API.
- **JSON Server**: Permite simular una API de backend usando un archivo `db.json` que funciona como base de datos para pruebas.
- **Eclipse IDE**: Entorno de desarrollo utilizado para crear y gestionar el proyecto como un *Dynamic Web Project*.

---

## Estructura del Proyecto

### Dynamic Web Project
Este es el proyecto principal de la aplicación web, que contiene el desarrollo del HTML, CSS, JavaScript y la configuración para hacer funcionar las solicitudes AJAX hacia la API Mock.

### Carpetas y Archivos Recomendados:

1. **WebApp**: Carpeta que contiene los archivos visibles en el frontend.
    - `index.html`: Página principal (por ejemplo, página de login).
    - `login.html`: Página de alta de usuarios.
    - `delete.html`: Página de baja de usuarios.
    - `css/`: Carpeta que incluye los estilos CSS para las distintas páginas HTML.
    - `js/`: Carpeta para los archivos JavaScript de la aplicación:
        - `server.js`: Archivo JavaScript para gestionar las solicitudes AJAX a la API.
        - `script.js`: Archivo que contiene funcionalidades adicionales para los botones y eventos.
    - `img/` (opcional): Carpeta para almacenar imágenes.

2. **ApiMock**
    - `db.json`: Archivo JSON que actúa como base de datos para simular la API Mock. Contiene los datos de prueba para el proyecto.

---

## Ejemplo de Contenido

A continuación se describe cómo funciona la aplicación con respecto a las funcionalidades clave:

### Descripción de AJAX y Funcionalidad

El propósito de implementar AJAX en este proyecto es permitir la comunicación asíncrona entre el cliente (interfaz de usuario) y el servidor sin necesidad de recargar la página. Esto mejora la experiencia del usuario al hacer que las interacciones sean más rápidas y fluidas, ya que solo se actualizan los datos necesarios sin afectar el contenido de toda la página.

### Métodos de Gestión

1. **Método de Alta (Login):**  
   Este método permite al usuario registrarse o iniciar sesión en la plataforma. Los datos ingresados en el formulario de login se envían a la API Mock mediante una solicitud AJAX para autenticar al usuario.

2. **Método de Baja (Delete):**  
   Para eliminar un club, se verifica el correo y la contraseña del club. Al hacer clic en "Eliminar Club", se solicita la confirmación mediante un campo de texto donde el usuario debe ingresar el nombre del club. Si el nombre ingresado coincide con el de la base de datos, el club se elimina de la API Mock.

3. **Método de Login:**  
   La funcionalidad de login permite que el usuario ingrese sus credenciales (correo y contraseña) para acceder a la red social de motos. Si las credenciales son correctas, el sistema permite el acceso a las funciones de gestión del club.

---

## Cómo Ejecutar el Proyecto

Para ejecutar el proyecto en tu máquina local, sigue los pasos a continuación:

1. **Instalar Node.js**  
   Si no lo tienes instalado, puedes descargarlo desde [nodejs.org](https://nodejs.org).

2. **Instalar las dependencias del proyecto**  
   En la terminal, navega hasta la carpeta del proyecto y ejecuta:
npm install

markdown
Copiar código

3. **Ejecutar el servidor JSON Server**  
Una vez instaladas las dependencias, inicia el servidor de API Mock ejecutando el siguiente comando en la terminal:
json-server --watch db.json --port 3000

4. **Ejecutar el Proyecto en Eclipse**  
Abre Eclipse, importa el proyecto como un *Dynamic Web Project*, y ejecútalo en el servidor integrado de Eclipse.

---

## Conclusión

Este proyecto ha permitido al equipo investigar y aplicar AJAX y API Mock para gestionar las funcionalidades de alta, baja y login de una red social de motos. A través del uso de estas tecnologías, hemos podido crear una aplicación más interactiva y eficiente para el usuario.

---
