function criptografar() {

    var textoDigitado = inputText.value   
    var textoEncriptado = textoDigitado
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat")     

  resultCripto.innerHTML = '<textarea readonly id="output-texto" cols="30" rows="15">' + textoEncriptado + 
  '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function desenCriptar() {

    var textoEncriptado = inputText.value
    var textoDesencriptado = textoEncriptado
    .replaceAll("enter","e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u")  

    resultCripto.innerHTML = '<textarea readonly id="output-texto" cols="30" rows="15">' + textoDesencriptado + 
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
  
}

function copiar() {

    var textoCopiado = document.getElementById('output-texto')    
      textoCopiado.select()
      document.execCommand('copy')
      alert('O texto foi copiado')
}

var inputText = document.querySelector("#entrada")
var resultCripto = document.querySelector("#saida-texto")

var btnCripto = document.querySelector('.bnt-criptografar')
var btnDescrip = document.querySelector('.bnt-descriptografar')
var btnCopiar = document.querySelector('.btn-copiar')

btnCripto.onclick = criptografar
btnDescrip.onclick = desenCriptar
btnCopiar.onclick = copiar


// troca de imagem por texto ao clicar no botao de encript

/*btnCripto.addEventListener("click", function() {
  var x = document.getElementById("saida-texto")
  if(x.style.display === 'none') {
    x.style.display = 'block'
  } else {
    x.style.display = 'none'
  }
})    
    resultCripto.innerHTML = textoEncriptado()
    document.getElementById("saida-texto").style.display = "none"
*/


/*var capturando = " ";

function capturar(){

capturando = document.getElementById("valor").value;
document.getElementById("").innerText = capturando
}
*/

