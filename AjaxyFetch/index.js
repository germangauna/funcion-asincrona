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
// una aplicion web contruida desde el lado del servidor, es una arquitectura api rest,
//ejemplos de api pokeapi.co hay que leer la documentacion, estudiar
//API sque se llama JSONPlaceholder.typicode.com es una api que te permite crear publicaciones,
// // apis gratis apilist.fun es una y la otra es api en git gub github.com/public-api-list/public-api-list
// Api es un servidor y el JSON ES UN FORMATO, la Api te contesta las 24 hs del dia, y el Json es un formato donde trabajamos
//


// Fetch, el fetch simpre funciona con una  URL y una configuaracion
//si no le pasamos una configuacion por defecto usa un GET.

//traemos con el place holder : jsonplaceholder.typicode.com/guide/
// ahi nos dice los recursos que podemos usar, url params tiene, nos podemos traer toda la lista,
// si los pegamos en el navegador nos trae todos.
// dentro de esta guia hay muchos mas-
// entonces hacemos un console. log del fetchde esta url


// console.log(fetch("https://jsonplaceholder.typicode.com/posts"));

// si lo abro en el navegador, en la consola, nos dice que es una promesa y esta completada.
// a las promesas las trabajamos con un then y un catch


// en primer caso la promesa esta pendiente, todo es asyncrono

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(response => console.log(response));

// esto nos va a traer por consola, la promesa, no nos va traer la lista de la url.
// el response es lo que trae nuestra informacion

// pero como traemos todos los datos de esta url que tenemos,??

// tyenemos que convertir la informacion en un JSON, como es asyncrono, puede que falle o que no.
// le hacemos otro .then de la data, y asi sacamos lpos datos de la url.

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(response => response.json())
//      .then(data => console.log(data));


// toda esta informacion la traemos del servidor de API. NO TENGO NINGUN DATO EN EL PROYECTO
// ASI DE SIMPLE SE TRAEN LOS DATOS DE UN SERVIDOR EXTERNO
// con esto le estamos haciendo la peticion al servidor.
//si nos fijamos en el network dentro de la consola, nos tendria que dar wue todo salio bien, con un 200s
// nos da 304 que son reedirecciones de paginas
// nos dice GET porque nosotros no le pponemos nada, por defecto es un  get
// asi traemos toda las informacion que querramos.
//es un arreglo, y cada elemento que trajimos son un objeto:


// body: "parrafo..."
// id: 1;
// title: "nombre"
// userId: 1

// con toda la informacion que tyraemos de la API, podemos poner todo lo que hemos aprendido hasta ahora,
// hacer un filter, poder poner cualquier cosa que querramos

// en la data si abrimos cualquiera nos trae un arreglo, nos da toda la informacion de cada uno y tenemos la informacion,
// con esta informacion podemos hacer lo que querramos.


// tambien podemos explorar un poco mas. y traer los datos mas simples y elegir.
// que informacion queremos de ese servidor.
// por ejemplo

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(response => response.json())
//      .then(data => {
//         console.log(data[0].title);
//         console.log(data[0].body);
//      });


// de esta menera traemos de este servidor el titulo y el body, y con esta infromacion hacemos lo que querramos
// como en la funcion anterior trajimos toda la data, aca esécificamos que queremos de todo esa data que el servidor nos da.

// ahora armemoslo en html, creamos un titulo, una lista con un id con un listado

// ahora vamos a renderizar todos los productos en el listado que tenemos en el html,
// y lo pongamos en el sitio, que lo traigamos el DOM.
// hay apis que nos traen productos, imagenes, de otros sitios, apis para mercado pago, asi se hacen pagos por ahi.


// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(response => response.json())
//      .then(data => {
//         let listado = document.getElementById("listado");
//         data.forEach(item => {
//           let li = document.createElement("li");
//           li.innerHTML = `
//                          <h1> Titulo: ${item.titulo} </h1>
//                          <h2> id: ${item.id} </h2>
//                          <p> Titulo: ${item.body} </p>
//                          <b> Titulo: ${item.b} </b>
//           `;

//           listado.append(li);
//         });
        
//      });

// // como sabemos que es un arreglo, por lo que vamos hacer primero es traer el conmtenemos de los datos que va a ser el id listado,
// // creamos una variable let listado que sea igual a document.getElementById(),
// // entonces a essa data le hacemos un forEach para que recorra todo los elementos que contituyan la data,
// // dentro de este hacmos la logica con un item seguido de una arrow function, dentro de esta,
// // creamos una variablr de let li que sea igual a document.creatElement(), para poder crear lo que queremos que se refleje en el DOM, 
// //A ese li le vamos a agregar un inner.HTML, donde vamos a crear lo que queremos que se vea en el DOM,
// // un h1 donde pondremos el titulo, h2 para el id, una p ´para el body, un b para el usuariom que lo creo,
// // una vez creado esto necesitamos algo que traiga estos datos al padre, con un append del listado donde pondremos el li, entonces, 
// // entonces el listado pasa a ser padre, y el li el hijo. Esto traera todos los datos l DOM y se mostrara en pantalla.


// //ASI SE TRABAJA CON LA INFORMACION DE LOS SERVIDORES

// // Ahora tambien podemos mandar informacion al servidor, como lo hacemos??}
// //Para poder usar este recurso tendremos que hacer un metodo : POST ,
// //Primero vamos a la documentacion  y buscamos post:
// // y nos encontrarempos con el fetch de los post la ruta, y debajo de ste vamos a encontrar el parametro, 
// // el metodo que es el "POST", seguido de body, que dentro de este estara un JSON.stringify,
// // despues aparecera el titulo con el nombre, el body que va a ser el "bar", seguido del usuario: 1,
// //Aca nos dice que tenemos que poner esto en las cabeceras donde aparecera un headers : {
// //"content: type": "application/json; charset=UTF-8",
// //},

// // Ahora lo que vamos hacer con esta informacion:
// // hacemos un fetch de con la ruta , despues dentro de esto entre llaves, metodo,body, y dentro de este vamos a poner title, el body( el body anterior es el bpdy de la peticion)
// // seguimos con el usuario, y ahora le mandamos la cabeceras, el headers copiamos de la documentacion y lo pegamos en el codigo,
// // el fetch ya qye es una promesa le pasamos .then con el response de la response.json() seguiente de otro then dentro de parentesispondremos la data,
// // fecha y un console.log de data.


// fetch("https://jsonplaceholder.typicode.com/posts", {
//      method: "POST",
//      body: JSON.stringify({
//           title: "prueba",
//           body: "probando la peticion",
//           userId: 1,
//      }),
//      headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//       })
//         .then((response) => response.json())
//         .then((json) => console.log(json));

//Este fetch agrega el elemento que creamos.
// esto es lo que aparece en la consola, se agrego un elemento a la listya de la API.

     //    {title: 'prueba', body: 'probando la peticion', userId: 1, id: 101}
     //    body
     //    : 
     //    "probando la peticion"
     //    id
     //    : 
     //    101
     //    title
     //    : 
     //    "prueba"
     //    userId
     //    : 
     //    1
     //    [[Prototype]]
     //    : 
     //    Object

// esto se crea como ejemplo despues se borra.

// ahora para actualizar un PUT.


// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//      method: 'PUT',
//      body: JSON.stringify({
//        id: 1,
//        title: 'foo',
//        body: 'bar',
//        userId: 1,
//      }),
//      headers: {
//        'Content-type': 'application/json; charset=UTF-8',
//      },
//    })
//      .then((response) => response.json())
//      .then((json) => console.log(json));


// para hacer un PACH, parcheamos un recurso, arreglar


// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//      method: 'PATCH',
//      body: JSON.stringify({
//        title: 'foo',
//      }),
//      headers: {
//        'Content-type': 'application/json; charset=UTF-8',
//      },
//    })
//      .then((response) => response.json())
//      .then((json) => console.log(json));




// para eliminar un recurso lo hacemos con el DELETE

// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//      method: 'DELETE',
//    });


// es solo un simulador, en realidad no se puede eliminar, o sea, no se vera en la consola, ya que la API NO LO DEJA VER.

// PARA FILTRAR UN ELEMENTO

// fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
//   .then((response) => response.json())
//   .then((json) => console.log(json));


// PARA HAY UNA LISTA DE RUTA ANIDADA

// fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// ahora vamos a crear un archivo JSON, con ls productos, con un arreglo, y le decimso que queremos traer esa data,
// hacemos el fetch y dentro le ponemos la ruta en el cual estan los productos,
// .then para traer la data response => responmse.JSON, Y despues la vam os a recorrer, y creo el li,
//



// fetch("./data.json")
// .then(response => response.json())
//      .then(data => {
//         let listado = document.getElementById("listado");
//         data.forEach(item => {
//           let li = document.createElement("li");
//           li.innerHTML = `
//                          <h1> nombre: ${item.nombre} </h1>
//                          <h2> id: ${item.id} </h2>
//                          <p> Precio: ${item.precio} </p>          
//           `;

//           listado.append(li);
//         });
        
//      });


// de esta manera renderizamos todos los productos que tenemos en el archivo data.json,
// lo traemos de un servidor externo o lo podemos traer desde un archivo nuestro y que se
//refleje en el DOM.

// Async away, cuando son peticiones anidades se hace muy denso, lo que hace el sync away loque hace.
// necesitamos una funcion, como por ejemplo traer datos, lo que sucede aqui, con un arrow function, dentro de la funcion 
// traemos la data de la API, ponemos una constante cons respuesta por ejemplo, que sea igual a away al fetch y la url,
// no ponemos el fetch ponemos el away y espera a que resuelva, el away hace que espera mientras se resuelve,
// hacemos otra const data que sea igual a await de la respuesta .json(), para que no nos de error, tendremos que poner,
// delante de la arrow function un async, y ya nos va a dejar de decir error, es  mucho mas rapido y ahorramos muchas lineas,
// entonces creamos una funcion, que sea igual a async ponemos contsntes con el await y nos ahorramos de poner el .then, despues 
// pondremos todo igual como el .then.




const traerDatos = async () => {
     const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts")
     const data = await respuesta.json();
             let listado = document.getElementById("listado");
             data.forEach(item => {
               let li = document.createElement("li");
               li.innerHTML = `
                              <h1> Titulo: ${item.titulo} </h1>
                              <h2> id: ${item.id} </h2>
                              <p> Titulo: ${item.body} </p>
                              <b> Titulo: ${item.userId} </b>
               `;
     
               listado.append(li);
             });
             
}
traerDatos ();


// de esta manera tambien traemos los datos, igual que con el punto then




































































