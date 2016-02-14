var name, picId, url, href;
var tmp = "";
var style = document.styleSheets;

$(document).ready(function(){
	$.getJSON("data/category.json", function(data){
		$(".pageH").html(data.headline);
		$.each(data.plants, function(k, v) {
			name = v.pName;
			picId = v.id;
			url = v.url;
			href = v.href;
			tmp += "<section class='plant'><h1 class='plantH'>" + name + "</h1><a href ='" + href + "' class='plantPic' id='" + picId + "'></a></section>";	
			style[1].insertRule("#" + picId +" {background: url('../" + url +"') no-repeat;}", 0);
		});
	$("#plantsWrapp").append(tmp);
	});
	
});