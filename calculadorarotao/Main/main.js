let ShowData = function (){        /* Busca el boton */

/* Declaracion de variables **************************************************************/

    let First = parseInt( document.getElementById("first").value);

    let First_redondeado = First / 100;

    Math.trunc(First_redondeado);

    let Third = parseInt( document.getElementById("third").value);

    let Four_simple;

    let Four;

    let Last = parseInt( document.getElementById("last").value);


    let Total

    /* Modelos ***************************************************************/
    let AM1 = document.getElementById("americano").checked;

    let AM2 = document.getElementById("americano2").checked;

    let AM2_5 = document.getElementById("americano2_5").checked;   

    let AM3 = document.getElementById("americano3").checked;

    let M2 = document.getElementById("presilla").checked;

    let M3 = document.getElementById("plisado").checked; //AM =(AMERICANO) + EL MODELO(1.5,2,etc) // M = MODELO + NUMERO DEL MODELO

    let M4 = document.getElementById("vanesa").checked;

    let M5 = document.getElementById("vanesa_doble").checked;

    let M6 = document.getElementById("tablas_chatas").checked;

    let M7 = document.getElementById("tablas_chatas-doble").checked;
    /* Modelos ***************************************************************/

/* Declaracion de variables **************************************************************/

/* function A(){
    console.log("sape");
} */

/* A(); */
    /* AMERICANO****************************************************************************/

    if(AM1 ==  true){
        let modelo = "Americano 1";                 /* AMERICANO TIPO 1 */
        let tela_total = First_redondeado * 1;
        Four_simple = tela_total/1.5;               //Four es el numero de paños
        Four =  Math.round((tela_total/1.5));   
        let Costurera = Four * Third;
        Total = (tela_total * Last) + Costurera;

                                                                                             /* switch */

        console.log("------Cantidad de tela------");
        console.log( First_redondeado * 1 + "Mts");
        console.log("*****************************");
        console.log("--------Modelo elegido-------");
        console.log(modelo + "= " + AM1);
        console.log("*****************************");
        console.log("----Precio de solo 1 paño----");
        console.log("$"+Third);
        console.log("-----Numero de los paños-----");
        console.log("Neto= "+Four_simple);
        console.log("Redondeado= "+Four);
        console.log("*****************************");
        console.log("------Confeccion------");
        console.log("$" + Costurera);
        console.log("*****************************");
        console.log("-Valor de la tela ingresado -");
        console.log("$" + Last);
        console.log("*****************************");
        console.log("------Total------");
        console.log("$ "+ Total); 
        console.log("##################################");

        document.getElementById("info0").innerHTML=  "Cantidad de tela= " + First_redondeado.toFixed(4) * 1 + "Mts";
        document.getElementById("info1").innerHTML=  "Modelo elegido= " + modelo;
        document.getElementById("info2").innerHTML=  "Precio de un solo paño= " + "$" + Third.toFixed(2);
        document.getElementById("info3").innerHTML=  "Numero de paños redondeado= " + Four+ " Numero de paños (Neto)= " + Four_simple.toFixed(2); 
        document.getElementById("info4").innerHTML=  "Confeccion = " + "$" + Costurera;
        document.getElementById("info5").innerHTML=  "Valor de la tela ingresado= " +"$" + Last;
        document.getElementById("info6").innerHTML=  "Total= " + "$" + Total.toFixed(2);

    }

    if(AM2 ==  true){                           /* AMERICANO TIPO 2 */
        let modelo = "Americano 2";
        let tela_total = First_redondeado * 2;
        Four_simple = tela_total/1.5;               //Four es el numero de paños
        Four = Math.round( (tela_total/1.5));
        let Costurera = Four * Third;
        Total = (tela_total * Last) + Costurera;

        
        console.log("------Cantidad de tela------");
        console.log( First_redondeado * 2 + "Mts");
        console.log("*****************************");
        console.log("--------Modelo elegido-------");
        console.log(modelo + "= " + AM2);
        console.log("*****************************");
        console.log("----Precio de solo 1 paño----");
        console.log("$"+Third);
        console.log("-----Numero de los paños-----");
        console.log("Neto= "+Four_simple);
        console.log("Redondeado= "+Four);
        console.log("*****************************");
        console.log("------Confeccion------");
        console.log("$" + Costurera);
        console.log("*****************************");
        console.log("-Valor de la tela ingresado -");
        console.log("$" + Last);
        console.log("*****************************");
        console.log("------Total------");
        console.log("$ "+ Total); 
        console.log("##################################");

        document.getElementById("info0").innerHTML=  "Cantidad de tela= " + First_redondeado.toFixed(4) * 2 + "Mts";
        document.getElementById("info1").innerHTML=  "Modelo elegido= " + modelo;
        document.getElementById("info2").innerHTML=  "Precio de un solo paño= " + "$" + Third.toFixed(2);
        document.getElementById("info3").innerHTML=  "Numero de paños redondeado= " + Four+ " Numero de paños (Neto)= " + Four_simple.toFixed(2); 
        document.getElementById("info4").innerHTML=  "Confeccion = " + "$" + Costurera;
        document.getElementById("info5").innerHTML=  "Valor de la tela ingresado= " +"$" + Last;
        document.getElementById("info6").innerHTML=  "Total= " + "$" + Total.toFixed(2);

    }


    if(AM2_5 ==  true){                     /* AMERICANO TIPO 2.5 */
        let modelo = "Americano 2.5";
        let tela_total = First_redondeado * 2.5;
        Four_simple = tela_total/1.5;               //Four es el numero de paños
        Four = Math.round( (tela_total/1.5));
        let Costurera = Four * Third;
        Total = (tela_total * Last) + Costurera;

        
        console.log("------Cantidad de tela------");
        console.log( First_redondeado * 2.5 + "Mts");
        console.log("*****************************");
        console.log("--------Modelo elegido-------");
        console.log(modelo + "= " + AM2_5);
        console.log("*****************************");
        console.log("----Precio de solo 1 paño----");
        console.log("$"+Third);
        console.log("-----Numero de los paños-----");
        console.log("Neto= "+Four_simple);
        console.log("Redondeado= "+Four);
        console.log("*****************************");
        console.log("------Confeccion------");
        console.log("$" + Costurera);
        console.log("*****************************");
        console.log("-Valor de la tela ingresado -");
        console.log("$" + Last);
        console.log("*****************************");
        console.log("------Total------");
        console.log("$ "+ Total); 
        console.log("##################################");

        document.getElementById("info0").innerHTML=  "Cantidad de tela= " + First_redondeado.toFixed(4) * 2.5 + "Mts";
        document.getElementById("info1").innerHTML=  "Modelo elegido= " + modelo;
        document.getElementById("info2").innerHTML=  "Precio de un solo paño= " + "$" + Third.toFixed(2);
        document.getElementById("info3").innerHTML=  "Numero de paños redondeado= " + Four+ " Numero de paños (Neto)= " + Four_simple.toFixed(2); 
        document.getElementById("info4").innerHTML=  "Confeccion = " + "$" + Costurera;
        document.getElementById("info5").innerHTML=  "Valor de la tela ingresado= " +"$" + Last;
        document.getElementById("info6").innerHTML=  "Total= " + "$" + Total.toFixed(2);

    }

    if(AM3 ==  true){                    /* AMERICANO TIPO 3 */
        let modelo = "Americano 3";
        let tela_total = First_redondeado * 3;
        Four_simple = tela_total/1.5;               //Four es el numero de paños
        Four = Math.round( (tela_total/1.5));
        let Costurera = Four * Third;
        Total = (tela_total * Last) + Costurera;

        
        console.log("------Cantidad de tela------");
        console.log( First_redondeado * 3 + "Mts");
        console.log("*****************************");
        console.log("--------Modelo elegido-------");
        console.log(modelo + "= " + AM3);
        console.log("*****************************");
        console.log("----Precio de solo 1 paño----");
        console.log("$"+Third);
        console.log("-----Numero de los paños-----");
        console.log("Neto= "+Four_simple);
        console.log("Redondeado= "+Four);
        console.log("*****************************");
        console.log("------Confeccion------");
        console.log("$" + Costurera);
        console.log("*****************************");
        console.log("-Valor de la tela ingresado -");
        console.log("$" + Last);
        console.log("*****************************");
        console.log("------Total------");
        console.log("$ "+ Total); 
        console.log("##################################");

        document.getElementById("info0").innerHTML=  "Cantidad de tela= " + First_redondeado.toFixed(4) * 3 + "Mts";
        document.getElementById("info1").innerHTML=  "Modelo elegido= " + modelo;
        document.getElementById("info2").innerHTML=  "Precio de un solo paño= " + "$" + Third.toFixed(2);
        document.getElementById("info3").innerHTML=  "Numero de paños redondeado= " + Four+ " Numero de paños (Neto)= " + Four_simple.toFixed(2); 
        document.getElementById("info4").innerHTML=  "Confeccion = " + "$" + Costurera;
        document.getElementById("info5").innerHTML=  "Valor de la tela ingresado= " +"$" + Last;
        document.getElementById("info6").innerHTML=  "Total= " + "$" + Total.toFixed(2);

    }

    /* AMERICANO **************************************************************************************************************/






    if(M2 == true){             /* PRESILLA */
        let modelo = "Presilla";
        let tela_total = First_redondeado * 1.5;
        Four_simple = tela_total/1.5;               //Four es el numero de paños
        Four = Math.round( (tela_total/1.5));
        let Costurera = Four * Third;
        Total = (tela_total * Last) + Costurera;

        console.log("------Cantidad de tela------");
        console.log( First_redondeado * 1.5 + "Mts");
        console.log("*****************************");
        console.log("--------Modelo elegido-------");
        console.log(modelo + "= " + M2);
        console.log("*****************************");
        console.log("----Precio de solo 1 paño----");
        console.log("$"+Third);
        console.log("-----Numero de los paños-----");
        console.log("Neto= "+Four_simple);
        console.log("Redondeado= "+Four);
        console.log("*****************************");
        console.log("------Confeccion------");
        console.log("$" + Costurera);
        console.log("*****************************");
        console.log("------Precio de la tela------");
        console.log("$" + Last);
        console.log("*****************************");
        console.log("------Total------");
        console.log("$ "+ Total); 
        console.log("##################################");

        document.getElementById("info0").innerHTML= "Cantidad de tela= " + First_redondeado.toFixed(4) * 1.5 + "Mts";
        document.getElementById("info1").innerHTML= "Modelo elegido= " + modelo;
        document.getElementById("info2").innerHTML= "Precio de un solo paño= " + "$" + Third.toFixed(2);
        document.getElementById("info3").innerHTML=  "Numero de paños redondeado= " + Four+ " Numero de paños (Neto)= " + Four_simple.toFixed(2); 
        document.getElementById("info4").innerHTML= "Confeccion = " + "$" + Costurera;
        document.getElementById("info5").innerHTML= "Valor de la tela ingresado= " +"$" + Last;
        document.getElementById("info6").innerHTML= "Total= " + "$" + Total.toFixed(2);

    }

    if(M3 ==  true){            /* PLISADO */
        let modelo = "Plisado";
        let tela_total = First_redondeado * 3;
        Four_simple = tela_total/1.5;               //Four es el numero de paños
        Four = Math.round( (tela_total/1.5));
        let Costurera = Four * Third;
        Total = (tela_total * Last) + Costurera;

        
        console.log("------Cantidad de tela------");
        console.log( First_redondeado * 3 + "Mts");
        console.log("*****************************");
        console.log("--------Modelo elegido-------");
        console.log(modelo + "= " + M3);
        console.log("*****************************");
        console.log("----Precio de solo 1 paño----");
        console.log("$"+Third);
        console.log("-----Numero de los paños-----");
        console.log("Neto= "+Four_simple);
        console.log("Redondeado= "+Four);
        console.log("*****************************");
        console.log("------Confeccion------");
        console.log("$" + Costurera);
        console.log("*****************************");
        console.log("-Valor de la tela ingresado -");
        console.log("$" + Last);
        console.log("*****************************");
        console.log("------Total------");
        console.log("$ "+ Total); 
        console.log("##################################");

        document.getElementById("info0").innerHTML=  "Cantidad de tela= " + First_redondeado.toFixed(4) * 3 + "Mts";
        document.getElementById("info1").innerHTML=  "Modelo elegido= " + modelo;
        document.getElementById("info2").innerHTML=  "Precio de un solo paño= " + "$" + Third.toFixed(2);
        document.getElementById("info3").innerHTML=  "Numero de paños redondeado= " + Four+ " Numero de paños (Neto)= " + Four_simple.toFixed(2); 
        document.getElementById("info4").innerHTML=  "Confeccion = " + "$" + Costurera;
        document.getElementById("info5").innerHTML=  "Valor de la tela ingresado= " +"$" + Last;
        document.getElementById("info6").innerHTML=  "Total= " + "$" + Total.toFixed(2);

    }

    if(M4 == true){              /* VANESA */
        let modelo = "Vanesa Simple";
        let tela_total = First_redondeado * 1.5;
        Four_simple = tela_total/1.5;               //Four es el numero de paños
        Four = Math.round( (tela_total/1.5));
        let Costurera = Four * Third;
        Total = (tela_total * Last) + Costurera;

        console.log("------Cantidad de tela------");
        console.log( First_redondeado * 1.5 + "Mts");
        console.log("*****************************");
        console.log("--------Modelo elegido-------");
        console.log(modelo + "= " + M4);
        console.log("*****************************");
        console.log("----Precio de solo 1 paño----");
        console.log("$"+Third);
        console.log("-----Numero de los paños-----");
        console.log("Neto= "+Four_simple);
        console.log("Redondeado= "+Four);
        console.log("*****************************");
        console.log("------Confeccion------");
        console.log("$" + Costurera);
        console.log("*****************************");
        console.log("------Precio de la tela------");
        console.log("$" + Last);
        console.log("*****************************");
        console.log("------Total------");
        console.log("$ "+ Total); 
        console.log("##################################");

        document.getElementById("info0").innerHTML= "Cantidad de tela= " + First_redondeado.toFixed(4) * 1.5 + "Mts";
        document.getElementById("info1").innerHTML= "Modelo elegido= " + modelo;
        document.getElementById("info2").innerHTML= "Precio de un solo paño= " + "$" + Third.toFixed(2);
        document.getElementById("info3").innerHTML=  "Numero de paños redondeado= " + Four+ " Numero de paños (Neto)= " + Four_simple.toFixed(2); 
        document.getElementById("info4").innerHTML= "Confeccion = " + "$" + Costurera;
        document.getElementById("info5").innerHTML= "Valor de la tela ingresado= " +"$" + Last;
        document.getElementById("info6").innerHTML= "Total= " + "$" + Total.toFixed(2);

    }

    if(M5 == true){              /* VANESA */
        let modelo = "Vanesa Doble";
        let tela_total = First_redondeado * 3;
        Four_simple = tela_total/1.5;               //Four es el numero de paños
        Four = Math.round( (tela_total/1.5));
        let Costurera = Four * Third;
        Total = (tela_total * Last) + Costurera;

        console.log("------Cantidad de tela------");
        console.log( First_redondeado * 3 + "Mts");
        console.log("*****************************");
        console.log("--------Modelo elegido-------");
        console.log(modelo + "= " + M5);
        console.log("*****************************");
        console.log("----Precio de solo 1 paño----");
        console.log("$"+Third);
        console.log("-----Numero de los paños-----");
        console.log("Neto= "+Four_simple);
        console.log("Redondeado= "+Four);
        console.log("*****************************");
        console.log("------Confeccion------");
        console.log("$" + Costurera);
        console.log("*****************************");
        console.log("------Precio de la tela------");
        console.log("$" + Last);
        console.log("*****************************");
        console.log("------Total------");
        console.log("$ "+ Total); 
        console.log("##################################");

        document.getElementById("info0").innerHTML= "Cantidad de tela= " + First_redondeado.toFixed(4) * 3 + "Mts";
        document.getElementById("info1").innerHTML= "Modelo elegido= " + modelo;
        document.getElementById("info2").innerHTML= "Precio de un solo paño= " + "$" + Third.toFixed(2);
        document.getElementById("info3").innerHTML=  "Numero de paños redondeado= " + Four+ " Numero de paños (Neto)= " + Four_simple.toFixed(2); 
        document.getElementById("info4").innerHTML= "Confeccion = " + "$" + Costurera;
        document.getElementById("info5").innerHTML= "Valor de la tela ingresado= " +"$" + Last;
        document.getElementById("info6").innerHTML= "Total= " + "$" + Total.toFixed(2);

    }


    if(M6 == true){              /* TABLAS CHATAS */
        let modelo = "Tablas Chatas";
        let tela_total = First_redondeado * 2.5;
        Four_simple = tela_total/1.5;               //Four es el numero de paños
        Four = Math.round( (tela_total/1.5));
        let Costurera = Four * Third;
        Total = (tela_total * Last) + Costurera;

        console.log("------Cantidad de tela------");
        console.log( First_redondeado * 2.5 + "Mts");
        console.log("*****************************");
        console.log("--------Modelo elegido-------");
        console.log(modelo + "= " + M6);
        console.log("*****************************");
        console.log("----Precio de solo 1 paño----");
        console.log("$"+Third);
        console.log("-----Numero de los paños-----");
        console.log("Neto= "+Four_simple);
        console.log("Redondeado= "+Four);
        console.log("*****************************");
        console.log("------Confeccion------");
        console.log("$" + Costurera);
        console.log("*****************************");
        console.log("------Precio de la tela------");
        console.log("$" + Last);
        console.log("*****************************");
        console.log("------Total------");
        console.log("$ "+ Total); 
        console.log("##################################");
        document.getElementById("info0").innerHTML= "Cantidad de tela= " + First_redondeado.toFixed(4) * 2.5 + "Mts";
        document.getElementById("info1").innerHTML= "Modelo elegido= " + modelo;
        document.getElementById("info2").innerHTML= "Precio de un solo paño= " + "$" + Third.toFixed(2);
        document.getElementById("info3").innerHTML=  "Numero de paños redondeado= " + Four+ " Numero de paños (Neto)= " + Four_simple.toFixed(2); 
        document.getElementById("info4").innerHTML= "Confeccion = " + "$" + Costurera;
        document.getElementById("info5").innerHTML= "Valor de la tela ingresado= " +"$" + Last;
        document.getElementById("info6").innerHTML= "Total= " + "$" + Total.toFixed(2);

    }

    if(M7 == true){              /* tablas doble chatas */
        let modelo = "Tablas Doble Chatas";
        let tela_total = First_redondeado * 3;
        Four_simple = tela_total/1.5;               //Four es el numero de paños
        Four = Math.round( (tela_total/1.5));
        let Costurera = Four * Third;
        Total = (tela_total * Last) + Costurera;

        console.log("------Cantidad de tela------");
        console.log( First_redondeado * 3 + "Mts");
        console.log("*****************************");
        console.log("--------Modelo elegido-------");
        console.log(modelo + "= " + M7);
        console.log("*****************************");
        console.log("----Precio de solo 1 paño----");
        console.log("$"+Third);
        console.log("-----Numero de los paños-----");
        console.log("Neto= "+Four_simple);
        console.log("Redondeado= "+Four);
        console.log("*****************************");
        console.log("------Confeccion------");
        console.log("$" + Costurera);
        console.log("*****************************");
        console.log("------Precio de la tela------");
        console.log("$" + Last);
        console.log("*****************************");
        console.log("------Total------");
        console.log("$ "+ Total); 
        console.log("##################################");

        document.getElementById("info0").innerHTML= "Cantidad de tela= " + First_redondeado.toFixed(4) * 3 + "Mts";
        document.getElementById("info1").innerHTML= "Modelo elegido= " + modelo;
        document.getElementById("info2").innerHTML= "Precio de un solo paño= " + "$" + Third.toFixed(2);
        document.getElementById("info3").innerHTML=  "Numero de paños redondeado= " + Four+ " Numero de paños (Neto)= " + Four_simple.toFixed(2); 
        document.getElementById("info4").innerHTML= "Confeccion = " + "$" + Costurera;
        document.getElementById("info5").innerHTML= "Valor de la tela ingresado= " +"$" + Last;
        document.getElementById("info6").innerHTML= "Total= " + "$" + Total.toFixed(2);

    }



}

/* Objetivo, hacer mas corto el programa jeje */