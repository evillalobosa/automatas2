var updateAlfabeto = document.getElementById('size-alfabeto');
var updateEstadoAP1 = document.getElementById('estadosA1');
var updateEstadoAP2 = document.getElementById('estadosA2');
var updateEtiquetasAP1 = document.getElementById('etiquetasA1');
var updateEtiquetasAP2 = document.getElementById('etiquetasA2');

var alfabeto=[]
var Bool=false;

var PILAEST1=[]
var PILATRA1=[]

var PILAEST2=[]
var PILATRA2=[]

function InsertarEstadosPila(){

    var validacion=0;
    var letra1="k";
    var letra2="j";
    var textaux;
    var Numero1Ingresado = document.getElementById("insertarNumero1").value;

    if(Numero1Ingresado>0){
        validacion=true;
    }else{
        console.error("numero debe ser mayor que 0");
        alert("numero debe ser mayor que 0");
    }

    if(validacion==1){
        if(n==1){
            PILAEST1=[];
            for(i=0;i<Numero1Ingresado;i++){
                textaux=letra1.concat(i);
                PILAEST1.push([textaux,"n"]);
            }
            for(j=0;j<PILAEST1.length;j++){
                if(j==0){
                    PILAEST1[j][1]="i";
                }else{
                    if(j=(Numero1Ingresado-1)){
                        PILAEST1[j][1]="f"
                    }
                }
            }
            console.log("estados ingresados correctamente");
            console.log(PILAEST1);
        }else{
            PILAEST2=[];
            for(i=0;i<Numero1Ingresado;i++){
                textaux=letra2.concat(i);
                PILAEST2.push([textaux,"n"]);
            }
            for(j=0;j<PILAEST2.length;j++){
                if(j==0){
                    PILAEST2[j][1]="i";
                }else{
                    if(j=(Numero1Ingresado-1)){
                        PILAEST2[j][1]="f"
                    }
                }
            }
            console.log("estados ingresados correctamente");
            console.log(PILAEST2);
        }
    }


}

// function InsertarTrancionespila(){
// }

function updateTableAP() {
    var estadosA1 = document.getElementById("estadosA1").value;
    var estadosA2 = document.getElementById("estadosA2").value;
    var tablaAFD = document.getElementById('tabla-automataAP');
    tablaAP.innerHTML = "";
    var mayor = 0;

        // Poner aqui el mayor entre [estadosA1, EstadosA2 y alfabeto] para determinar mayor=?

        for (var i = 0; i < mayor; i++) {
            var untr = document.createElement("tr");
            var untd1 = document.createElement("td");
            untd1.textContent = alfabeto[i];
            var untd2 = document.createElement("td");
            untd2.textContent = PILAEST1[i];
            var untd2 = document.createElement("td");
            untd3.textContent = PILAEST2[i];
            untr.appendChild(untd1);
            untr.appendChild(untd2);
            untr.appendChild(untd3);
            tablaAP.appendChild(untr);
        }
}

updateAlfabeto.addEventListener("keydown", function () {
    InsertarAlfabeto();
    updateTableAP();
});
updateEstadoAP1.addEventListener("keydown", function () {
    InsertarEstadosAFD();
    updateTableAP();
});
updateEstadoAP2.addEventListener("keydown", function () {
    InsertarEstadosAFD();
    updateTableAP();
});
updateEtiquetasAP1.addEventListener("keydown", function () {
    InsertarEstadosAFD();
});
updateEtiquetasAP2.addEventListener("keydown", function () {
    InsertarEstadosAFD();
});
