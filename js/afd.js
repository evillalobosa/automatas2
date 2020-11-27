var updateAlfabeto = document.getElementById('size-alfabeto');
var updateEstadoAFD = document.getElementById('estadosA');
var updateEtiquetasAFD = document.getElementById('etiquetasA');

var alfabeto=[]
var Bool=false;
var AFDEST=[]
var AFDTRA=[]

function InsertarAlfabeto(){
    var NumeroIngresado = document.getElementById("size-alfabeto").value;
    // NumeroIngresado=a;
    alfabeto=[];
    if((NumeroIngresado>0)&&(NumeroIngresado<702)){
        if(Bool==true){
            alfabeto.push("E");
        }
        var aux;
        var Textaux;
        var textaux2;
        for(i=0;i<NumeroIngresado;i++){
            if(i<=25){
                aux=97+i;
                aux=String.fromCharCode(aux);
        }else{
            textaux=96+(Math.trunc(i/26));
            textaux=String.fromCharCode(textaux);
            textaux2=97+(i-(26*(Math.trunc(i/26))));
            textaux2=String.fromCharCode(textaux2);
            aux=textaux.concat(textaux2);
        }
        alfabeto.push(aux);
        localStorage.setItem(alfabeto, alfabeto)
     }
    }else{
       console.error("debe ingresar un número mayor a 1 y menor a 702");
       alert("debe ingresar un número mayor a 1 y menor a 702");
    }
}

function InsertarEstadosAFD(a,b,c){
    //var Numero1Ingresado = document.getElementById("insertarNumero1").value;
    //var Numero2Ingresado = document.getElementById("insertarNumero2").value;
    //var BoolIngresado = document.getElementById("insertarBool").value;

    AFDEST=[];
    var Numero1Ingresado=a;
    var Numero2Ingresado=b;
    var BoolIngresado=c;
    var letra="q";
    var textaux;
    var validacion=false;

    if(Numero1Ingresado>0){
        if((Numero1Ingresado-1)>Numero2Ingresado){
            validacion=true;
        }else{
            console.error("numero de estados finales mayor de lo permitido");
            alert("numero de estados finales mayor de lo permitido");
        }
    }else{
        console.error("numero debe ser mayor que 0");
        alert("numero debe ser mayor que 0");
    }

    if(validacion==true){
        for(i=0;i<Numero1Ingresado;i++){
            textaux=letra.concat(i);
            AFDEST.push([textaux,"n"]);
        }
        for(j=0;j<AFDEST.length;j++){
            if(j==0){
                if(BoolIngresado==false){
                    AFDEST[j][1]="i";
                }else{
                    AFDEST[j][1]="if";

                }
            }else{
                if(j>=((AFDEST.length)-Numero2Ingresado)){
                    AFDEST[j][1]="f"
                }
            }
        }
        console.log("estados ingresados correctamente");
        console.log(AFDEST);
    }

}

function InsertarTrancionesAFD(){
    var validacion=0;
    var Numero1Ingresado = document.getElementById("insertarNumero1").value;
    AFDTRA=[];

    for(i=1;i<=Numero1Ingresado;i++){
        var Estado1Ingresado = document.getElementById("inicio"+i).value;
        var Estado2Ingresado = document.getElementById("final"+i).value;
        var ABCIngresado = document.getElementById("alfabeto"+i).value;
        AFDTRA.push([Estado1Ingresado,ABCIngresado,Estado2Ingresado]);
    }

    if(Numero1Ingresado>1){
        if(Numero1Ingresado == (alfabeto.length*AFDEST.length)){
            var cont1=0;
            for(j=0;j<alfabeto.length;j++){
                var cont2=0;
                for(k=0;k<AFDTRA.length;k++){
                    if(alfabeto[j]==AFDTRA[k][1]){
                        cont2++;
                    }
                }
                if(cont2==AFDEST.length){
                    cont1++;
                }
            }
            if(cont1==AFDEST.length){
                validacion=1;
            }else{
                console.error("número de veces que se uso cada elemento del alfabeto no corresponde con el tipo de automata");
                alert("número de veces que se uso cada elemento del alfabeto no corresponde con el tipo de automata");
            }
        }else{
            console.error("número de transiciones no correspondiente con el tipo de automata");
            alert("número de transiciones no correspondiente con el tipo de automata");
        }
    }else{
        console.error("número ingresado debe ser un numero mayor 0");
        alert("número ingresado debe ser un numero mayor 0");
    }

    if(validacion == 0){
        AFDTRA=[];
    }
}

function updateTableAFD() {
    var estadosA = document.getElementById("estadosA").value;
    var tablaAFD = document.getElementById('tabla-automataAFD');
    tablaAFD.innerHTML = "";
    var mayor = 0;

        if (estadosA > alfabeto.length) {
            mayor = estadosA;
        }
        else {
            mayor = alfabeto.length;
        }
        for (var i = 0; i < mayor; i++) {
            var untr = document.createElement("tr");
            var untd1 = document.createElement("td");
            untd1.textContent = alfabeto[i];
            var untd2 = document.createElement("td");
            untd2.textContent = AFDEST[i];
            untr.appendChild(untd1);
            untr.appendChild(untd2);
            tablaAFD.appendChild(untr);
        }
}

updateAlfabeto.addEventListener("keydown", function () {
    InsertarAlfabeto();
    updateTableAFD();
});
updateEstadoAFD.addEventListener("keydown", function () {
    InsertarEstadosAFD();
    updateTableAFD();
});
updateEtiquetasAFD.addEventListener("keydown", function () {
    // InsertarEtiquetasAFD();
});
