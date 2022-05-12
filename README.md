# Aplicativo Node.js - Sequelize 

## Arquitectura por capas
 [![dddd.jpg](https://i.postimg.cc/YCrWQL3f/dddd.jpg)](https://postimg.cc/Whyzv3xh)

- El software esta basado en la arquitectura por capas, donde los roles y las responsabilidades dentro de la aplicación son separadas en capas, cada capa en la arquitectura forma una abstracción en torno al trabajo que se requiere realizar para satisfacer una solicitud comercial en particular.
- Así que, uno de los objetivos de la arquitectura de capas es separar responsabilidades entre componentes. Otro objetivo es organizar las capas para que ellas lleven a cabo su labor especifica dentro del app.

## Capa de rutas:

- Esta capa se encarga de manejar la interfaz de programación de aplicación (API). Su único trabajo es retornar la respuesta del servidor.

## Capa de servicios:

- Maneja la lógica de negocios de la app, significa que los datos son transformados o calculados para cumplir con los requerimientos de los modelos de la base de datos antes de ser enviados al servidor.

## Capa de base de datos

- Tiene acceso a la base de datos para crear, editar y borrar datos. Aquí es donde se maneja la lógica relacionada a las solicitudes y respuestas del servidor


# Tecnologias

## Node.Js
[![instalacion-de-nodejs-en-ubuntu-t1.jpg](https://i.postimg.cc/JhBYCFkh/instalacion-de-nodejs-en-ubuntu-t1.jpg)](https://postimg.cc/DWnPqB5V)
- Node.js es un entorno de ejecución que incluye todo lo necesario para ejecutar un programa escrito en JavaScript. Node.js es un entorno de ejecución de un solo hilo, de código abierto y multiplataforma para crear aplicaciones de red y del lado del servidor rápidas y escalables.

## Sequelize
[![1366-2000.png](https://i.postimg.cc/CxRFyFLp/1366-2000.png)](https://postimg.cc/87V8Mg6Z)
- Sequelize es un ORM para Nodejs que nos permite manipular varias bases de datos SQL de una manera bastante sencilla, entre estas bases de datos podemos encontrar: mysql, sqlite, postgres, mssql.

# VENTAJAS
1.	**Separación de responsabilidades:** Permite la separación de preocupaciones (SoC), ya que cada capa tiene una sola responsabilidad.
2.	**Fácil de desarrollar:** Este estilo arquitectónico es especialmente fácil de implementar, además de que es muy conocido y una gran mayoría de las aplicaciones la utilizan.
3.	**Fácil de probar:** Debido a que la aplicación construida por capas, es posible ir probando de forma individual cada capa, lo que permite probar por separada cada capa.
4.	**Fácil de mantener:** Debido a que cada capa hace una tarea muy específica, es fácil detectar el origen de un bug para corregirlo, o simplemente se puede identificar donde se debe aplicar un cambio.
5.	**Seguridad:** La separación de capas permite el aislamiento de los servidores en subredes diferentes, lo que hace más difícil realizar ataques.


# CONCLUSIÓN
- el estilo arquitectónico es uno de los más fácil de implementar, lo que lo hace unos de los patrones más versátiles y más ampliamente utilizados, lo que lo convierte en uno de los estilos arquitectónicos de referencia para muchas aplicaciones. Además, es un estilo que no representa mucha carga de mantenimiento para las empresas, lo que hace que pueda funcionar durante mucho tiempo de forma interrumpida.
- Si eres un arquitecto novato y quieres comenzar a diseñar arquitecturas de software, esta puede ser un buen inicio, pues es muy clara, fácil de diseñar y explicar en un comité de arquitectura.

# PASOS PARA EJECUTAR EL PROYECTO
1. Tener instalado Node.js

2. Datos del archivo .env :
- PORT=4000
- NAME_DB=sql10491679
- USER_DB=sql10491679
- PASS_DB=yQ7Kp8DaVM
- HOST_DB=sql10.freemysqlhosting.net

3. Correr npm  i para descargar las dependencias especificadas en el package.json : **npm i**
4. Por ultimo,  correr la aplicación: **npm run dev**


## Video Explicativo (click! en la imagen)
[![Alt text](https://img.youtube.com/vi/fiNYslap2_c/0.jpg)](https://www.youtube.com/watch?v=fiNYslap2_c)

## INTEGRANTES
- Jhonatan Andres Beltran Caceres 1151561
- Jose Gregorio Perez Manosalva 1151559
- Yeferson Daniel Ascanio Rodríguez 1151507
**Arquitectura de software**

