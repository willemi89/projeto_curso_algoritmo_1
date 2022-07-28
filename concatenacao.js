/*
var
   nome: caractere
   numero: real

inicio
// Seção de Comandos 
   escreval("Digite o nome: ")
   leia(nome)
   escreval("Digite o número: ")
   leia(numero)
   
   escreval(nome, " :", numero, 15)
*/

var nome, numero;

nome = prompt("Digite o nome: ")
numero = prompt("Digite o número: ")

document.getElementById("paragrafo").innerText = nome + " : " + numero