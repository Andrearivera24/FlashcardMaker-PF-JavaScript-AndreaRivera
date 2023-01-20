console.log("--> Bienvenidos a las Pre-Entrega n° 3 <--");

// DECLARACIÓN DE VARIABLES CON DOM PARA CADA UNO DE LOS FIELDS DEL FORMULARIO DE SING UP
let name = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let userName = document.getElementById("userName");
let city = document.getElementById("city");







//--> Creo lista de paises en option desde el DOM guardadas en LocalStorage en formato JSON 
   let countries= [
    "Canada", 
    "United States of America", 
    "Australia", 
    "United Kingdom", 
    "Japan",
    "Korea",
    ]
    
let selectPaises = document.getElementById ("country")
    for (const oneCountry of countries) {
        let option = document.createElement ("option")
        option.innerHTML = oneCountry;
        selectPaises.appendChild (option);
        
    }
    
    //--seteo en el storage con el formato JSON
    let formatedArray = JSON.stringify(countries)
    localStorage.setItem("countries", formatedArray)
     //--recupero del storage 
    let recuperado = localStorage.getItem("countries")
    console.log("--> La lista de paises recuperados es: ", {
        resultado: recuperado
    });
    
    let revertido = JSON.parse(recuperado)

    console.table(revertido)

// Variables de botones 
let agree = document.getElementById("invalidCheck");
let btn = document.getElementById("submitButton");
let form320 = document.getElementById("form320")

// Variables Summary para mostrar un resumen
let nameSummary = document.getElementById("nameSummary");
let lastNameSummary = document.getElementById("lastNameSummary");
let userNameSummary = document.getElementById("userNameSummary");
let citySummary = document.getElementById("citySummary");
let countrySummary = document.getElementById("countrySummary");


// le agrego todos los eventos a cada uno
name.addEventListener("change", (evento) => {
    console.log("--> El nombre del cliente es: ", evento.target.value);
    nameSummary.innerHTML = evento.target.value
})
lastName.addEventListener("change", (evento) => {
    console.log("--> El apellido del ususario es: ", evento.target.value);
    lastNameSummary.innerHTML = evento.target.value;
})
userName.addEventListener("change", (evento) => {
    console.log("--> El nombre de usuario es: ", evento.target.value);
    userNameSummary.innerHTML = evento.target.value;
})
city.addEventListener("change", (evento) => {
    console.log("--> la ciudad en donde vive el usuario es: ", evento.target.value);
    citySummary.innerHTML = evento.target.value;
})
selectPaises.addEventListener("change", (evento) => {
    console.log("--> El pais en donde vive el usuario es: ", evento.target.value);
    countrySummary.innerHTML = evento.target.value;
})
agree.addEventListener("click", (evento) => {
    console.log("--> El usuario aceptó los terminos y conidiciones", evento.target.value);
})

//Evento submit para obtener los datos del form320 específicamente y que aceptar los términos y condiciones sea obligatorio. 
form320.addEventListener("submit", (event) => {

    event.preventDefault(); //--> usamos esta función para cortar el proceso por default
    console.log("El contenido del primer nombre es: ", name.value);
    console.log("El contenido del apellido es: ", lastName.value);
    console.log("El contenido del nombre de usuario es: ", userName.value);
    console.log("El contenido de ciudad es: ", city.value);
    console.log("El contenido de país es: ", country.value);
    console.log("El usuario ha aceptado los términos y condiciones: ", agree.value);

    // Logaritmo de corte en caso de que no acepte los términos y condiciones

    let hasError = evaluateAgreeConditions(agree)
    return hasError;
});

function evaluateAgreeConditions(agree) {
    if (!agree.checked) {
        alert (' You must agree before submitting.')
    } return false
}


//borro del local storage algunas pruebas que hice 
localStorage.removeItem("primerUsuario"); // como parámetro la clave
localStorage.removeItem("paises"); // como parámetro la clave
localStorage.removeItem("isSold"); // como parámetro la clave
localStorage.removeItem("Edad"); // como parámetro la clave
localStorage.removeItem("Bienvenida"); // como parámetro la clave


//Actividades de lección en pasado simple e imperfecto. 
// fill the spaces in the blanks acording to the verbal tense. Have in mind the tips that we mentionated before about when to use "Past Simple" and when to use "Imperfect Past".

// 1. El año pasado (viajar) a Colombia.
let priFrase = document.getElementById ("priFrase"); //---> Aparecerá la frase con una imagen y un espacio para completar y su traducción en letra pequeña.
// 2. Esta mañana (comer) huevos revueltos de desayuno. 
let segFrase = document.getElementById ("segFrase"); //---> Aparecerá la frase con una imagen y un espacio para completar y su traducción en letra pequeña 
// 3. Antes, cuando (vivir) en Canadá, solía ir a patinar sobre hielo todos los fines de semana. 
let terFrase = document.getElementById("terFrase");
// 4. Necesito recordar el nombre de esa película que (ver) en el avión mientras (viajar) a España.
let cuarFrase = document.getElementById ("cuarFrase");

// Seleccionar la opción correcta de una lista de 4 verbos
// Mi hermano me dijo que cuándo (ser) niños, no nos agradábamos mucho. 
let listaOpciones1 = [
    "Fuimos",
    "Fuéramos",
    "Éramos"
]
let selectOpciones1 = document. getElementById ("listaOpciones1"); // Este es el ID que está en el formulario con la lista desplegable 1.
for (const unaOpcion of listaOpciones1) {
let option = document.createElement ("option")
option.innerHTML= unaOpcion;
selectOpciones1.appendChild (option);    
}


// Creación de funciones evaluativas para que cuando el usuario de click en submit le aparezca el auncio y corrija lo que sea necesario. 

//--> 1 viajar
function evaluatepriFrase (priFrase) {
    if (priFrase !== "Viajé" || priFrase !== "Viaje") {
     alert ("Keep trying!,'El año pasado viajé a Colomabia'.")
    return false;
    }return true;

} 
//-->2 comer
function evaluatesegFrase (segFrase) {
    if (segFrase !== "Comí" || segFrase !== "Comi") {
     alert ("Keep trying!,'Esta mañana comí huevos revueltos de desayuno'.")
    return false;
    }return true;

}   
//-->3 vivir
function evaluateterFrase (terFrase) {
    if (terFrase !== "Vivía" || terFrase !== "Vivia") {
     alert ("Keep trying!,'Antes, cuando vivía en Canadá...'.")
    return false;
    }return true;

}   
//-->4  ver (vi) y viajar (viajaba)

function evaluatecuarFrase (cuarFrase) { //--> sub primer input
    if ((cuarFrase !== "Ví" || cuarFrase !== "Vi") && (cuarFrase !== "Viabaja")) {
     alert ("Keep trying!,'Necesito recordar el nombre de esa película que ví en el avión mientras viajaba a España.'.")
    return false;
    }return true;
} 


//-->5 ser (éramos)
function evaluateSelectOpciones1 (selectOpciones1) {
    if (selectOpciones1 !== "Éramos" || selectOpciones1 !== "Eramos" ) {
     alert ("Keep trying!,'Mi hermano me dijo que cuando éramos niños...'.")
    return false;
    }return true;

}   


// EVENTO SUBMIT DONDE PONDREMOS LAS RESTRINCCIONES -- LLAMO AL FORMULARIO COMPLETO 

miFormulario.addEventListener("submit", (evento)=>{
evento.preventDefault ();
//Mostramos los resultados por cada input 
console.log("--> Lo que ingresó el ususario en la primera frase fue: ", priFrase.value);
console.log("--> Lo que ingresó el ususario en la segunda frase fue: ", segFrase.value);
console.log("--> Lo que ingresó el ususario en la tercera frase fue: ", terFrase.value);
console.log("--> Lo que ingresó el ususario en la cuarta frase fue: ", cuarFrase.value);
console.log("--> La opción que ingresó el ususario en la quinta frase fue: ", selectOpciones1.value);

// llamo a las funciones que creé previamente para prevenir el submit en caso de que retorne "false"
let hasError = [
    evaluatepriFrase(priFrase.value),
    evaluatesegFrase(segFrase.value),
    evaluateterFrase(terFrase.value),
    evaluatecuarFrase(cuarFrase.value),
    evaluatesegFrase(segFrase.value),
    evaluateSelectOpciones1(selectOpciones1.value),
]       
return hasError;

})

// guardar en storage los resultados TAREA

