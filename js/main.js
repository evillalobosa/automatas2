var updateAlfabeto = document.getElementById('size-alfabeto');
var updateEstado = document.getElementById('estadosA');


updateAlfabeto.addEventListener("keydown", function () {
    creaAlfabeto();
    alfabetoTable();
});

updateEstado.addEventListener("keydown", function () {
    creaEstados();
    estadoTable();
});
