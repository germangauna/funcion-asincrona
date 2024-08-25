//funcion asyncrona y esta recibe dos parametros la primera es una funcion y un tiempo
// setTimeout(funcion, time)

// console.log("inicio");



// setTimeout(() => {
//     console.log("intermedio");//funcion
    
// }, 5000);//tiempo


// console.log("final");


// aca en la consola primero aparece inicio, final y ultimo intermedio, ya que en la funcion syncrona 
// se toma un tiempo en ejecutarse, en este caso tarda 5 segundos.


//vamos acrear un boton y un h1 que tenga un id que se llame mensaje, creo las variables y
// traigo los id del html.
// despues creo un evento del boton con un click, y en la funcion en el id del mensaje,
// le vamos a poner un classList "color"
//Ahora creamos el setTimeout, en ña funcion pondremos que se remueva la classList que habiamos creado.
// con el remuve, y que suceda en 3 segundos- el "colore"
// vinculamos el css, para poder crear las clases "color"

// let boton = document.getElementById("boton");
// let mensaje = document.getElementById("mensaje")

// boton.addEventListener("click", () => {
//     mensaje.classList.add("color");

// setTimeout(() => {
//     mensaje.classList.remove("color");
// }, 3000);

// });

// traje el boton, traje el mensaje, al boton le puse un evento con un click, dentro puse el mensaje,
// con una clase add. "color", vincule css y cree la clase donde le puse un background-color, 
//o sea, que cuando haga click en el boton este tendra el fondo de color.
// luego puse un setTimeout, donde puse al id mensaje con el classList seguido del remuve y dentro la cklase.
// seria la funcion del setTimeout, y seguido del tiempo en el cual se va a ejecutar la funcion.

// con esto se pueden hacer procesos, llamar a APIS por ejemplo.

//for con el setTimeout


// for (const letra of "Hola") {
//     setTimeout(() => {
//         console.log(letra);
        
//     }, 1000);
// }

// for (const letra of "Mundo") {
//     setTimeout(() => {
//         console.log(letra);
        
//     }, 3000);
// }

// aca hicimos un for of donde recorre la palabra hola letra por letra y la ejecuta en un segundo
// despues tenemos el segundo donde v a recorrer la palabra mundo letra por letra en 3 segundos
// asi funcionan las funciones asyncronas

// console.log("inicio");



// setTimeout(() => {
//     console.log("intermedio");//funcion
    
// }, 0);//tiempo


// console.log("final");

// Ahora tenemos un log comun seguidom de una setTimeout con el tiempo de 0 segundos, y seguido de
// otro log con el texto final, esto en la consola saldra, inicio, fibnal e intermidio al final, porque?
// sale el log ultimo porque es la funcion asyncrona, ya que se procesa en otro lado y tarda, espera a 
// a que se ejecute todo lo directo y despues se ejecutara lo asyncrona

// CALL STACK
// es como una lista, donde estos procesos se acomulan uno arriba del otro y para que salgan, tiene que
//ejecutarse los de arriba para que salgan los primeros o los de abajo.



// function multiply (x, y) {
//     return x * y;
// }

// function printSquare(y) {
//     let s = multiply(y, y);
//     console.log(s);
    
// }

// printSquare(5)


//Aca en la primera funcion declaro multiply donde tengo doa parametro y retorna en una multiplicacion de los dos parametros
// siguiendo de otra funcion printSquare donde paso por rametro la x y dentro de esta funcion declaron una variable s
// que se igual a la funcion anterior con el parametro de la primera con el parametro de la segunda y un log de la variable.
// y ultimo llamamos a la segunda funcion con el valor de 5, esto dara como reultado en la consola 25.
// ya que llama primero a la segunda funcion, o sea el nunmero 5 sigiuien de la primero funcion para saber que hago con ese numero,
// por lo que dice la funcion va a multiplicar, y por ultimo entrara al log para saber que hago con el numero 5 y lam multiplicacion,
// 5 x 5 me va a dar 25, ya que son x, y la x vale 5.


//printSquare(5)
//multiply(y, y)
// console.log(s)
// printSquare(5)
//resultado

//Event loop, nos permite sincronixar el caal stak con las tareas asincronas

// console.log("inicio");



// setTimeout(() => {
//     console.log("funcion asincrona");//funcion
    
// }, 3000);//tiempo


// console.log("final");


// aca loupe, entra la palabra "inicio"  al call stack lo ejecuta, entra la funcion asincrona se pasa a esperarm los 3 segundos,
// de ahi pasa al callback queue y espera, se ejecuta el log de donde dice "final" , cuando ve que esta vacio, se vejecuta lo asincrono.

//"inicio"
//"final"
//"funcion asincrona"



//setInterval
//setInterval(funcion, tiempo)


// setInterval(() => {
//     console.log("hola");
    
// }, 2000);

// lo que va hacer esta funcion asincrona, es que se va a ejecutar todo el tiempo, dependiendo el tiempo que le pongamos en este cadso 2 segundos.


// tenemos la segunda funcion asincona de setInterval

// let counter = 0

// const interval = setInterval(() => {
//     counter ++
//     console.log("counter:", counter);

//     if (counter >= 5) {
//         clearInterval(interval)
//         console.log("se removio el inetrval");
        
//     }    
// }, 1000)

// en esta funcion, tenemos la variable counter que es igual a cero, en la siguiente constante,
// tendremos interval que es igual a setInterval con una funcion que suma el counter de a 1 
// y en la consola nos mostrara la plabra "counter:" y la suma de counter, y debajo tenemos la condicion que dice:
// que si counter es mayor o igual a 5 el interval se detendra, con el clearInterval y despues mostrara por consola
// que se removio el interval, de esta manera se frenan los intervalos.

// tambien de esta forma se puede frenar un setInterval...


console.log("inicio");

const fin = setTimeout (() => {
    console.log("fin");
    
}, 2000)

clearTimeout(fin);

// de esta manera el setTimeout nunca llegara a ejcutarse.
// se puede usar si nosotros mandamos a un usuario informacion por ejemplo de las facturas.
// y si hay un error ponderemos un crearTimeout para que deje de mandarlo hasta que se arregle el problema.




















































