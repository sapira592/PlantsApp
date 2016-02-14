var plantName, plantPic, king, divi, cls, set2, fmly, scName, inf, bot, medi, orn;
$ (document).ready(function(){
	$.getJSON("data/plantInfo.json", function(data){
		$.each(data.plant, function(k, v) {
			 if (v.id == "1") {
				 plantName = v.name;
				 plantPic = v.url;
				 king = v.kingdom;
				 divi= v.division;
				 cls = v.class1; 
				 set2 = v.set1; 
				 fmly = v.family; 
				 scName = v.sName;
				 inf = v.genInfo;
				 bot = v.infoBotanic;
				 medi = v.infoMedicine;
				 orn = v.infoOrnamentalP;
			}
		});
		$(".pageH").html(plantName);
		$(".infoImg").append("<img src='" + plantPic +"'>");
		$(".kingdom").html(king);
		$(".division").html(divi);
		$(".class1").html(cls);	
		$(".set").html(set2);
		$(".family").html(fmly);
		$(".sName").html(scName);
		$(".information").html(inf);		
		$("#botanic").html(bot);
		$("#medi1").html(medi);
		$("#orna").html(orn);
	});
});