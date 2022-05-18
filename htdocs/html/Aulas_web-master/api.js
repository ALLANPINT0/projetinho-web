function acessarAPI(url) {
  let requisicao = new XMLHttpRequest()
  requisicao.open("GET", url, false)
  requisicao.send()
  return requisicao.responseText
} // fim do acessarAPI

var entrada = element.horario;



function Hora() {
    
    entrada.value =format('DD/MM/YYYY HH:mm:ss');
}



function carregarDadosAPI() {
  let dados = acessarAPI(
      "http://localhost/api-agencia-noite/view/noticia/listar.php"
  )
  let vagas = JSON.parse(dados)
  console.log(vagas)
 
  
  divDados = ""
  vagas.forEach(element => {
      // funcao anonima para tratar a resposta da API
      let data=new Date(element.horario)
      divDados += '<div class="Content">'
      divDados += 'Fonte:'+ element.fonte +' </br></br>'
      divDados += '<a href=" '+ element.link+'">'
      divDados += '<b>'+ element.titulo +'</b> </br></br> </a>'
      divDados += ''+ element.texto +' </br></br>'
      divDados += '<p class="hora">'+ data.toLocaleString('pt-br') +'</p> </br>'
      divDados += '</div>'
      
  }) // fim do foreach
  document.getElementById("div_vagas").innerHTML = divDados

} // fim do carregarDadosAPI