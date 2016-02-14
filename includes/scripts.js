var dropList;
var allBar;
var nav;
var mainSearch;

window.onload = function() {
	
	dropList = document.getElementById("dropDownList");
	allBar = document.getElementById("sea");
	nav = document.getElementById("nav");
	mainSearch = document.getElementById("mainSearch");
	allBar.addEventListener("click", allBarClick);
	

};

function allBarClick() {
	console.log(dropList);
	if (dropList.style.display = "none"){
		dropList.style.display = "block";
		nav.style.display = "none";
		mainSearch.style.width = "100%";}
}


