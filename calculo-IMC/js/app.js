function Calcular() {
    var altura = parseFloat(document.getElementById("altura").value);
    var peso = parseFloat(document.getElementById("peso").value);

    imc = peso / altura**2
    document.getElementById("res").innerText = "Seu IMC: " + imc;  


    if (imc < 18.5) {
        document.getElementById("imc").innerHTML = "Baixo do peso";
    }
    else if (imc < 24.9) {
        document.getElementById("imc").innerHTML = "Peso normal";
    }
    else if (imc < 34.9) {
        document.getElementById("imc").innerHTML = "Obesidade de Classe 1";
    }
    else if (imc < 39.9) {
        document.getElementById("imc").innerHTML = "Obesidade de Classe 2";
    }
    else if (imc >= 40){
        document.getElementById("imc").innerHTML = "Obesidade de Classe 3";
    }
}