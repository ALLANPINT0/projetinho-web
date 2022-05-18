function acessarAPI(url) {
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}

function converterData(data) {
    console.log(data.split(' '));
} 

function carregarDadosAPI() {
    let dados = acessarAPI(
        "http://localhost/api-agencia-manha/view/noticia/listar.php");
    let vagas = JSON.parse(dados);
    console.log(vagas);


   let divDados = '';
    vagas.forEach(e => {
        divDados += '<div class="container">';
        divDados += '<p class="fonte">'+e.fonte+'</p>';
        divDados += '<b>' + e.id + '</b>';
        divDados += '<a>'+'<h2>' + e.titulo + '</h2>'+'</a>';
        divDados += '<p>' + e.texto + '</p>';
        divDados += '<p>' + e.horario + '</p></div>';
        converterData(e.horario)
    }); // fim do vagas.forEach
    document.getElementById("dados_noticia").innerHTML =  divDados;
} // fim do carregarDadosAPI

carregarDadosAPI();