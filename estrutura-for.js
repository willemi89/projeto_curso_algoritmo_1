
function acaoBotao() {
    var num, fat
    num = prompt("Digite o número para calcular o fatorial: ")
    fat = 1

    for (var cont = 1; cont <= num; cont++) {
      fat = fat * cont
      
    }
   
    document.getElementById("paragrafo").innerText = "O fatorial de " + num + " é: " + fat

}
