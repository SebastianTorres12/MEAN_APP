# MEAN_APP

# MEAN Stack

Este proyecto es una aplicación MEAN Stack que permite a los usuarios gestionar una lista de tareas. Utiliza MongoDB como base de datos, Express.js como servidor, Angular como cliente y Node.js como entorno de ejecución.

## Configuración del Proyecto

### Requisitos Previos
Primero debemos instalar:

- Node.js: [Descargar Node.js](https://nodejs.org/)

### Pasos para Configurar el Proyecto

*Clonar el Repositorio:*
   ```bash 
   git clone https://github.com/SebastianTorres12/MEAN_APP.git
   ```
*Estructura del proyecto:*
* cliente
* server

*Intalación de Dependencias:*  

Dentro de la carpeta **cliente** abrir una terminal integrada y ejecutar el siguiente comando:
  ``` bash
   npm install
  ``` 
Esto descargara todas las dependencias necesarias para ejecutar el proyecto.

*Configuracion para la conexion con MongoDB*  
En este proyecto toda la configuración previa es suficiente para poder conectarnos  a la base de datos.
Este proyecto usa una base de datos en la nube (Mongo Atlas) por lo que no es necesario realizar alguna acción extra.

### Prueba del proyecto

* Primero corremos el servidor*
En la carpeta *servidor* abrimos una terminal integrada y corremos el siguiente comando
  ``` bash
   npm run dev
  ```
* Segundo corremos el sitio
En la carpeta *cliente* abrimos una terminal integrada y corremos el comando:
  ``` bash
  ng serve --0
  ```
El cual abrirá automaticamente el sitio en nuestro navegador predeterminado.

Esto debería ser suficiente para poder probar el proyecto sin ningun problema.

