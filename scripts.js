
function getClock(){
	var c = {
		hour : $("[id=hour]").html(),
		minute : $("[id=minute]").html(),
		second : $("[id=second]").html()
	}
	return c;
}

var time = {
	minute : 0,
	second : 0,
	hour : 0
}

function clock(){
	var ct = increase();
	$("[id=hour]").html(ct.hour);
	$("[id=minute]").html(ct.minute);
	$("[id=second]").html(ct.second);
}

function increase(){
 	if(time.second<60){
		time.second++;
			if(time.second==60){
				time.minute++;
				if(time.minute==60){
				time.hour++;
				time.minute=0;
				}
				time.second=0;
			}
	}
	return time;	
}

var interval_;
var started = false;

function start(){
	console.log(started);
	if(!started){
		interval_ = setInterval("clock()",1000);
		started=true;
	}
}

function stop(){
	if(started){
	clearInterval(interval_);
	started=false;
	};
};


var counter=1;


function lap(){
	var div = document.getElementById('laps');
	div.innerHTML +="<div>"+time.hour+":"+time.minute+":"+time.second+"</div>";
	counter++;
	};