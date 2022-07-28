/*
   num, fat, cont: inteiro
   

inicio
// Seção de Comandos 
   escreva("Digite o número para calcular o fatorial: ")
   leia(num)
   fat := 1
   para cont de 1 ate num faca
        fat := fat * cont
   fimpara
   escreva("O fatorial de ", num, " é: ", fat)
*/

function acaoBotao() {
    var num, fat
    num = prompt("Digite o número para calcular o fatorial: ")
    fat = 1

    for (var cont = 1; cont <= num; cont++) {
      fat = fat * cont
      
    }
   
    document.getElementById("paragrafo").innerText = "O fatorial de " + num + " é: " + fat

}
