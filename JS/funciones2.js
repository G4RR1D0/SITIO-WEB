function agregarNumero(numero){
    document.getElementById("pantalla").value += numero;
}

function limpiar(){
    document.getElementById("pantalla").value = "";
}
function calcular(){
    let resultado = eval(document.getElementById("pantalla").value);
    document.getElementById("pantalla").value = resultado;
}