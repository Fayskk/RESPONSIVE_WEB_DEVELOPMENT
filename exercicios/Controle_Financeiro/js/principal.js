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
	var erros = document.querySelector(".erros");
	erros.style.whiteSpace = "pre"; // Necessario para utilizar o \n na string

	limparErros(erros);

	if (descricao.length <= 0) {
		erros.textContent += "A descrição é obrigatória.\n";
	} //else { erros.textContent = (descricao + "\n"); }

	if (categoria.length <= 0) {
		erros.textContent += "A categoria é obrigatória.\n";
	}

	if (data.length <= 0) {
		erros.textContent += "A data é obrigatória.\n";
	}

	if (isNaN(valor)) {
		erros.textContent += "O valor é obrigatório.\n";
	} else {
		if(valor == 0) {
			erros.textContent += "O valor deve ser diferente de zero (0).\n";
		}	
	}

	formulario.reset();

});

function limparErros(erros) {
	erros.innerHTML = "";
}
