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
	var picAddresses = 		["../pics/car.jpg",
							"../pics/cat.jpg",
							"../pics/house.jpg",
							"../pics/owl.jpg"]
	
	var randomnumber;
	var id = "td";
	
	//Ich befülle ein Array, das ich danach durchlaufe
	// ich muss bei jeder Befüllung darauf achten, dass der zu Füllende Inhalt nicht in mehr als einem 
	// zu füllenden Feld ist.
	var filler = [["","","","","","","",""],["","","","","","","",""]];
	
	for(var i = 0; i < 8; i++){

		randomnumber = Math.floor(Math.random()*4);	

		
			id = id + i;
			//document.getElementById(id).setAttribute('background', picAddresses[0][randomnumber]);	
			filler[0][i] = picAddresses[randomnumber];
			filler[1][i] = "1";
			id = "td";		
			//picAddresses[1][randomnumber] = "1";		
	}		
	//alert(nurZweiMalVorhanden(1,picAddresses));	

}

function nurZweiMalVorhanden(wert,arrayMitWerten){
	var erg = false;
	var anzahl = 0;

	for (var i = 1; i < arrayMitWerten.length; i++) {

		if (arrayMitWerten[0][i] == wert) {
			anzahl = anzahl + 1;
		}


	};
	if (anzahl < 2) {
		erg = true;
	}

	return erg;

}







