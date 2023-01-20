         
                      console.log("--> Bienvenidos a la consola del flashcardMaker <---");


// con un operador ternario me fijaré si ya tengo items en el local storage y si tengo algo almacenado se pasreará y los obtendré para que se guarden en la varaiable "contentArry", sino entonces se creará uno nuevo.
// condicion ? opción 1: opción 2 
var contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

// -------------------------Funciones para los botones del navegador "Add card" y "del cards"-------------------------
  //---> 1. Add card
    document.getElementById("show_card_box").addEventListener("click", () => {
    document.getElementById("create_card").style.display = "block"; // la propiedad display altera la visibilidad del elemento en pantalla, con block se vé
    document.getElementById ("emptySpace").style.display = "none"; // la propiedad display none, hará que el espacio vacio desaparezca en cuando haga click
    console.log("--> El usuario dio click en 'add card'");
    });


  //---> 2. Del card
  document.getElementById("delete_cards").addEventListener("click", () => {
    localStorage.clear(); //limpio el local storage
    flashcards.innerHTML = ''; // Le paso un string vacío al contendio de las flashcards
    contentArray = []; // convierto el array en un array vacio
    document.getElementById("emptySpace").style.display = "block"; //hago que vuelva a aparecer el bloque vacio y no quede el footer arriba
    document.getElementById ("create_card").style.display ="none"; // hago que desaparezca la caja de crear cartas
    console.log("--> El usuario dio click en 'Del cards'");
  });



  // ---------------------- Algoritmo para hacer que del selector se despliegue una base de datos con idiomas ---------------------
  // Creo mi diccionario de idiomas
const languages = [
  {"en-GB": "English"},
  {"es-ES": "Spanish"},
  {"ar-SA": "Arabic"},
  {"fr-FR": "French"},
  {"nl-NL": "Dutch"},
  {"de-DE": "German"},
  {"pt-PT": "Portuguese"},
]
 
// Obtengo el select para iterar en él los idiomas disponibles mi diccionario y con un 
const selectFirstLanguage = document.getElementById("selectFirstLanguage")
const selectSecondLanguage = document.getElementById("selectSecondLanguage")
for (const oneLanguage in languages) {// uso for in para tomar los índices/propiedades y no los valores como lo haría un for of
  const key = Object.keys(languages[oneLanguage]); //con.keys obtengo la clave de cada propiedad
  const value = Object.values(languages[oneLanguage]) //con.value obtengo el valor de cada propiedad
  selectFirstLanguage.innerHTML += `<option value = ${key}>${value}</option>`;// al comparador le pongo un += para que se vayan sumando los lenguajes a la lista
  selectSecondLanguage.innerHTML += `<option value = ${key}>${value}</option>`;
}

//Guardo la clave del idioma inglés en una variable y la igualo al valor de Selectedlanguages para que por defecto sea inglés
const English = "en-GB";
const Español = "es-ES";
selectFirstLanguage.value = English;
selectSecondLanguage.value = Español;


// agrego la función translate con el evento keyup para que se traduzca automáticamente lo ingresado en fromText en toText

const fromText = document.getElementById("fromText")
const toText = document.getElementById("toText")

fromText.addEventListener("keyup", async ()=>{
  if(!fromText.value) return // condicional para que en caso de que en fromText.value no haya nada , se retorne y la función no se ejecute
  const res = await fetch(`https://api.mymemory.translated.net/get?q=${fromText.value}&langpair=${selectFirstLanguage.value}|${selectSecondLanguage.value}`)
  const data = await res.json() //guardo en la variable data lo obtenido ya en formato JSON
  toText.value = data.responseData.translatedText; // esto en el objeto es específicamente la traducción

  console.log(data);
});




// ------------------------------------------Obtengo el boton "Save" y "close"
//------------------------------------- 1 > Save
  document.getElementById("save_card").addEventListener("click", () => {
  addFlashcard();
  console.log("--> El usuario dio click en 'save'");
  });

 //--creo funciones que iran dentro del save
//1.1--> flashcardMaker:

flashcardMaker = (text) => { //----> Con una arrow function Creo dinámicamente los elementos "div" y "h2" y los guardo en una variable
  const flashcard = document.createElement("div");
  const fromText = document.createElement('h2');
  const toText = document.createElement('h2');
  const click = document.createElement ('p');
 
  flashcard.className = 'flashcard'; // le asigno el nombre de clase "flashcard" cuyos algunos atributos ya están en el css

  // Les doy el estilo a los elementos con setAttribute 
  fromText.setAttribute("style", "font-family:'Fredoka One', cursive;  background-color:#5015bd;  color: #ddfdd2; text-align: center; padding-top: 15px; height: 55px; margin-top:0px;"); 
  fromText.textContent = text.from_text; // textContent devuelve el contenido del texto especificado y ahora agrego el "fromText" al elemento H2 con la "key" que ya tiene el "value" guardado

  toText.setAttribute("style", "font-family:'Fredoka One', cursive; padding-bottom: 50px; padding-top: 100px; text-align:center; display:none; font-size: 1.5rem; color: #5015bd;");
  toText.textContent = text.to_text;

  // Le doy estilo al p
  click.setAttribute("style", " display:block; font-family:'Comic Neue', cursive; margin-top: 200px; text-align: center; font-size: 1rem; color: #5015bd;");
  click.textContent = text.innerHTML="Click for results";

   //Ahora tengo que agregar los dos elementos h2 y el p al flashcard usando appendChild
  flashcard.appendChild(fromText);
  flashcard.appendChild(toText);
  flashcard.append(click);
 
 // este EventListener hará que cuando le de click, muestre la respuesta.
  flashcard.addEventListener("click", () => {
    //--> Creo una función con un condicional cuya lógica es que si la respuesta NO aparece en pantalla, entonces se ejecutará el display en bloque. Por otro lado, si sí aparece en pantalla entonces no se ejeturará el display. 
    if(toText.style.display == "none")
      toText.style.display = "block";
    else
      toText.style.display = "none";
      // condicional para desaparecer el texto click cuando haga click
    if (click.style.display == "block")
        click.style.display = "none"
  })

  // por último agrego el div llamado flashcard al id #flashcards con appendChild
  document.querySelector("#flashcards").appendChild(flashcard);
}

//-Agrego la función a cada uno de los elementos del array para que no solo aparezca cuando la creo en tiempo real, sino que también cada vez que abra el proyecto.
contentArray.forEach(flashcardMaker);


//-> 1.2. addFlashcard: 
 
addFlashcard = () => { // creo otra arrow function en donde obtendré los arrays con el id# y trabajaré con los elementos
  const fromText = document.querySelector("#fromText");
  const toText = document.querySelector("#toText"); 
  

  //Almaceno el input del ususario en un diccionario llamado flascardinfo con keys y values
  let flashcard_info = {
    'from_text' : fromText.value, // ---> con el .value guardo en la clase específicamente lo que el usuario puso en el input 
    'to_text'  : toText.value
  }
  //agrego el diccionario a mi array principal
  contentArray.push(flashcard_info);
  //actualizo el local storage con los cambios hechos
  localStorage.setItem('items', JSON.stringify(contentArray));
   
  //llamo a la función "flashcarsMaker" y le paso la posición espcífica de index -1 que sería la última que creamos
  flashcardMaker(contentArray[contentArray.length - 1], contentArray.length - 1);
  fromText.value = ""; //--> Lo que hice aquí es que también se borre lo que el usuario había escrito en los inputs en cuanto se oprima el botón "Save", para que el usuario pueda crear una nueva más fácil. 
  toText.value = "";


}





//------------------------------->2. Close 
  document.getElementById("close_card_box").addEventListener("click", () => {
  document.getElementById("create_card").style.display = "none";
   console.log("--> El usuario dio click en 'close'");

});








  