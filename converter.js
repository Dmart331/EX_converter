function toNormal (celInput) {
	console.log("to cel happened");
		var celToFer = celInput * 9 / 5 + 32;
		var message = "Temp in F " + celToFer + " from C";
		console.log(message);
		document.getElementById("converted").innerHTML = message;
}

function toCel (celInput) {
		var ferToCel = (celInput - 32) * 5 / 9 ;
		var newMessage = "Temp in C " + ferToCel + " from F";
		console.log(newMessage);
		document.getElementById("converted").innerHTML = newMessage;
}

convertButton.addEventListener("click" , function(event){
	var mine = document.getElementById("cowboy").value;

	if (document.getElementById("normal").checked){

		return toNormal(mine);
	}
	else if (document.getElementById("weird").checked){ 

	return toCel(mine);
	}
	else 
		return null;
});


// 1) we need to know whether cel or feh is selected. HOW 

// 2) We need to gather info input by viewer and record(store) in object to call upon in the function

// 3) Get a reference to the button element in the DOM


// // This function should determine which conversion should
// // happen based on which radio button is selected.
// function determineConverter (clickEvent) {
//   console.log("event", clickEvent);
// }

// // Assign a function to be executed when the button is clicked
// button.addEventListener("click", determineConverter);
