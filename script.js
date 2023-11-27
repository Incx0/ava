async function buscarCep() {
	const cep = document.getElementById('inCep').value;

	if (!cep || isNaN(cep)) {
		alert("Digite um CEP válido")
		document.getElementById('inCep').value = "";
		document.getElementById('inCep').focus();
	}

	const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
	const dados = await resposta.json();

	document.getElementById('outRua').value = dados.logradouro;
	document.getElementById('outBairro').value = dados.bairro;
	document.getElementById('outCid').value = dados.localidade;
	document.getElementById('outEst').value = dados.uf;
}