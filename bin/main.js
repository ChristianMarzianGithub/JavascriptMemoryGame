window.onload = start;
var filler = [["","","","","","","",""],["","","","","","","",""]];
var aufdeckZaehler = 1;

function start(){

	
	filler = shuffle(filler);
}

function myFunction(event) { 
	var id = event.target.id;
	if (id == "td1" ) {
		aufdeckZaehler = aufdeckZaehler + 1;
		//wenn es bereits verdeckt ist
		if (document.getElementById("td1").getAttribute('background') == '../pics/cover.png') {
			document.getElementById("td1").setAttribute('background',filler[0][0]);
		}else{
			document.getElementById("td1").setAttribute('background','../pics/cover.png' );
		}		
	}

	if (id == "td2" ) {
		aufdeckZaehler = aufdeckZaehler + 1;
		//wenn es bereits verdeckt ist
		if (document.getElementById("td2").getAttribute('background') == '../pics/cover.png') {
			document.getElementById("td2").setAttribute('background',filler[0][1]);
		}else{
			document.getElementById("td2").setAttribute('background','../pics/cover.png' );
		}
		
	}

	if (id == "td3" ) {
		aufdeckZaehler = aufdeckZaehler + 1;
		//wenn es bereits verdeckt ist
		if (document.getElementById("td3").getAttribute('background') == '../pics/cover.png') {
			document.getElementById("td3").setAttribute('background',filler[0][2]);
		}else{
			document.getElementById("td3").setAttribute('background','../pics/cover.png' );
		}
		
	}

	if (id == "td4" ) {
		aufdeckZaehler = aufdeckZaehler + 1;
		//wenn es bereits verdeckt ist
		if (document.getElementById("td4").getAttribute('background') == '../pics/cover.png') {
			document.getElementById("td4").setAttribute('background',filler[0][3]);
		}else{
			document.getElementById("td4").setAttribute('background','../pics/cover.png' );
		}
		
	}

	if (id == "td5" ) {
		aufdeckZaehler = aufdeckZaehler + 1;
		//wenn es bereits verdeckt ist
		if (document.getElementById("td5").getAttribute('background') == '../pics/cover.png') {
			document.getElementById("td5").setAttribute('background',filler[0][4]);
		}else{
			document.getElementById("td5").setAttribute('background','../pics/cover.png' );
		}
		
	}

	if (id == "td6" ) {
		aufdeckZaehler = aufdeckZaehler + 1;
		//wenn es bereits verdeckt ist
		if (document.getElementById("td6").getAttribute('background') == '../pics/cover.png') {
			document.getElementById("td6").setAttribute('background',filler[0][5]);
		}else{
			document.getElementById("td6").setAttribute('background','../pics/cover.png' );
		}
		
	}

	if (id == "td7" ) {
		aufdeckZaehler = aufdeckZaehler + 1;
		//wenn es bereits verdeckt ist
		if (document.getElementById("td7").getAttribute('background') == '../pics/cover.png') {
			document.getElementById("td7").setAttribute('background',filler[0][6]);
		}else{
			document.getElementById("td7").setAttribute('background','../pics/cover.png' );
		}
		
	}

	if (id == "td8" ) {
		aufdeckZaehler = aufdeckZaehler + 1;
		//wenn es bereits verdeckt ist
		if (document.getElementById("td8").getAttribute('background') == '../pics/cover.png') {
			document.getElementById("td8").setAttribute('background',filler[0][7]);
		}else{
			document.getElementById("td8").setAttribute('background','../pics/cover.png' );
		}		
	}
}


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





function shuffle(filler){
	var picAddresses = 		["../pics/car.jpg",
							"../pics/cat.jpg",
							"../pics/house.jpg",
							"../pics/owl.jpg"]
	
	var randomnumber;

	
	//Ich befülle ein Array, das ich danach durchlaufe
	// ich muss bei jeder Befüllung darauf achten, dass der zu Füllende Inhalt nicht in mehr als einem 
	// zu füllenden Feld ist.
	
	
	var i = 0;
	while(!(istAllesVoll(filler))){

		randomnumber = Math.floor(Math.random()*4);			
			//id = id + i;
			//document.getElementById(id).setAttribute('background', picAddresses[0][randomnumber]);	

			if (nurZweiMalVorhanden(picAddresses[randomnumber], filler)) {
				filler[0][i] = picAddresses[randomnumber];
				i++;
			};
			
			//id = "td";		
			//picAddresses[1][randomnumber] = "1";	
	}		
	

	//fuelle Werte in Tabelle
	var td;
	var zaehler = 1;
	for (var i = 0; i < 8; i++) {
		td = "td";
		td = td + zaehler;
		document.getElementById(td).setAttribute('background', filler[0][i]);	
		zaehler = zaehler + 1;
	}
	return filler;
}



function nurZweiMalVorhanden(wert,arrayMitWerten){
	var erg = false;
	var anzahl = 0;

	for (var i = 0; i < 7; i++) {
		if (arrayMitWerten[0][i] == wert) {
			anzahl = anzahl + 1;
		}
	};
	if (anzahl <= 1) {
		erg = true;
	}

	return erg;

}

function istAllesVoll(arrayMitWerten){
	var erg = false;
	var anzahl = 0;
	for (var i = 0; i < 8; i++) {
		if (arrayMitWerten[0][i] != "") {
			anzahl = anzahl + 1;
		}
	}
	if (anzahl == 8) {
		erg = true
	}

	return erg;
}