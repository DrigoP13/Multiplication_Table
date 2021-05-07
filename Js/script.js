	
	botao_gerar.addEventListener('click',tabuada)
	let table_body = document.querySelector("tbody")
	let cont = 1
	function tabuada(event){
		event.preventDefault()
		document.querySelector("table").style.background="red"
		let mult = 1		
		let number = document.getElementById('number').value
					 document.getElementById('number').value = ''	
		if (!number){
			document.querySelector('.error').innerText = "Por favor, insira um número!"
		} else {
			document.querySelector('.error').innerText = "Tabuada Gerada:"
			document.getElementsByTagName("th")[0].innerText = "Número"
			document.getElementsByTagName("th")[1].innerText = "Multiplicador" 
			document.getElementsByTagName("th")[2].innerText = "Resultado" 
			if (cont == 1){
				for (i = 1; i <= 10; i++) {
					let linha = document.createElement("tr")
					let coluna_numero = document.createElement("td")
					let coluna_mult = document.createElement("td")
					let coluna_result = document.createElement("td")
			
					let texto_numero = document.createTextNode(number)
					let texto_mult = document.createTextNode("x "+mult)
					let texto_result = document.createTextNode(number * mult)
					console.log(mult,"if")
					mult++
					
					coluna_numero.appendChild(texto_numero)
					coluna_mult.appendChild(texto_mult)
					coluna_result.appendChild(texto_result)
					
					linha.appendChild(coluna_numero)
					linha.appendChild(coluna_mult)
					linha.appendChild(coluna_result)
					
					table_body.appendChild(linha)
					
				};
				cont = 2
			} else {
				let selector = 0 
				for (e = 1; e <= 29;e++){
					document.getElementsByTagName("td")[selector].innerText = (number)
					selector++
					document.getElementsByTagName("td")[selector].innerText = ("x "+mult)
					selector++
					document.getElementsByTagName("td")[selector].innerText = (number * mult)
					selector++
					console.log(mult,"else")
					mult++
					
				}
			};	
		};	
	}
	//PERGUNTAR PRO CAMILO: 
	//Funcionamento do this
	//Como é gerado o id de um objeto numa API
	//Uso de ; e {} 
	//Diferença entre separar strings de variáveis com + e vírgula
		//Separando com vírgula, o console mostra o resultado da multiplcação em cor azul, como se fosse número.
		//E com o sinal de mais fica tudo branco como se fosse string, mas a conta dá certo ('confused face') 
	//Upstream branch git
		