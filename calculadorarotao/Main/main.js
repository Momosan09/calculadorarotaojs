let ShowData = function (){        /* Busca el boton */

    /* Declaracion de variables **************************************************************/
    
        let First = parseInt( document.getElementById("first").value),
        Third = parseInt( document.getElementById("third").value),
        Last = parseInt( document.getElementById("last").value),
        First_redondeado = First / 100,
        Four_simple,
        tela_total,
        Costurera,
        Total;

    /* Declaracion de variables **************************************************************/

    let verdadero=[];

    /* MATRIZ *******************************************************************************/
    let array = [
    [document.getElementById("americano").checked, 1,"Americano 1"],
    [document.getElementById("americano2").checked, 2,"Americano 2"],
    [document.getElementById("americano2_5").checked, 2.5,"Americano 2.5"],
    [document.getElementById("americano3").checked, 3,"Americano 3"],
    
    [document.getElementById("presilla").checked, 1.5,"Presilla"],
    [document.getElementById("plisado").checked, 3,"Plisado"],
    [document.getElementById("vanesa").checked, 1.5,"Vanesa Simple"],
    [document.getElementById("vanesa_doble").checked, 3,"Vanesa doble"],
    
    [document.getElementById("tablas_chatas").checked, 2.5,"Tablas chatas"],
    [document.getElementById("tablas_chatas-doble").checked, 3,"Tablas doble chatas"]
    ];
    /* MATRIZ *******************************************************************************/
function descomponer_matriz(){
array.forEach(function(element){
        element.forEach(function(elemento){
            if(elemento === true){
                    verdadero.push(...element); /* Estos tres puntos sirven para descomponer el array, si los saco se formaria una matriz y no es lo que necesito */
                }
    });
});
}

function suma(a){

    this.a = verdadero[1];
    this.c = verdadero[2];

    tela_total = First_redondeado * a;
    Four_simple = tela_total/1.5; 
    Costurera = Four_simple * Third;
    Total = (tela_total * Last) + Costurera;
}

function Imprime (){

    document.getElementById("info0").innerHTML=  "Cantidad de tela= " + tela_total.toFixed(2) + "Mts";
    document.getElementById("info1").innerHTML=  "Modelo elegido= " + c;
    document.getElementById("info2").innerHTML=  "Precio de un solo paño= " + "$" + Third.toFixed(2);
    document.getElementById("info3").innerHTML=  " Numero de paños (Neto)= " + Four_simple.toFixed(2); 
    document.getElementById("info4").innerHTML=  "Confeccion = " + "$" + Costurera.toFixed(2);
    document.getElementById("info5").innerHTML=  "Valor de la tela ingresado= " +"$" + Last;
    document.getElementById("info6").innerHTML=  "Total= " + "$" + Total.toFixed(2);

}
descomponer_matriz();
suma(verdadero[1],verdadero[2]);
Imprime();

}
    /* Objetivo CUMPLIDO DE MANERA SATISFACTORIA */
