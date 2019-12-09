setInterval(function(){
	var date = new Date();
	updateTime(date);
},10);
function updateTime(date){
	var timeDiv = document.getElementById("clock_2");
	var hours = date.getHours();
	var minutes = date.getMinutes();
	if(hours<10){
		hours = "0" + hours;
	}
	if(minutes<10){
		minutes = "0" + minutes;
	}
	var time = hours + ":" + minutes;
	timeDiv.innerHTML = time;
}