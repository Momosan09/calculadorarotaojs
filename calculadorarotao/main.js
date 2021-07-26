console.log("Bienvenido");


let getData = function(){
    let First = parseInt( document.getElementById("first").value);         //Llama a "first" y lo asigna a la variable First (".value" sirve para asignar el valor a la variable)
    let Second = parseInt( document.getElementById("second").value);       //Llama a "second" y lo asigna a la variable Second (".value" sirve para asignar el valor a la variable)
    let Last = parseInt( document.getElementById("last").value);           //Llama a "last" y lo asigna a la variable Last (".value" sirve para asignar el valor a la variable)

    //parseint convierte el string a numero entero

    if (First == ""){
        document.getElementById("first").focus();
    }
let resultado = First + Second + Last;

    console.log( "El total es: " + resultado );


}