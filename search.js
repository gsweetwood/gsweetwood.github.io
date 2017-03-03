
document.addEventListener('DOMContentLoaded', bindsearch);

function bindsearch() {
	var pageCounter =1;
	var resourceType;
	var nmTitle = "name";
	document.getElementById("searchButton").addEventListener('click', function(event){
	var resourceSel = document.getElementsByName('resource');
	
	for (var k = 0, length = resourceSel.length; k < length; k++) {
		if (resourceSel[k].checked) {
				resourceType = resourceSel[k].value;
			break;
		}
	}
	if (resourceType == "films") {nmTitle = "title";}
		
	
	console.log(resourceType);
	var searchSel = document.getElementById('searchTerm');
	var req = new XMLHttpRequest();
	var URLhost = 'http://swapi.co/api/' + resourceType   +'/?search=' +  searchSel.value + "&page=" + pageCounter;

	req.open('GET', URLhost, true);
	req.addEventListener('load', function() {
		if (req.status >= 200 && req.status < 400) {
			var response = JSON.parse(req.responseText);
			console.log(response);
			var resultNum = document.getElementById("resultCount");
			resultNum.textContent = response.count;
			 
			for (var i =0; i < response.results.length; i++) {
				(function(y){
					var resultName = document.createElement("li");
					if (nmTitle == "name"){
						resultName.textContent = response.results[y].name;
					} else {
						resultName.textContent = response.results[y].title;
					}
					var resultList = document.getElementById("searchResult");
					resultList.appendChild(resultName);
				})(i);
			}
		} 
	});
	req.send(null);
	event.preventDefault();
	pageCounter++;
	
	});
	document.getElementById("clearButton").addEventListener('click', function() {
		pageCounter = 1;
		var clearSearchT = document.getElementById('searchTerm');
		clearSearchT.value = "";
		var clearResultNum = document.getElementById('resultCount');
		clearResultNum.textContent = "";
		var clearList = document.getElementById('searchResult');
		clearList.innerHTML = "";
	});
}


