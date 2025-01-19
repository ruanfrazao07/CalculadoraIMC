function CalculadoraIMC(){
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var resultado = document.getElementById("titulo");
    var resultadoIMC = document.getElementById("resultadoIMC")
    var IMC2 = IMC(peso, altura);
    resultado.innerHTML = IMC2.toFixed(2);
    resultadoIMC.innerHTML = ClassificacaoIMC(IMC2);
}

function IMC (a, b){
 return a/(b*b);
}

function ClassificacaoIMC(IMC)
{
    if(IMC >= 40)
       return resultadoIMC.innerHTML = "Obesidade Grau III";
    else if(IMC <= 39.99 && IMC >= 35)
       return resultadoIMC.innerHTML = "Obesidade Grau II";
    else if(IMC <= 34.99 && IMC >= 30)
        return resultadoIMC.innerHTML = "Obesidade Grau I";
    else if(IMC <= 29.99 && IMC >= 25)
        return resultadoIMC.innerHTML = "Sobrepeso";
    else if(IMC <= 24.99 && IMC >= 18.6)
        return resultadoIMC.innerHTML = "Normal";
    else
        return resultadoIMC.innerHTML = "Abaixo do Normal";
}