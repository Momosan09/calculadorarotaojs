let ShowData = function (){

    let First = parseInt( document.getElementById("first").value);

    let First_redondeado = First / 100;

    let Third = parseInt( document.getElementById("third").value);

    let Four = document.getElementById("four").value;

    let Last = parseInt( document.getElementById("last").value);

    let Costurera = Four * Third;


    /* Modelos */
    let M1 = document.getElementById("americano").checked;

    let M2 = document.getElementById("presilla").checked;


    if(M1 ==  true){
        let tela_total = First_redondeado * 2.5;
        let Total = (tela_total * Last) + Costurera;
        console.log("!"+ Total);
    }

    if(M2 == true){
        presilla= First * 2;
        console.log("!"+presilla);
    }


    console.log("------Medida de la tela------");

    console.log(First_redondeado + "Mts");

    console.log("*****************************");

    console.log("----Estado de los modelos----");
    
    console.log("Americano= " + M1);

    console.log("Presilla= " + M2);

    console.log("*****************************");

    console.log("----Precio de solo 1 paño----");

    console.log("$"+Third);

    console.log("*****************************");

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

/*     let Total = (tela_total * Last) + Costurera; 

    console.log(Total); */


    document.getElementById("info").innerHTML= First;

}

