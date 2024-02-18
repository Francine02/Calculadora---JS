const painel = document.getElementById('painel');

let jaCalculou = false;

function insert (numero) {
    if (jaCalculou === true){
        painel.innerHTML = numero;
        jaCalculou = false;
    } else {
        painel.innerHTML += numero;
    }
}

function calculando () {
    let resultado = eval(painel.textContent);
    painel.innerHTML = resultado;
    jaCalculou = true;
}

function apagar () {
    let conteudo = painel.innerHTML;
    
    if (conteudo.length > 0) { 
        conteudo = conteudo.slice(0, -1); 
        painel.innerHTML = conteudo;
    }
}

function limpar () {
    painel.innerHTML = '';
    jaCalculou = false;
}
