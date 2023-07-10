function GenerateSegitiga(){

	var intInput = document.getElementById("inputId").value;
	var strHasil = "";

	if(!Number.isInteger(parseInt(intInput))){
		alert("data not an integer");
	}else{
		for(var a = 0; a < intInput.length; a++){

			strHasil += intInput[a];

			for(var b = 0; b <= a; b++){
				strHasil += "0";
			}

			strHasil += "<br>";

		}

		document.getElementById("textId").innerHTML = strHasil;

	}

	

}