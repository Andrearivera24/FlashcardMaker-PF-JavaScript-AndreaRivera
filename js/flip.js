console.log("--> Logaritmo para dar un efecto flip");
//--> 1 llamo a todas las cartas con la clase card
 const cards = document.querySelectorAll ('.card') 

 //--> 2 luego tengo que recorrer con un for of el "array" que me devolvió el query selector all
 for (const oneCard of cards) {
    oneCard.addEventListener ('click', ()=>{
        console.log("Evento click que hacer dal vuelta a la carta y revelar el resultado");
        oneCard.classList.toggle ('is-flipped')  //--> Método Toogle: sirve para cambiar de estado la visibilidad del elemento HTML, es decir si está visible pasa a oculto y si se encuentra oculto pasa a visible.
    })                                           //--> Método ClassList: manipula el contenido de una clase
 }