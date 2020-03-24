"use stritc";

const encontrar_cep = (cep) => {
    const url = `https://viacep.com.br/ws/${cep}/json/` 

    fetch(url).then( (res) => res.json().then((dados) => preencher_formulario(dados)), () => window.alert("CEP Inválido"));
}

const preencher_formulario = (endereco) => {
    document.getElementById("endereco").value = endereco.logradouro;
    document.getElementById("bairro").value = endereco.bairro;
    document.getElementById("cidade").value = endereco.localidade;
    document.getElementById("estado").value = endereco.uf;

}

const $cep = document.getElementById("cep");
$cep.addEventListener("blur", () => encontrar_cep($cep.value));