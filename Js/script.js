	
	botao_gerar.addEventListener('click',tabuada)
	let table_body = document.querySelector("tbody")
	let mult = 1
	function tabuada(event){
		event.preventDefault() 
		let number = document.getElementById('number').value
		if (!number){
			document.querySelector('.error').innerText = "Por favor, insira um número!"
		} else {
			document.querySelector('.error').innerText = "Tabuada Gerada:"
			for (i = 1; i <= 10; i++) {
				let linha = document.createElement("tr")
				let coluna_numero = document.createElement("td")
				let coluna_mult = document.createElement("td")
				let coluna_result = document.createElement("td")
				
				let texto_numero = document.createTextNode(number)
				let texto_mult = document.createTextNode(mult)
				let texto_result = document.createTextNode(number * mult)
				mult++
				
				coluna_numero.appendChild(texto_numero)
				coluna_mult.appendChild(texto_mult)
				coluna_result.appendChild(texto_result)
				
				linha.appendChild(coluna_numero)
				linha.appendChild(coluna_mult)
				linha.appendChild(coluna_result)
				
				table_body.appendChild(linha)
			}
			}	
	};
	
	
	
	
	//PERGUNTAR PRO CAMILO: 
	//Funcionamento do this
	//Como é gerado o id de um objeto numa API
	//Uso de ; e {} 
	//Diferença entre separar strings de variáveis com + e vírgula
		//Separando com vírgula, o console mostra o resultado da multiplcação em cor azul, como se fosse número.
		//E com o sinal de mais fica tudo branco como se fosse string, mas a conta dá certo ('confused face') 
		//Navegar entre pastas no git