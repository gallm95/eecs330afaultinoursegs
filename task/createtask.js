

//var inputs = new Array();



/*var fields = document.getElementsByTagName('input');
for (var i = 0; i < fields.length; i++) {
    if (fields[i].getAttribute("required") != null) {
        fields[i].style.border = '1px solid #ff0000';
        requiredfields.push(fields[i]);
    }
}*/



var submit = document.getElementById("submit_button");
submit.onclick = function(e)  {
	var fields = document.getElementById("exampletaskname").value;
	var task = new Task(fields, document.getElementById("description").value, document.getElementById("volunteers").value, document.getElementById("deadline").value, document.getElementById("Events").value); 
	console.log(task);
	window.alert("Task Successfully Created")
};



