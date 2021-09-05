arrayp = ["a","B"];
arrayv = [];
console.log(arrayp);
console.log(arrayv);
if( arrayp[0] === "a"){
arrayv.push(arrayp);
console.log(arrayv);
}


let arr = [1,2];

function suma (a,b){
    console.log(a + b);
}

/* arr.forEach(function(element){
    console.log(element)
    suma(a,b);    
    } 
);
 */





let resultado = suma(arr);
suma(arr);

console.log(resultado);

arrayp.forEach(function(element){
    console.log(element);
});

let ShowData = function (){

    let verdadero=[];

    let array = [
    [document.getElementById("0").checked, 1,2],
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
    })
});

console.log(verdadero);
verdadero.shift();
console.log(verdadero);

function suma(a, b){
    return a + b;

}
const saludo = suma(verdadero);

console.log(saludo);
}
