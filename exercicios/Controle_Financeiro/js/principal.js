var titulo = document.querySelector(".titulo");
titulo.textContent = "Banco de Gringotts";

var receitas = document.querySelectorAll(".receita");

//var registro = 0;
var saldo = 0.0;
//while (registro < receitas.length){
for(var registro = 0; registro < receitas.length; registro++){
    var receita = receitas[registro];
    var tdValor = receita.querySelector(".info-valor");
    var tdSaldo = receita.querySelector(".info-saldo");
    var valor = parseFloat(tdValor.textContent);
    saldo += valor; //saldo = saldo + valor;

    tdSaldo.textContent = saldo.toFixed(2);

    if (saldo < 0) {
        tdSaldo.classList.add("receita-negativa");
    }
 //   registro++; // registro = registro +1;
}

// var receita2 = document.querySelector("#segunda-receita");
// var valor2 = receita2.querySelector(".info-valor");
// var saldo2 = receita2.querySelector(".info-saldo");
// saldo2.textContent = parseFloat(valor.textContent) 
// 							+ parseFloat(valor2.textContent);

var botao = document.querySelector("#adicionar-receita");
botao.addEventListener("click", function(evento) {
	evento.preventDefault();
	var form = document.formulario;
	var descricao = form.descricao.value;
	var categoria = form.categoria.value;
	var data = form.data.value;
	var valor = parseFloat(form.valor.value);
	var msgErros = document.querySelector(".erros");
	var erros = [];
	
	//erros.style.whiteSpace = "pre"; // Necessario para utilizar o \n na string

	if (descricao.length <= 0) {
		erros.push("A descrição é obrigatória.");
	} //else { erros.textContent = (descricao + "\n"); }

	if (categoria.length <= 0) {
		erros.push("A categoria é obrigatória.");
	}

	if (data.length <= 0) {
		erros.push("A data é obrigatória.");
	}

	if (isNaN(valor)) {
		erros.push("O valor é obrigatório.");
	} else {
		if(valor == 0) {
			erros.push("O valor deve ser diferente de zero (0).");
		}	
	}
	if (erros.length > 0 ){
		limparErros(msgErros);
		//for(var erro = 0; erro < erros.length; erro++){
		erros.forEach(function(erro){
			var li = document.createElement("li");
			li.textContent = erros[erro];
			msgErros.appendChild(li);
		});
	} else {
		var tabela = document.querySelector("#tabela-receitas");
		// Criando a tr para o saldo
		var tr = document.createElement("tr");
		// Criandos as td's que armazenam os dados do saldo
		var tdDescricao = document.createElement("td");
		var tdCategoria = document.createElement("td");
		var tdData = document.createElement("td");
		var tdValor = document.createElement("td");
		var tdSaldo = document.createElement("td");
		// Atribuindo os valores na propriedade textContent
		tdDescricao.textContent = descricao;
		tdCategoria.textContent = categoria;
		tdData.textContent = data;
		tdValor.textContent = valor;
		
		var receitas = document.querySelectorAll(".receita");
		var saldoAnterior = parseFloat(receitas[receitas.length - 1].querySelector(".info-saldo"));
		var saldo = saldoAnterior + valor;
		tdSaldo.textContent = saldo;

		if (saldo < 0) {
			tdSaldo.classList.add("receita-negativa");
		}
		console.log(valor);

		//tdSaldo.textContent = (tdSaldo).toFixed(2);
		// Inserindo os td’s na tr
		trSaldo.appendChild(tdDescricao);
		trSaldo.appendChild(tdCategoria);
		trSaldo.appendChild(tdData);
		trSaldo.appendChild(tdValor);
		trSaldo.appendChild(tdSaldo);
		
		//var tabelaSaldo = document.querySelector("#tabela-receitas");
		//tabelaSaldo.appendChild(trSaldo);
	}
	limparErros(erros);
	formulario.reset();

});

function limparErros(erros) {
	erros.innerHTML = "";
}
