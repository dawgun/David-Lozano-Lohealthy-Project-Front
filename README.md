# Component list

## App:

- Muestra: Los componentes que se hayan instanciado en su interior.
- Recibe: Nada.
- Estado: Mostrar/Cerrar el menu de login/logout.
- Accion: Nada.

## Header

- Muestra: El titulo de la aplicacion y un boton hamburguesa.
- Recibe: Una funcion.
- Estado: Nada.
- Accion: Al clicar la hamburguesa, llamar a la función recibida.

## Footer

- Muestra: Las imagenes de redes sociales y texto.
- Recibe: Nada.
- Estado: Nada.
- Accion: Al clicar en las imagenes de red social, redirigirte a la red social.

## GameCard

- Muestra: Información básica del videojuego.
- Recibe: La información básica del videojuego.
- Estado: Nada.
- Accion: Nada.

## GameCardList

- Muestra: Tantas cards de juegos como haya recibido.
- Recibe: Una lista de juegos.
- Estado: Nada.
- Accion: Nada.

## GameDetail

- Muestra: La información completa de un videojuego.
- Recibe: La información de un videojuego.
- Estado: Nada.
- Accion: Nada.

## LoginForm

- Muestra: Varios inputs y un botón.
- Recibe: Nada.
- Estado: Los datos del formulario.
- Accion: Al clicar en el botón de login, loginearse si es correcto el usuario introducido.

## RegisterForm

- Muestra: Varios inputs y un botón.
- Recibe: Nada.
- Estado: Los datos del formulario.
- Accion: Al clicar en el botón de registrar, crear un usuario en la base de datos.

## Search/Filter Form

- Muestra: Un formulario con un desplegable para filtar (Quizas un buscador tambien).
- Recibe: La lista de juegos buscados/filtrados.
- Estado: Los datos escritos en los inputs del formulario.
- Accion: Al seleccionar un filtro, se muestre los juegos con ese filtro.

## Modal

- Muestra: Un texto y color segun el error.
- Recibe: Un texto y el tipo de error.
- Estado: Ninguno.
- Accion: Al clicar en el boton X cerrar el modal.

## Loading

- Muestra: Una imagen dinamica.
- Recibe: Si debe mostrarse o no.
- Estado: Nada.
- Accion: Nada.

# Data layer

## Games

- Crear juego
- Borrar juego
- Modificar juego
- Eliminar juego

## UI

- Mostrar/no mostrar modal
- Tipo de modal
- Mensaje de modal
- Mostrar/no mostrar loading

## User

- Estar/no estar logeado
- Agregar nombre
