console.log("Bienvenido");


let getData = function(){
    let First = document.getElementById("first").value;         //Llama a "first" y lo asigna a la variable First (".value" sirve para asignar el valor a la variable)
    let Second = document.getElementById("second").value;       //Llama a "second" y lo asigna a la variable Second (".value" sirve para asignar el valor a la variable)
    let Last = document.getElementById("last").value;           //Llama a "last" y lo asigna a la variable Last (".value" sirve para asignar el valor a la variable)

    if (First == ""){
        document.getElementById("first").focus();
    }


    console.log(First+Second+Last);

}