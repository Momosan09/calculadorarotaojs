let ShowData = function (){

    let First = parseInt( document.getElementById("first").value);

    let First_redondeado = First / 100;

    let Third = parseInt( document.getElementById("third").value);

    let Four = document.getElementById("four").value;

    let Last = parseInt( document.getElementById("last").value);

    let Costurera = Four * Third;

    let Total

    /* Modelos */
    let M1 = document.getElementById("americano").checked;

    let M2 = document.getElementById("presilla").checked;




    if(M1 ==  true){
        let modelo = "Americano";
        let tela_total = First_redondeado * 2.5;
        Total = (tela_total * Last) + Costurera;

        console.log("------Cantidad de tela------");
        console.log( First_redondeado * 2.5 + "Mts");
        console.log("*****************************");
        console.log("--------Modelo elegido-------");
        console.log(modelo + "= " + M1);
        console.log("*****************************");
        console.log("----Precio de solo 1 paño----");
        console.log("$"+Third);
        console.log("-----Numero de los paños-----");
        console.log(Four);
        console.log("*****************************");
        console.log("------Pagar a costurera------");
        console.log("$" + Costurera);
        console.log("*****************************");
        console.log("-Valor de la tela ingresado -");
        console.log("$" + Last);
        console.log("*****************************");
        console.log("------Total------");
        console.log("$ "+ Total); 

        document.getElementById("info0").innerHTML= "Cantidad de tela= " + First_redondeado * 2.5 + "Mts";
        document.getElementById("info1").innerHTML= "Modelo elegido= " + modelo;
        document.getElementById("info2").innerHTML= "Precio de un solo paño= " + "$" + Third;
        document.getElementById("info3").innerHTML= "Numero de paños= " + Four;
        document.getElementById("info4").innerHTML= "Pagar a la costurera= " + "$" + Costurera;
        document.getElementById("info5").innerHTML= "Valor de la tela ingresado= " +"$" + Last;
        document.getElementById("info6").innerHTML= "Total= " + "$" + Total;

    }

    if(M2 == true){
        let modelo = "Presilla";
        let tela_total= First_redondeado * 3;
        Total = (tela_total * Last) + Costurera;

        console.log("------Cantidad de tela------");
        console.log( First_redondeado * 3 + "Mts");
        console.log("*****************************");
        console.log("--------Modelo elegido-------");
        console.log(modelo + "= " + M2);
        console.log("*****************************");
        console.log("----Precio de solo 1 paño----");
        console.log("$"+Third);
        console.log("-----Numero de los paños-----");
        console.log(Four);
        console.log("*****************************");
        console.log("------Pagar a costurera------");
        console.log("$" + Costurera);
        console.log("*****************************");
        console.log("------Precio de la tela------");
        console.log("$" + Last);
        console.log("*****************************");
        console.log("------Total------");
        console.log("$ "+ Total); 

        document.getElementById("info0").innerHTML= "Cantidad de tela= " + First_redondeado * 3 + "Mts";
        document.getElementById("info1").innerHTML= "Modelo elegido= " + modelo;
        document.getElementById("info2").innerHTML= "Precio de un solo paño= " + "$" + Third;
        document.getElementById("info3").innerHTML= "Numero de paños= " + Four;
        document.getElementById("info4").innerHTML= "Pagar a la costurera= " + "$" + Costurera;
        document.getElementById("info5").innerHTML= "Valor de la tela ingresado= " +"$" + Last;
        document.getElementById("info6").innerHTML= "Total= " + "$" + Total;

    }


}

