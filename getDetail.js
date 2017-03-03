document.addEventListener('DOMContentLoaded', bindDetail);

function bindDetail() {
	
	document.getElementById("getDetailsButton").addEventListener('click', function(event){

	
	var personSelect = document.getElementById("select");
	var selectVal = personSelect.options[personSelect.selectedIndex].value
	
	var req = new XMLHttpRequest();
	var URLhost = 'http://swapi.co/api/people/' + selectVal + "/";

	req.open('GET', URLhost, true);
	req.addEventListener('load', function() {
		if (req.status >= 200 && req.status < 400) {
			var response = JSON.parse(req.responseText);
			console.log(response);
			
			var pName = document.getElementById("name");
			pName.textContent = "Name: " + response.name;
			
			var pHeight = document.getElementById("height");
			pHeight.textContent = "Height: " + response.height;
			
			var pMass = document.getElementById("mass");
			pMass.textContent = "Mass: " + response.mass;
			
			var pHairColor = document.getElementById("hair_color");
			pHairColor.textContent = "Hair Color: " + response.hair_color;
			
			var pSkinColor = document.getElementById("skin_color");
			pSkinColor.textContent = "Skin Color: " + response.skin_color;
			
			var pEyeColor = document.getElementById("eye_color");
			pEyeColor.textContent = "Eye Color: " + response.eye_color;
			
			var pBirthyear = document.getElementById("birthyear");
			pBirthyear.textContent = "Birthyear: " + response.birthyear;
			
			var pGender = document.getElementById("gender");
			pGender.textContent = "Gender: " + response.gender;
			
			var pHomeworld = document.getElementById("homeworld");
			pHomeworld.textContent = "Homeworld: " + response.homeworld;
			
			var pCreated = document.getElementById("created");
			pCreated.textContent = "Created: " + response.created;
			
			var pEdited = document.getElementById("edited");
			pEdited.textContent = "Edited: " + response.edited;
			
			var pURL = document.getElementById("url");
			pURL.textContent = "URL: " + response.url;
			 
			for (var i =0; i < response.films.length; i++) {
				(function(y){
					var pFilms = document.getElementById("films");
					if (y == 0){
						pFilms.textContent = "Starred in: " + response.films[y];
					} else {
						pFilms.textContent += ", " + response.films[y];
					}
				})(i);
			}
			for (var k =0; k < response.species.length; k++) {
				(function(x){
					var pSpecies = document.getElementById("species");
					if (x == 0){
						pSpecies.textContent = "Species: " + response.species[x];
					} else {
						pSpecies.textContent += ", " + response.species[x];
					}
				})(k);
			}
			for (var j =0; j < response.vehicles.length; j++) {
				(function(y){
					var pVehicles = document.getElementById("vehicles");
					if (y == 0){
						pVehicles.textContent = "Vehicles: " + response.vehicles[y];
					} else {
						pVehicles.textContent += ", " + response.vehicles[y];
					}
				})(j);
			}
			for (var w =0; w < response.starships.length; w++) {
				(function(y){
					var pStarships = document.getElementById("starships");
					if (y == 0){
						pStarships.textContent = "Starships: " + response.starships[y];
					} else {
						pStarships.textContent += ", " + response.starships[y];
					}
				})(w);
			}
		} 
	});
	req.send(null);
	event.preventDefault();
	});
}