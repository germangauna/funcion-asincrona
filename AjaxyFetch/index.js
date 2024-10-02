// Ajax
//petisiones http
//hace referencia es un protocolo para transferencia de datos
// "Hypertext Transfer Protocol"
//https otro protocolo para tranferecia de datos pero no es lo mismo.
//estas petidiones estan divididas en varias partes:
//una URL o direccion:
// cada vez que n os conextamos con un servidor lo hacemos a travez de una URL.
//Metodos:
//GET, POST, PUT, DELETE
//get es el que mas vamos a la hora de  omunicarnmos con un servidor, con el get,
//para consumir datos de un servidor
// el post es para crear nuevos recursos, para enviar la informacion.
// el put es para actualixar informacion de un usuario.
// y el delete es para eliminar.

//HEADER
//es donde mandamos informacion, que el servidor necesita, para que hagamos una coneccion mas segura.
// HOST: localhost:3000
// connection: keep-alive
// content-type: aplication/json

//BODY
//es el cuerpo, es un archivo JSON, la informacion que se envia a traves de la web es en formato JSON.
//{"name", "john", "age:35"}

//PARAMETROS
//la informacion se puede enviar a travez de query params o URL params.
// y esto hace referecia a los signos que hay en las URL, si tenemos una direcion de una pagina web,
// https://wwww.google.com.arsearch?q=coderhouse el signo de pregunta y la ?q=, paran concatenar unamos el &,
//limit es cuanto yo me quiero traer, 20 por ejemplo.
// el backend debe estar programado para recibir estas peticiones, para que funcione. En este caso el parametro
// de busqueda le pusieron coderhouse.Ysi quermeos ponerle mas lo hacemos con el ampersand &.
// https://pokeapi.co/api/v2/pokemon?offset0=&limit=20
// offset=0 & limit=20, entonbces va a mostrar empezando desde el 0 al limite que es 20.

//URL params la ruta esta separada por barras, o sea parametros lo vemos en el siguiente ejemplo:
// https://pokeapi.co/api/v2/pokemon/1 el backend tiene que estar programado para resolver esto.
//la difeerencia entre query params y los url params es que los primeros tienen signos y las url params tienen barras que dividen.
// https://pokeapi.co/api/v2/pokemon/{id or name}/ 

// PETISIONES (estados de las peticiones)

// ahora vamos a la consola de la web, vamos a consola, en netwok, o la red, cuando accedo en una pagina, son todas las petiones,
// cada peticiones va a tener un estatus.
// si vamos a la pantalla de la plataforma de coderHouse veremos los estatus,si entramos en las opciones,
// cada vez que recarguemos la pagina esto va a ir haciedno peticiones, estas peticiones vamn a tener estos status,
// estas peticiones, que tienen sus names, y sus estutus van a decir si estan bien conectados, si hay un error, 
// si esta cargando, en este caso ahora dice status 200,
// si abrimos una de estas peticiones van a tener diferentes opciones, por ejemplo el header,
// que nos dice las rutas donde se esta generando todo, el payload que es la informacion que se le envia,
// el preview nos va a decir lo que devuelve, response que nos va a decir la respuesta que dio, y se puede trabajar
// con todas estas herramientas, esto se usa con react y backend.

// nos va a mostarr las cabeceras, lo que se envia, lo que se recibe, etc
// para ver los estados del netwok se puede ir a la pagina devolper.mozilla al docs.
// los status de repusta de http indican si se han completado sactifactoriamente una solicitud de HTTP, son 5:
// 100 a 199 respues tas informativas, informacion del servidor.
// respuestas sacticfactorias 200 al 299, que la coneccion/peticion con el servidor es satisfactoria
// respuestas son  redirecciones de paginas  300 al 399
// respuesta de errores de clientes 400 al 499, cuando el fronter se equivoca, del que hizo la peticion, del desarrollador que hizo la pagina.
// respuesta, de errores del servidor 500-599, backen, aca el backen se equivoco.


// los errores mas frecuentes son los 200 al 299 y de 400 al 499

// por ejemplo en nuestro primer estado nos da el status 200



// estados de petesiones

//API..
// una aplicion web contruida desde el lado del servidor, es una api rest,
//ejemplos de api pokeapi.co hay que leer la documentacion.
//API sque se llama JSONPlaceholder.typicode.com es una api que te permite crear publicaciones,
// 




























