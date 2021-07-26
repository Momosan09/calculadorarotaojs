let ShowData = function (){

    let First = parseInt( document.getElementById("first").value);

    let Third = parseInt( document.getElementById("third").value);

    let M1 = document.getElementById("americano").checked;

    let M2 = document.getElementById("presilla").checked;


    if(M1 ==  true){
       americano = First * 1.5;
        console.log("!"+americano);
    }

    if(M2 == true){
        presilla= First * 2;
        console.log("!"+presilla);
    }

    let resultado = First;

    console.log("------Medida de la tela------");

    console.log(First + "cm");

    console.log("------Medida de la tela------");

    console.log("*****************************");

    console.log("----Estado de los modelos----");
    
    console.log(M1);

    console.log(M2);

    console.log("----Estado de los modelos----");

    console.log("*****************************");

    console.log("-----Precio de los paños-----");

    console.log("$"+Third);

    console.log("-----Precio de los paños-----");




    document.getElementById("info").innerHTML= First;

}

