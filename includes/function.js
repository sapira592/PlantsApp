var tmp;
var swiper;

window.onload = function(){
	swiper = new Swiper('.swiper-container',{
		onSlideChangeEnd: function(swiper){
			mark();
		}
	});
	var res = parse();
	
	if(res == 3){
		swiper.slideTo(3, 1);
	}
	else if(res) {
		swiper.slideTo(3, 1);
		var tmp2 = decodeURIComponent(res); 
		var tmp3 = document.getElementById("medi1");
		tmp3.innerHTML = tmp2 + "<br><br><br><br><br> השינויים עברו בהצלחה!"; 
	}
		
	set();
};

function set(){	
	tmp = document.getElementById("ff").getElementsByTagName("li");	
	tmp[0].addEventListener("click", function(){clickLink(4,0);});
	tmp[1].addEventListener("click", function(){clickLink(3,1);});
	tmp[2].addEventListener("click", function(){clickLink(2,2);});
	tmp[3].addEventListener("click", function(){clickLink(1,3);});	
}

function clickLink(num,index) {

	if(num ==0 && index==0)
	{
		for(var i=0; i<4 ; i++){
			tmp[i].childNodes[0].style.color = "#355723";
			tmp[i].style.fontSize = "14px"; 
		}
	}
	else{
	tmp[index].childNodes[0].style.color = "#785616";
	tmp[index].style.fontSize = "15px";
	swiper.slideTo(num, 300, true);
	for(var i=0; i<4 ; i++){
		if(i!= index) {
		tmp[i].childNodes[0].style.color = "#355723";
		tmp[i].style.fontSize = "14px";
		}
	}}
}

function mark() { 
	var loc = swiper.activeIndex;
	console.log(loc);
	if(loc == 0) clickLink(0,0);
	if(loc == 1) clickLink(1,3);
	if(loc == 2) clickLink(2,2);
	if(loc == 3) clickLink(3,1);
	if(loc == 4) clickLink(4,0);
}

function parse(){
	var aKeyValue = window.location.search.substring(1).split("&"); // take only from questionmark, substring throw the questionmark.
	var str = aKeyValue[0].split("=")[1];						// split = for other parameters.
	return str;	
}

//‏‏