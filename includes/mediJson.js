var icon, text, head, url;
var tmp1 = "<section class='iconWrapp'>";
var tmp2 = "<section class='iconWrapp'>";
var tmp3 = "<section class='iconWrapp'>";

$(document).ready(function(){
	$.getJSON("data/medi.json", function(data){
		$("#medi").html(data.headline);
		url = data.url;
		$.each(data.categories, function(k, v) {
			if(v.id<4){
				icon = v.icon;
				text = v.text;
				tmp1 += "<section class = 'icon'><a href='"+ url +"' id ='" + icon + "'></a> <h3>" + text + "</h3></section>";
	 			if(v.id==3) {
	 				tmp1 += "<div id='clear'></div></section>";
	 			}	
			}
			if(v.id>3 && v.id<7){
				icon = v.icon;
				text = v.text;
				tmp2 += "<section class = 'icon'><a href='"+ url +"' id ='" + icon + "'></a> <h3>" + text + "</h3></section>";
	 			if(v.id==6) {
	 				tmp2 += "<div id='clear'> </div></section>";
	 			}	
			}
				if(v.id>6){
				icon = v.icon;
				text = v.text;
				tmp3 += "<section class = 'icon'><a href='"+ url +"' id ='" + icon + "'></a> <h3>" + text + "</h3></section>";
	 			if(v.id==9) {
	 				tmp3 += "<div id='clear'> </div></section>";
	 			}	
			} 		
		});
	var icons = tmp1;
	icons += tmp2;
	icons += tmp3;
	$("main").append(icons);
	});
});