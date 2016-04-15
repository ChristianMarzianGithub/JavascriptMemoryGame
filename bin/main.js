function cover(){
	document.getElementById("td1").setAttribute('background', 'C:/Users/marzian/Pictures/MemoryGamePictures/CoverMemoryGame.bmp');
	document.getElementById("td2").setAttribute('background', 'C:/Users/marzian/Pictures/MemoryGamePictures/CoverMemoryGame.bmp');
	document.getElementById("td3").setAttribute('background', 'C:/Users/marzian/Pictures/MemoryGamePictures/CoverMemoryGame.bmp');
	document.getElementById("td4").setAttribute('background', 'C:/Users/marzian/Pictures/MemoryGamePictures/CoverMemoryGame.bmp');
	
	document.getElementById("td5").setAttribute('background', 'C:/Users/marzian/Pictures/MemoryGamePictures/CoverMemoryGame.bmp');
	document.getElementById("td6").setAttribute('background', 'C:/Users/marzian/Pictures/MemoryGamePictures/CoverMemoryGame.bmp');
	document.getElementById("td7").setAttribute('background', 'C:/Users/marzian/Pictures/MemoryGamePictures/CoverMemoryGame.bmp');
	document.getElementById("td8").setAttribute('background', 'C:/Users/marzian/Pictures/MemoryGamePictures/CoverMemoryGame.bmp');
}


function shuffle(){
	var picAddresses = [
							"C:/Users/marzian/Pictures/MemoryGamePictures/OwlMemoryGame.bmp",
							"C:/Users/marzian/Pictures/MemoryGamePictures/CatMemoryGame.bmp",
							"C:/Users/marzian/Pictures/MemoryGamePictures/DuckMemoryGame.bmp",
							"C:/Users/marzian/Pictures/MemoryGamePictures/SunMemoryGame.bmp"
							
	]
	
	var randomnumber;
	var id = "td";
	var tabelle = ["","","","","","","",""];
	
	//Ich befülle ein Array, das ich danach durchlaufe
	// ich muss bei jeder Befüllung darauf achten, dass der zu Füllende Inhalt nicht in mehr als einem 
	// zu füllenden Feld ist.
	
	
	
	
	for(var i = 1; i < 9; i++){
		randomnumber=Math.floor(Math.random()*4);	
		id = id + i;
		//alert(id);
		document.getElementById(id).setAttribute('background', picAddresses[randomnumber]);	
		id = "td";		
	}
	
	
		
}






