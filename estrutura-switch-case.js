/*
   valor1, valor2, resultado: real
   operacao: caractere

inicio
// Seção de Comandos
   //escreva("A proposta desse programa é calcular dois valores baseado na operação de sua escolha")
   escreva("Digite o primeiro valor1: ")
   leia(valor1)
   escreva("Digite a operação, ex: +, -, * ou /: ")
   leia(operacao)
   escreva("Digite o primeiro valor2: ")
   leia(valor2)

   escolha operacao
      caso "+"
         resultado := valor1 + valor2
      caso "-"
         resultado := valor1 - valor2
      caso "*"
         resultado := valor1 * valor2
      caso "/"
         resultado := valor1 / valor2
   fimescolha

   escreva("O Resultado do cálculo é: ", resultado)
*/

function acaoBotao(){
    var valor1, valor2, resultado, operacao
    valor1 = prompt("Digite o primeiro valor: ")
    operacao = prompt("Digite a operação: Ex: +, -, * ou /")
    valor2 = prompt("Digite o segundo valor: ")
    switch (operacao) {
        case "+":
            resultado = parseInt(valor1) + parseInt(valor2)
            break;
        case "-":
            resultado = parseInt(valor1) - parseInt(valor2)
            break;    
        case "*":
            resultado = parseInt(valor1) * parseInt(valor2)
            break;
        case "/":
            resultado = parseInt(valor1) / parseInt(valor2)
            break;
    }
    document.getElementById("paragrafo").innerText = resultado
}
