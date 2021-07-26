let ShowData = function (){

    let First = parseInt( document.getElementById("first").value);

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

let resultado = First
    console.log(resultado);
    console.log(M1);
    console.log(M2);
}
