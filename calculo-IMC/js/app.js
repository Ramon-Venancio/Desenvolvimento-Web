function Calcular() {
    var altura = parseFloat(document.getElementById("altura").value);
    var peso = parseFloat(document.getElementById("peso").value);

    document.getElementById("res").innerText = "Seu IMC:" + (peso / altura**2);  

}