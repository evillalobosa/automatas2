var mivar= [];
var cont=0;

function add() {
    mivar.push(cont);
    cont++;
    console.log('agregado: '+mivar);
    localStorage.setItem("array",mivar)
}

function inAFD() {
    // mivar;
    mivar = localStorage.getItem("array");
    console.log(mivar);
    return mivar;
}