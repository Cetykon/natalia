/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


$(document).ready(function(){

	getExercises();
	
	//getMonday();
	
	//getTuesday();
	
	//getWednesday();
	
	//getThursday();
	
	//getFriday();
	
	//getSaturday();
	
	//getSunday();
});

//Client side API call using AJAX
function getExercises(){
	
	$.ajax({
		url: "./webapi/exercises",
		type: 'GET',
		dataType : "json",
        contentType: "application/json",
	}).fail(function(response) {
		console.log(JSON.stringify(response));

    }).done(function(response){

    	$.each(response, function(key, value) {
    		
    		var lstResults = "<tr><td>"+value.workout+"</td><td>"+value.reps+"</td><td>"+value.sets+"</td>" +
    		"<td>"+value.weight+"</td>" + "<td>"+value.lastupdate+"</td>" + "<td>"+value.setday+"</td>" +
    		"<td><a href = '#' onclick=editExercise("+value.id+") data-toggle='tooltip' title='Edit'>Edit</a></td>" +
    		"<td><a href = '#' onclick=deleteExercise("+value.id+") data-toggle='tooltip' title='Delete'>Delete</a></td></tr>";
       		
       		//if postBody exist in the html page execute
    		if($("#postBody").text()){
				   document.getElementById('postBody').innerHTML += lstResults;
			   }
			   
			if (value.setday == "Monday" || value.setday == "monday"){
				if($("#postBodyMonday").text()){
				   document.getElementById('postBodyMonday').innerHTML += lstResults;
			   }
			}
			if (value.setday == "Tuesday" || value.setday == "tuesday"){
				if($("#postBodyTuesday").text()){
				   document.getElementById('postBodyTuesday').innerHTML += lstResults;
			   }
			}
			if (value.setday == "Wednesday" || value.setday == "wednesday"){
				if($("#postBodyWednesday").text()){
				   document.getElementById('postBodyWednesday').innerHTML += lstResults;
			   }
			}
			if (value.setday == "Thursday" || value.setday == "thursday"){
				if($("#postBodyThursday").text()){
				   document.getElementById('postBodyThursday').innerHTML += lstResults;
			   }
			}
			if (value.setday == "Friday" || value.setday == "friday"){
				if($("#postBodyFriday").text()){
				   document.getElementById('postBodyFriday').innerHTML += lstResults;
			   }
			}
			if (value.setday == "Saturday" || value.setday == "saturday"){
				if($("#postBodySaturday").text()){
				   document.getElementById('postBodySaturday').innerHTML += lstResults;
			   }
			}
			if (value.setday == "Sunday" || value.setday == "sunday"){
				if($("#postBodySunday").text()){
				   document.getElementById('postBodySunday').innerHTML += lstResults;
			   }
			}
    	});
	});
}

function getExercise(){
	
	var id = $("#searchBox").val();

	if(id == ""){
		alert("Search box can not be left blank!");
		$("#productItemPrice").focus();
		return;
	}
	
	$.ajax({
		url: "./webapi/exercises/"+id,
		type: 'GET',
		dataType : "json",
        contentType: "application/json",
	}).fail(function(response) {
		
    }).done(function(response) {
    	console.log(response);
			
    	var lstResults = "<tr><th>ID</th><th>Work Out</th><th>Reps</th><th>Sets</th>"+
			"<th>Weight</th> <th>Last Update</th> <th>	Set Day</th> <th></th><th></th></tr>"+
			"<tr><td>"+response.id+"</td><td>"+response.workout+"</td><td>"+response.reps+"</td><td>"+response.sets+"</td>" +
    		"<td>"+response.weight+"</td><td>"+response.lastupdate+"</td><td>"+response.setday+"</td>" +
    		"<td><a href = '#' onclick=editExercise("+response.id+") data-toggle='tooltip' title='Edit'>Edit</a></td>" +
    		"<td><a href = '#' onclick=deleteExercise("+response.id+") data-toggle='tooltip' title='Delete'>Delete</a></td></tr>";
       		
       		//if postBody exist in the html page execute
    		if($("#searchBody").text()){
				   document.getElementById('searchBody').innerHTML += lstResults;
			   }
		
	});
	
}
function addExercise(){
	
	var exercisesWorkOut = $("#exercisesWorkOut").val();
	var exercisesReps = $("#exercisesReps").val();
	var exercisesSets = $("#exercisesSets").val();
	var exercisesWeight = $("#exercisesWeight").val();
	var exercisesLastUpdate = $("#exercisesLastUpdate").val();
	var exercisesSetDay = $("#exercisesSetDay").val();
	
	if(exercisesWorkOut == ""){
		alert("WorkOut cannot be blank");
		$("#exercisesWorkOut").focus();
		return;
	}
	
	//if contact field is blank alert the user and will focus cursor in the field and breaks out from doing anything
	if(exercisesReps == ""){
		alert("Reps cannot be blank");
		$("#exercisesReps").focus();
		return;
	}
	
	if(exercisesSets == ""){
		alert("Sets cannot be blank");
		$("#exercisesSets").focus();
		return;
	}
	
	if(exercisesWeight == ""){
		alert("Weight cannot be blank");
		$("#exercisesWeight").focus();
		return;
	}
	
	if(exercisesLastUpdate == ""){
		alert("Last Update cannot be blank");
		$("#exercisesWeight").focus();
		return;
	}
	
	//creates a json object of the fields
	var parms = { workout:exercisesWorkOut, reps:exercisesReps, sets:exercisesSets, weight:exercisesWeight, lastupdate:exercisesLastUpdate, setday:exercisesSetDay };
	
	$.ajax({
		url: "./webapi/exercises",
		type: 'POST',
        contentType: "application/json",
        data: JSON.stringify(parms)
	}).fail(function(response) {
		console.log(JSON.stringify(response));

    }).done(function(response){

		window.location="./index.html";
    	
	});
}

function deleteExercise(id){
	$.ajax({
		url: "./webapi/exercises/"+id,
		type: 'DELETE',
	}).fail(function(response) {
		console.log(JSON.stringify(response));

    }).done(function(response){

		window.location="./index.html";
    	
	});
}

function editExercise(id){
	
	$("#editModal").modal('show');
	
	$.ajax({
		url: "./webapi/exercises/"+id,
		type: 'GET',
        contentType: "application/json",
	}).fail(function(response) {
		console.log(JSON.stringify(response));
		console.log("Get Error")

    }).done(function(response){
		console.log(response);
		$("#exercisesIDModal").val(response.id);
		$("#exercisesWorkOutModal").val(response.workout);
		$("#exercisesRepsModal").val(response.reps);
		$("#exercisesSetsModal").val(response.sets);
		$("#exercisesWeightModal").val(response.weight);
    	$("#exercisesLastUpdateModal").val(response.lastupdate);
    	$("#exercisesSetDayModal").val(response.setday);
	});
}

function updateExercise(){
	
	var contactIDModal = $("#exercisesIDModal").val();
	var exercisesWorkOut = $("#exercisesWorkOutModal").val();
	var exercisesReps = $("#exercisesRepsModal").val();
	var exercisesSets = $("#exercisesSetsModal").val();
	var exercisesWeight = $("#exercisesWeightModal").val();
	var exercisesLastUpdate = $("#exercisesLastUpdateModal").val();
	var exercisesSetDay = $("#exercisesSetDayModal").val();
	
	var parms = { id:contactIDModal, workout:exercisesWorkOut, reps:exercisesReps, sets:exercisesSets, weight:exercisesWeight, lastupdate:exercisesLastUpdate, setday:exercisesSetDay }
	
	$.ajax({
		url: "./webapi/exercises/"+contactIDModal,
		type: 'PUT',
        contentType: "application/json",
        data: JSON.stringify(parms)
	}).fail(function(response) {
		console.log(JSON.stringify(response));

    }).done(function(response){

		window.location="./index.html";
    	
	});
	
}

function clearAddExercisesInterface()
{  
	document.getElementById('exercisesWorkOut').value = "";
	document.getElementById('exercisesReps').value = "";
	document.getElementById('exercisesSets').value = "";
	document.getElementById('exercisesWeight').value = "";
	document.getElementById('exercisesLastUpdate').value = "";
	document.getElementById('exercisesSetDay').value = "";

	
}

//function getMonday(){
//	
//	$.ajax({
//		url: "./webapi/exercises",
//		type: 'GET',
//		dataType : "json",
//        contentType: "application/json",
//	}).fail(function(response) {
//		console.log(JSON.stringify(response));
//
//    }).done(function(response){
//
//    	$.each(response, function(key, value) {
//    		
//    		if (value.setday == "Monday" || value.setday == "monday"){
//				
//				var lstResults = "<tr><td>"+value.workout+"</td><td>"+value.reps+"</td><td>"+value.sets+"</td>" +
//    		"<td>"+value.weight+"</td>" + "<td>"+value.lastupdate+"</td>" + "<td>"+value.setday+"</td>" +
//    		"<td><a href = '#' onclick=editExercise("+value.id+") data-toggle='tooltip' title='Edit'>Edit</a></td>" +
//    		"<td><a href = '#' onclick=deleteExercise("+value.id+") data-toggle='tooltip' title='Delete'>Delete</a></td></tr>";
//				
//			
//    		
//       		
//       		//if postBody exist in the html page execute
//    		if($("#postBodyMonday").text()){
//				   document.getElementById('postBodyMonday').innerHTML += lstResults;
//			   }
//			}
//    	});
//	});
//}
//
//function getTuesday(){
//	
//	$.ajax({
//		url: "./webapi/exercises",
//		type: 'GET',
//		dataType : "json",
//        contentType: "application/json",
//	}).fail(function(response) {
//		console.log(JSON.stringify(response));
//
//    }).done(function(response){
//
//    	$.each(response, function(key, value) {
//    		
//    		if (value.setday == "Tuesday" || value.setday == "tuesday"){
//				
//				var lstResults = "<tr><td>"+value.workout+"</td><td>"+value.reps+"</td><td>"+value.sets+"</td>" +
//    		"<td>"+value.weight+"</td>" + "<td>"+value.lastupdate+"</td>" + "<td>"+value.setday+"</td>" +
//    		"<td><a href = '#' onclick=editExercise("+value.id+") data-toggle='tooltip' title='Edit'>Edit</a></td>" +
//    		"<td><a href = '#' onclick=deleteExercise("+value.id+") data-toggle='tooltip' title='Delete'>Delete</a></td></tr>";
//				
//			
//    		
//       		
//       		//if postBody exist in the html page execute
//    		if($("#postBodyTuesday").text()){
//				   document.getElementById('postBodyTuesday').innerHTML += lstResults;
//			   }
//			}
//    	});
//	});
//}
//
//function getWednesday(){
//	
//	$.ajax({
//		url: "./webapi/exercises",
//		type: 'GET',
//		dataType : "json",
//        contentType: "application/json",
//	}).fail(function(response) {
//		console.log(JSON.stringify(response));
//
//    }).done(function(response){
//
//    	$.each(response, function(key, value) {
//    		
//    		if (value.setday == "Wednesday" || value.setday == "wednesday"){
//				
//				var lstResults = "<tr><td>"+value.workout+"</td><td>"+value.reps+"</td><td>"+value.sets+"</td>" +
//    		"<td>"+value.weight+"</td>" + "<td>"+value.lastupdate+"</td>" + "<td>"+value.setday+"</td>" +
//    		"<td><a href = '#' onclick=editExercise("+value.id+") data-toggle='tooltip' title='Edit'>Edit</a></td>" +
//    		"<td><a href = '#' onclick=deleteExercise("+value.id+") data-toggle='tooltip' title='Delete'>Delete</a></td></tr>";
//				
//			
//    		
//       		
//       		//if postBody exist in the html page execute
//    		if($("#postBodyWednesday").text()){
//				   document.getElementById('postBodyWednesday').innerHTML += lstResults;
//			   }
//			}
//    	});
//	});
//}
//
//function getThursday(){
//	
//	$.ajax({
//		url: "./webapi/exercises",
//		type: 'GET',
//		dataType : "json",
//        contentType: "application/json",
//	}).fail(function(response) {
//		console.log(JSON.stringify(response));
//
//    }).done(function(response){
//
//    	$.each(response, function(key, value) {
//    		
//    		if (value.setday == "Thursday" || value.setday == "thursday"){
//				
//				var lstResults = "<tr><td>"+value.workout+"</td><td>"+value.reps+"</td><td>"+value.sets+"</td>" +
//    		"<td>"+value.weight+"</td>" + "<td>"+value.lastupdate+"</td>" + "<td>"+value.setday+"</td>" +
//    		"<td><a href = '#' onclick=editExercise("+value.id+") data-toggle='tooltip' title='Edit'>Edit</a></td>" +
//    		"<td><a href = '#' onclick=deleteExercise("+value.id+") data-toggle='tooltip' title='Delete'>Delete</a></td></tr>";
//				
//			
//    		
//       		
//       		//if postBody exist in the html page execute
//    		if($("#postBodyThursday").text()){
//				   document.getElementById('postBodyThursday').innerHTML += lstResults;
//			   }
//			}
//    	});
//	});
//}
//
//function getFriday(){
//	
//	$.ajax({
//		url: "./webapi/exercises",
//		type: 'GET',
//		dataType : "json",
//        contentType: "application/json",
//	}).fail(function(response) {
//		console.log(JSON.stringify(response));
//
//    }).done(function(response){
//
//    	$.each(response, function(key, value) {
//    		
//    		if (value.setday == "Friday" || value.setday == "friday"){
//				
//				var lstResults = "<tr><td>"+value.workout+"</td><td>"+value.reps+"</td><td>"+value.sets+"</td>" +
//    		"<td>"+value.weight+"</td>" + "<td>"+value.lastupdate+"</td>" + "<td>"+value.setday+"</td>" +
//    		"<td><a href = '#' onclick=editExercise("+value.id+") data-toggle='tooltip' title='Edit'>Edit</a></td>" +
//    		"<td><a href = '#' onclick=deleteExercise("+value.id+") data-toggle='tooltip' title='Delete'>Delete</a></td></tr>";
//				
//			
//    		
//       		
//       		//if postBody exist in the html page execute
//    		if($("#postBodyFriday").text()){
//				   document.getElementById('postBodyFriday').innerHTML += lstResults;
//			   }
//			}
//    	});
//	});
//}
//
//function getSaturday(){
//	
//	$.ajax({
//		url: "./webapi/exercises",
//		type: 'GET',
//		dataType : "json",
//        contentType: "application/json",
//	}).fail(function(response) {
//		console.log(JSON.stringify(response));
//
//    }).done(function(response){
//
//    	$.each(response, function(key, value) {
//    		
//    		if (value.setday == "Saturday" || value.setday == "saturday"){
//				
//				var lstResults = "<tr><td>"+value.workout+"</td><td>"+value.reps+"</td><td>"+value.sets+"</td>" +
//    		"<td>"+value.weight+"</td>" + "<td>"+value.lastupdate+"</td>" + "<td>"+value.setday+"</td>" +
//    		"<td><a href = '#' onclick=editExercise("+value.id+") data-toggle='tooltip' title='Edit'>Edit</a></td>" +
//    		"<td><a href = '#' onclick=deleteExercise("+value.id+") data-toggle='tooltip' title='Delete'>Delete</a></td></tr>";
//				
//			
//    		
//       		
//       		//if postBody exist in the html page execute
//    		if($("#postBodySaturday").text()){
//				   document.getElementById('postBodySaturday').innerHTML += lstResults;
//			   }
//			}
//    	});
//	});
//}
//
//function getSunday(){
//	
//	$.ajax({
//		url: "./webapi/exercises",
//		type: 'GET',
//		dataType : "json",
//        contentType: "application/json",
//	}).fail(function(response) {
//		console.log(JSON.stringify(response));
//
//    }).done(function(response){
//
//    	$.each(response, function(key, value) {
//    		
//    		if (value.setday == "Sunday" || value.setday == "sunday"){
//				
//				var lstResults = "<tr><td>"+value.workout+"</td><td>"+value.reps+"</td><td>"+value.sets+"</td>" +
//    		"<td>"+value.weight+"</td>" + "<td>"+value.lastupdate+"</td>" + "<td>"+value.setday+"</td>" +
//    		"<td><a href = '#' onclick=editExercise("+value.id+") data-toggle='tooltip' title='Edit'>Edit</a></td>" +
//    		"<td><a href = '#' onclick=deleteExercise("+value.id+") data-toggle='tooltip' title='Delete'>Delete</a></td></tr>";
//				
//			
//    		
//       		
//       		//if postBody exist in the html page execute
//    		if($("#postBodySunday").text()){
//				   document.getElementById('postBodySunday').innerHTML += lstResults;
//			   }
//			}
//    	});
//	});
//}