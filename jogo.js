//Constantes para os jogadores
const jogador1 = "Kunai";
const jogador2 = "Shuriken";



//variável para salvar a vez do jogador e o fim do jogo
var vezJogador = jogador2;
var fimDeJogo = false;

//iniciando as funções do projeto
atualizaMostrador();
inicializarCaixa();

// função que mostra de quem é a vez no jogo

function atualizaMostrador(){

	if (fimDeJogo) { return;}

	if (vezJogador == jogador1) {

		var player = document.querySelectorAll("div#mostrador img")[0];
		player.setAttribute("src", "imagens/kunai.png");
	} else{

		var player = document.querySelectorAll("div#mostrador img")[0];
		player.setAttribute("src", "imagens/shuriken.png");
	}
}

//função para incluir a imagem na jogada

function inicializarCaixa(){

	var caixas = document.getElementsByClassName("caixa");
	for (var i = 0; i < caixas.length; i++) {


		caixas[i].addEventListener("click", function(){

			if (fimDeJogo) {return;}



			if(this.getElementsByTagName("img").length == 0){

				if (vezJogador == jogador1) {
					this.innerHTML = "<img src='imagens/kunai.png' class='imagens'>";
					this.setAttribute("jogada", jogador1);
					vezJogador = jogador2;

				}else{
					this.innerHTML = "<img src='imagens/shuriken.png' class='imagens'>";
					this.setAttribute("jogada", jogador2);
					vezJogador = jogador1;
				}
				atualizaMostrador();
				verificarVencedor();
			}
		});
	}
}

// função assíncrona para verificar quem venceu o jogo, além de verificar se o jogo terminou empatado


async function verificarVencedor(){

//atribuindo valores as variáveis referente a cada div do jogo da velha, para fazer a comparação posteriormente

var a1 = document.getElementById("a1").getAttribute("jogada");
var a2 = document.getElementById("a2").getAttribute("jogada");
var a3 = document.getElementById("a3").getAttribute("jogada");

var b1 = document.getElementById("b1").getAttribute("jogada");
var b2 = document.getElementById("b2").getAttribute("jogada");
var b3 = document.getElementById("b3").getAttribute("jogada");

var c1 = document.getElementById("c1").getAttribute("jogada");
var c2 = document.getElementById("c2").getAttribute("jogada");
var c3 = document.getElementById("c3").getAttribute("jogada");

//criação da variável vencedor vazia para salvar o mesmo após a comparação das div's
var vencedor = "";


//comparando através da variável a1, se o mesmo jogador conseguiu repetir 3 vezes na horizontal(a1-a2-3),
// vertical(a1-b1-c1)
//diagonal(a1-b2-c3)
if((a1 != "" && a1 == b1 && a1 == c1) || (a1 != "" && a1 == a2 && a1 == a3 ) || (a1 != "" && a1==b2 && a1 == c3 )) {
	vencedor = a1;
}
//comparando através da variável b2, se o mesmo jogador conseguiu repetir 3 vezes na horizontal(b1-b2-b3)
//vertical(a2-b2-c2)
//diagonal(a3-b2-c1)
else if((b2 !="" && b2 == b1 && b2 == b3) || (b2 !="" && b2==a2 && b2==c2) || (b2 !="" && b2==a3 && b2==c1))
{
	vencedor = b2;

}
//comparando através da variável c3, se o mesmo jogador conseguiu repetir 3 vezes na horizontal(c1-c2-c3)
//vertical(a3-b3-c3)
else if(( c3 != "" && c3==c2 && c3==c1) || (c3 != "" & c3==a3 && c3 == b3))
{
	vencedor = c3;
}
//se o vencedor e diferente de nulo então acabou o jogo e pode imprimir a variável vencedor
if (vencedor != "") {
	fimDeJogo = true;

	 await sleep(50);
	alert("O ganhador foi a: '" + vencedor + "'");
}
//caso todas as variáveis estejam prenchidas e vencedor estiver vazio, o jogo acaba em empate e imprimi na tela que deu velha
else  if(a1 !="" && a2 !="" && a3!="" && b1 !="" && b2 !="" && b3 !="" && c1 !="" && c2 !="" &&  c3 !="")
{ 
	await sleep(50);
	alert("Deu velha");
}

//ao clicar no botão resetar chama essa id com o comando que recarrega a URL da página, assim reiniciando o jogo.
$("#resetar").click(function(){
	location.reload();
});
	
}


function sleep(ms)
{
return new Promise(resolve => setTimeout(resolve, ms));

}


