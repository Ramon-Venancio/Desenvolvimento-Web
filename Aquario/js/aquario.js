function Calcular() {
    var altura = parseFloat(document.getElementById("altura").value)
    var largura = parseFloat(document.getElementById("largura").value)
    var comprimento = parseFloat(document.getElementById("comprimento").value)

    litros = (altura*largura*comprimento)/1000
    console.log(litros)

    bomba  = litros*6
    console.log(bomba)

    aquecedor = litros

    if ((bomba/50)%2==0 || ((bomba/10)/5)%3==0  && (aquecedor/50)%2==0 || ((aquecedor/10)/5)%3==0) {
        document.getElementById("litros").innerHTML = litros+" L"
        document.getElementById("aquecedor").innerHTML = aquecedor+" W"
        document.getElementById("filtro").innerHTML = bomba+" L/h"
    }
    else {
        document.getElementById("litros").innerHTML = litros+" L"

        var potenciaw = Math.ceil(aquecedor/50)
        document.getElementById("aquecedor").innerHTML = (potenciaw*50)+" W"

        var potencial = Math.ceil(bomba/50)
        document.getElementById("filtro").innerHTML = (potencial*50)+" L/h"
    }
}