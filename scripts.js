var botao = document.getElementById("botao");
botao.addEventListener("click", alertar);
var nome = document.getElementById("nome");
var saida = document.getElementById("saida-de-dados");
var email = document.getElementById("email");
var telefone = document.getElementById("telefone");
var cep = document.getElementById("cep");
var logradouro = document.getElementById("logradouro");
var numero = document.getElementById("numero");
var complemento = document.getElementById("complemento");
var bairro = document.getElementById("bairro");
var cidade = document.getElementById("cidade");
var estado = document.getElementById("estado");
function alertar(){
    const url = `https://viacep.com.br/ws/${cep.value}/json`;
    fetch(url)
.then(resposta=>resposta.json())
.then(data => {
    logradouro.value = data.logradouro;
    bairro.value = data.bairro;
    cidade.value = data.cidade;
    estado.value = data.uf;


    //alert(nome.value + " " + "clicou no botao!!");
    saida.innerText = "nome: " + " " + nome.value 
    + " \n E-mail: " + " " + email.value  
    + " \n telefone: " + " " + telefone.value 
    + " \n cep: " + " " + cep.value 
    + " \n logradouro: " + " " + logradouro.value
    + " \n numero: " + " " + numero.value 
    + " \n complemento: " + " " + complemento.value 
    + " \n bairro: " + " " + bairro.value 
    + " \n cidade: " + " " + cidade.value 
    + " \n estado: " + " " + estado.value;

// buscar o endereço pelo cep

})
.catch(error=>alert(error))
}
