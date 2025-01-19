function CalculadoraIMC(){
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var resultado = document.getElementById("resultado");
    var classificacao = document.getElementById("classificacao");
    var IMC2 = IMC(peso, altura);
    resultado.innerHTML = IMC2.toFixed(2);
    classificacao.innerHTML = ClassificacaoIMC(IMC2);
}

function IMC (a, b){
 return a/(b*b);
}

function ClassificacaoIMC(IMC)
{
    if(IMC >= 40)
        return classificacao.innerHTML = "Obesidade Grau III";
    else if(IMC <= 39.99 && IMC >= 35)
        return classificacao.innerHTML = "Obesidade Grau II";
    else if(IMC <= 34.99 && IMC >= 30)
        return classificacao.innerHTML = "Obesidade Grau I";
    else if(IMC <= 29.99 && IMC >= 25)
        return classificacao.innerHTML = "Sobrepeso";
    else if(IMC <= 24.99 && IMC >= 18.6)
        return classificacao.innerHTML = "Normal";
    else
        return classificacao.innerHTML = "Abaixo do Normal";
}