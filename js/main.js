var updateAlfabeto = document.getElementById('size-alfabeto');
var updateEstado = document.getElementById('estadosA');

var alfabeto=[]
var Bool=false;

var AFDEST=[]
var AFDTRA=[]

var PILAEST1=[]
var PILATRA1=[]

var PILAEST2=[]
var PILATRA2=[]

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
     }
    }else{
       console.error("debe ingresar un número mayor a 1 y menor a 702");
       alert("debe ingresar un número mayor a 1 y menor a 702");
    }
}

updateAlfabeto.addEventListener("keydown", function () {
    InsertarAlfabeto();
    alfabetoTable();
});

updateEstado.addEventListener("keydown", function () {
    InsertarAlfabeto();
    estadoTable();
});
