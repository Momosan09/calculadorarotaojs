let ShowData = function (){

    let verdadero=[];

    let array = [
    [document.getElementById("0").checked, 1,2, "Americano"],
    [document.getElementById("1").checked, 2,3],
    [document.getElementById("2").checked, 3,4]];

array.forEach(function(element){
    console.log(element);
    console.log("");
        element.forEach(function(elemento){
            console.log(elemento);
            if(elemento === true){
                console.log("anda");
                    verdadero.push(...element); /* Estos tres puntos sirven para descomponer el array, si los saco se formaria una matriz y no es lo que necesito */
        }
    });
});

console.log(verdadero);
verdadero.shift();
console.log(verdadero);

function suma(a,b,c){
    let result = a+b;
    console.log(result);
    
    this.c = verdadero[2];
    console.log(this.c);
}

suma(verdadero[0],verdadero[1]);

}