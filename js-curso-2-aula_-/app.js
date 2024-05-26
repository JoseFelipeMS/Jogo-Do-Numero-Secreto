let listaDeNumerosSorteados = [];
let Numerolimite = 100
function NumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * Numerolimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == Numerolimite){
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return NumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

let tentativa = 1;

numeroSecreto = NumeroAleatorio();

console.log(numeroSecreto);

function ExibirNaTela(tag, texto) {
    let campo = document.querySelector(tag)
        campo.innerHTML = texto;
        responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );

}
function mensagemInicial() {
ExibirNaTela('h1', 'NÚMERO SECRETO');
ExibirNaTela('p', `escolha um número entre 1 e ${Numerolimite}`);
}
mensagemInicial()
function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        ExibirNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Descobriu o Número secreto com ${tentativa} ${palavraTentativa}`;
        ExibirNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (chute > numeroSecreto){
            ExibirNaTela('p', 'O número secreto é menor');
        } else{
            ExibirNaTela('p', 'O número secreto é maior');
        }
        tentativa++;
        limparCampo();
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo() {
    numeroSecreto = NumeroAleatorio();
    console.log(numeroSecreto);
    limparCampo();
    tentativa = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}