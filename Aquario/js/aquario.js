function Calcular() {
    var altura = parseFloat(document.getElementById("altura").value)
    var largura = parseFloat(document.getElementById("largura").value)
    var comprimento = parseFloat(document.getElementById("comprimento").value)

    litros = (altura*largura*comprimento)/1000
    console.log(litros)

    bomba  = litros*6
    console.log(bomba)

    aquecedor = litros
}