var currentdate = new Date(); 
var minutes = currentdate.getMinutes();
var events = [];


if(minutes < 10){
	minutes = "0"+minutes;
}

var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + minutes + "-" 
                + ""+(parseInt(currentdate.getHours())+1) + ":"
                + minutes;

document.getElementById('date').value = datetime;


function check(){
	var n =	document.getElementById('name').value;
	var g = document.getElementById('group').value; 
	var d = document.getElementById('desc').value;
	var t = document.getElementById('date').value;
	var help = new EPEvent(n,g,d,t);
	events.push(help);
	console.log(events);

};

function check1(){
	console.log('i work i swear');
}


