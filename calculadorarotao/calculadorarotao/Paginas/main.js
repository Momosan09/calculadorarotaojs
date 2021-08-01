let ShowDataTwo = function (){


    let Ancho            = (parseInt( document.getElementById("ancho").value)) / 100;
    let Precio_Ancho     = parseInt( document.getElementById("precio_ancho").value);
    let Largo            = (parseInt( document.getElementById("largo").value)) / 100;
    let Valor_Sistemas = Ancho * Precio_Ancho;

    let Precio_Tela      = parseInt( document.getElementById("precio_tela").value);

    let  Costo_Total = parseInt( ((Ancho * Largo) * Precio_Tela) + Valor_Sistemas);

    let Check0 = document.getElementById("check0").checked;
    let Check1 = document.getElementById("check1").checked;
    let Check2 = document.getElementById("check2").checked;
    let Check3 = document.getElementById("check3").checked;





    document.getElementById("Info0").innerHTML=  "Ancho Ingresado= " + Ancho +"Mts";
    document.getElementById("Info1").innerHTML=  "Precio Del Ancho Ingresado= " + "$" +Precio_Ancho;
    document.getElementById("Info2").innerHTML=  "Largo Ingresado= " + Largo +"Mts";
    document.getElementById("Info3").innerHTML=  "Valor del sistema= " + "$" + Valor_Sistemas;
    document.getElementById("Info4").innerHTML=  "Ancho Ingresado= " + Ancho +"cm"; 
    document.getElementById("Info5").innerHTML=  "Total= " + "$" +Costo_Total;



    if(Check0 == true){

        document.getElementById("Info5").innerHTML   = "Total= "+ "$" + Costo_Total + 1;

    }

    if(Check1 == true){

        document.getElementById("Info5").innerHTML   = "Total= "+ "$" + Costo_Total + 2 ;


    }


    if(Check2 == true){

        document.getElementById("Info5").innerHTML   = "Total= "+ "$" + Costo_Total + 3 ;


    }

    
    if(Check3 == true){

        document.getElementById("Info5").innerHTML   = "Total= "+ "$" + Costo_Total + 4 ;


    }
    typeof Costo_Total;

}