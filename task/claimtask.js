var claim = document.getElementById("rent");
var vol = parseInt(document.getElementById("volunteers").innerHTML);
claim.onclick = function(e)  {
	var r = window.confirm("Would you like to claim this task?");
	if (r == true) {
	console.log(vol);
	if (vol>0) {
		vol--;
	}
	document.getElementById("volunteers").innerHTML= vol;

}


};



