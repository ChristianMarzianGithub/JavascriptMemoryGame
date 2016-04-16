function cover(){
	document.getElementById("td1").setAttribute('background', '../pics/cover.png');
	document.getElementById("td2").setAttribute('background', '../pics/cover.png');
	document.getElementById("td3").setAttribute('background', '../pics/cover.png');
	document.getElementById("td4").setAttribute('background', '../pics/cover.png');
	
	document.getElementById("td5").setAttribute('background', '../pics/cover.png');
	document.getElementById("td6").setAttribute('background', '../pics/cover.png');
	document.getElementById("td7").setAttribute('background', '../pics/cover.png');
	document.getElementById("td8").setAttribute('background', '../pics/cover.png');
}


function shuffle(){
	var picAddresses = [
							["../pics/car.jpg",
							"../pics/cat.jpg",
							"../pics/house.jpg",
							"../pics/owl.jpg"],
							["0","0","0","0"]
							
	]
	
	var randomnumber;
	var id = "td";
	
	//Ich befülle ein Array, das ich danach durchlaufe
	// ich muss bei jeder Befüllung darauf achten, dass der zu Füllende Inhalt nicht in mehr als einem 
	// zu füllenden Feld ist.
		
	
	for(var i = 1; i < 9; i++){

		randomnumber = Math.floor(Math.random()*4);	

		if (picAddresses[1][randomnumber] = "0" ) {			
			id = id + i;
			document.getElementById(id).setAttribute('background', picAddresses[0][randomnumber]);	
			id = "td";		
			picAddresses[1][randomnumber] = "1";
		};
		
	}		
	
}

function nurZweiMalVorhanden(wert,arrayMitWerten){
	var erg = false;

	for (var i = 1; i < arrayMitWerten.length; i++) {
		


		return x;
	};
}







