	
	let textBox
	let x
	
	document.getElementById("tip0").style.display = "none"
	document.getElementById("tip5").style.display = "none"
	document.getElementById("tip9").style.display = "none"
	document.getElementById("tip11").style.display = "none"
	document.getElementById("tip101").style.display = "none"
	document.getElementById("generalTip").style.display = "none"
	document.getElementById("textBox").style.display = "none"
	
	generateTable.addEventListener('click',mult_table)
	let table_body = document.querySelector("tbody")
	let cont = 1
	function mult_table(event){
		event.preventDefault()
		let mult = 1		
		let number = document.getElementById('number').value
					 document.getElementById('number').value = ''	
		if (!number){
			document.querySelector('.status').innerText = "You must enter a number!"
		} else {
			document.querySelector("table").style.visibility = "visible"
			document.querySelector('.status').innerText = "Multiplication table of " + number +":"
			if (cont == 1){
				for (i = 1; i <= 10; i++) {
					let row = document.createElement("tr")
					
					let number_column = document.createElement("td")
					let x_column = document.createElement("td")
					let mult_column = document.createElement("td")
					let equal_column = document.createElement("td")
					let result_column = document.createElement("td")
			
					let number_text = document.createTextNode(number)
					let x_text = document.createTextNode('x')
					let mult_text = document.createTextNode(mult)
					let equal_text = document.createTextNode('=')
					let result_text = document.createTextNode(number * mult)
					mult++
					
					number_column.appendChild(number_text)
					x_column.appendChild(x_text)
					mult_column.appendChild(mult_text)
					equal_column.appendChild(equal_text)
					result_column.appendChild(result_text)
					
					row.appendChild(number_column)
					row.appendChild(x_column)
					row.appendChild(mult_column)
					row.appendChild(equal_column)
					row.appendChild(result_column)
					
					table_body.appendChild(row)
				};
				cont = 2
			} else {
				let selector = 0 
				for (e = 0; e <= 49;){
					document.getElementsByTagName("td")[e].innerText = (number)
					e++
					document.getElementsByTagName("td")[e].innerText = ("x")
					e++
					document.getElementsByTagName("td")[e].innerText = (mult)
					e++
					document.getElementsByTagName("td")[e].innerText = ("=")
					e++
					document.getElementsByTagName("td")[e].innerText = (number * mult)
					e++
					mult++
					
				}
			}	
		}	
	}

	function showButtons(){
		document.getElementsByClassName("buttons")[0].style.display = "inline-block";
	}

	function showTip0() {
		x = document.getElementById("tip0")
		textBox = document.getElementById("textBox")
		show()
	}

	function showTip5() {
		x = document.getElementById("tip5")
		textBox = document.getElementById("textBox")
		show()
	}

	function showTip9() {
		x = document.getElementById("tip9")
		textBox = document.getElementById("textBox")
		show()
	}

	function showTip11() {
		x = document.getElementById("tip11")
		textBox = document.getElementById("textBox")
		show()
	}

	function showTip101() {
		x = document.getElementById("tip101")
		textBox = document.getElementById("textBox")
		show()
	}
	
	function showGeneralTip() {
		x = document.getElementById("generalTip")
		textBox = document.getElementById("textBox")
		show()
	}

	function show(){
		document.getElementById("textBox").style.display = "block"
		document.getElementById("tip0").style.display = "none"
		document.getElementById("tip5").style.display = "none"
		document.getElementById("tip9").style.display = "none"
		document.getElementById("tip11").style.display = "none"
		document.getElementById("tip101").style.display = "none"
		document.getElementById("generalTip").style.display = "none"

		if (x.style.display === "none"){
			x.style.display = "block"
		}
	}

