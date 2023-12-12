function login(){
	
	//window.location="./main.html";

	var id = $("#accountID").val();
	var password = $("#password").val();
	
	if((id == "") || (password == "")){
		
		alert("Both account and password are required");
		return;
	}
	
	//creating json object
	//var parms = {id:id, password:password};
	
	$.ajax({
		url: "./webapi/users/"+id,
		type: 'GET',
		dataType : "json",
        contentType: "application/json",
	}).fail(function(response) {
		
    }).done(function(response) {
    	console.log(response);
		
		//message appending to <div>
		//$("#message").text(message);
		
		if(response.password == password){
			
			window.location="./main.html";
		}else{
			
			$("#message").text("login unsuccessful");
		}

	});
}