function sim(){
    alert("Você aceitou o meu pedido")
}

function desvia(t){

    var btn = t;
    btn.style.position = "absolute"
    btn.style.bottom = gerarPosicao(10, 90);
    btn.style.left = gerarPosicao(9, 90);


}

function gerarPosicao(min, max){
    return (Math.random() * (max - min) + min) + "%";
}