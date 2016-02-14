
$(document).ready(function(){
	  firstLoad();
	  setSubmit();
});	  	


function firstLoad(){
	$.post("getInfo.php",function(result){
	  	 var arr = result.split('<br>');
	  	 document.getElementById("headline").innerHTML = arr[0];
         document.getElementById("information").innerHTML = arr[1];
	   });
}

function setSubmit(){
	$('#editForm').submit(function(){
		var name = $('#headline').val();
		var info = $('#information').val();

		 $.ajax({
           type: "post",
           url: "updateInfo.php",
           data: {"name1": name, "info1":info}, // serializes the form's elements.
           success: function(resualt)
           {
           	 var str = "http://shenkar.html5-book.co.il/2015-2016/html5/dev_208/info.html?a=";
           	 str += info;
           	 window.location.replace(str);
	       }
         });
		return false;
	});
}
