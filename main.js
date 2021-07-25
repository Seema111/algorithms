function recommendArticles() {
	console.log('import')
	let inputData = document.getElementById("data").value
	eel.returnOutput(inputData)(callBack)
}

function callBack(result) {
	console.log(result)
	document.getElementById("resultTitle").style.display = "block";
	const finalRow = document.getElementById("tableRow")
	result.forEach((el) => {
		el.forEach((data, index) => {
			if (data) {
				finalRow.innerHTML += `<tr><td>${index + 1}.</td> <td> ${data.Title}</td></tr>`;
			}
		});
	});
}
