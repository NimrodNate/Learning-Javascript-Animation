"use strict";
// function run_right(){
// //move slighty
// console.log("hello")
// setTimeout(function(){run_right();},200);
// }

//run_right();

var timer;
// Run right
function run_right(slide, left)
{
	if ((left + 15) < (document.getElementById('stage').offsetWidth - document.getElementById('j').offsetWidth))
	{

		left = left + 15; // incearse his left attribute by 15px
		document.getElementById('j').style.left = left+"px";

		switch(slide){
			//if slide equals 1
			case 1:
			document.getElementById('j').style.backgroundPosition = '-40px 0px';
			timer = setTimeout(function(){run_right(2, left );},200);
			break;
			// if slide equals 2
			case 2:
			document.getElementById('j').style.backgroundPosition = '-80px 0px';
			timer = setTimeout(function(){run_right(3, left );},200);
			break;
			// if slide equals 3
			case 3:
			document.getElementById('j').style.backgroundPosition = '-120px 0px';
			timer = setTimeout(function(){run_right(4, left );},200);
			break;
			// if slide equals 4
			case 4:
			document.getElementById('j').style.backgroundPosition = '-80px 0px';
			timer = setTimeout(function(){run_right(1, left );},200);
			break;
		}
	}else{
		document.getElementById('j').style.backgroundPosition = '0px 0px';
	}
}

function stop_running(){
	document.getElementById('j').style.backgroundPosition = '0px 0px';
	clearTimeout(timer);
}

//run left
function run_left(slide, left)
{
	if ((left - 15) > 0)
	{
		left = left + 15; // incearse his left attribute by 15px
		document.getElementById('j').style.left = left+"px";

		switch(slide){
			//if slide equals 1
			case 1:
			document.getElementById('j').style.backgroundPosition = '-40px -50px';
			timer = setTimeout(function(){run_left(2, left );},200);
			break;
			// if slide equals 2
			case 2:
			document.getElementById('j').style.backgroundPosition = '-80px -50px';
			timer = setTimeout(function(){run_left(3, left );},200);
			break;
			// if slide equals 3
			case 3:
			document.getElementById('j').style.backgroundPosition = '-120px -50px';
			timer = setTimeout(function(){run_left(4, left );},200);
			break;
			// if slide equals 4
			case 4:
			document.getElementById('j').style.backgroundPosition = '-80px -50px';
			timer = setTimeout(function(){run_left(1, left );},200);
			break;
		}
	}else{
		document.getElementById('j').style.backgroundPosition = '0px -50px';
	}
}

function jump(up, top){
	console.log('Jump');

	document.getElementById('j').style.backgroundPosition = '-160px 0px';

	if(up && (document.getElementById('j').offsetTop > 20))
	{
		// if he is currently moving up, and he is more than 20 pixels from the top of the stage ...
		top = top - (top * .1); // This gives us a slight arc in the jump, rather than a constant movement like running
		document.getElementById('j').style.top = top+'px'; // Change his position
		timer = setTimeout(function(){ jump(up, top); } ,60);
	}else if(up){
		
	}
}

/*
function run_right(slide, left)
{
	left = left + 15; // incearse his left attribute by 15px
	document.getElementById('j').style.left = left+"px";

	switch(slide){
		//if slide equals 1
		case 1:
		document.getElementById('j').style.backgroundPosition = '-40px 0px';
		setTimeout(function(){run_right(2, left );},200);
		break;
		// if slide equals 2
		case 2:
		document.getElementById('j').style.backgroundPosition = '-80px 0px';
		setTimeout(function(){run_right(3, left );},200);
		break;
		// if slide equals 3
		case 3:
		document.getElementById('j').style.backgroundPosition = '-120px 0px';
		setTimeout(function(){run_right(4, left );},200);
		break;
		// if slide equals 4
		case 4:
		document.getElementById('j').style.backgroundPosition = '-80px 0px';
		setTimeout(function(){run_right(1, left );},200);
		break;

	}
}
*/