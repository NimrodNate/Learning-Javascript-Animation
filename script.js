"use strict";

var RobotMaker = function(robot, run_speed, jump_height){

	var stage = document.getElementById('stage');
	var jump_timer, run_timer;
	var face_right = true;
	//---------
	function run_r(phase, left)
	{
		//if ((left + 15) < (document.getElementById('stage').offsetWidth - document.getElementById('j').offsetWidth))
		if((left + (15 * run_speed)) < (stage.offsetWidth - robot.offsetWidth))
		{

			left = left + (15 * run_speed); // incearse his left attribute by 15px
			//document.getElementById('j').style.left = left+"px";
			robot.style.left = left+'px';

			switch(phase){
				//if slide equals 1
				case 1:
					robot.style.backgroundPosition = '-40px 0px';
					run_timer = setTimeout(function(){run_r(2, left );},200);
					break;
				// if slide equals 2
				case 2:
					robot.style.backgroundPosition = '-80px 0px';
					run_timer = setTimeout(function(){run_r(3, left );},200);
					break;
				// if slide equals 3
				case 3:
					robot.style.backgroundPosition = '-120px 0px';
					run_timer = setTimeout(function(){run_r(4, left );},200);
					break;
				// if slide equals 4
				case 4:
					robot.style.backgroundPosition = '-80px 0px';
					run_timer = setTimeout(function(){run_r(1, left );},200);
					break;
			}
		}else{
			robot.style.backgroundPosition = '0px 0px';
		}
	}
	//---------
	function run_l(phase, left)
	{
		if ((left - 15) > 0)
		{
			left = left - (15 * run_speed); // incearse his left attribute by 15px
			document.getElementById('j').style.left = left+"px";

			switch(phase){
				//if slide equals 1
				case 1:
					robot.style.backgroundPosition = '-40px -50px';
					timer = setTimeout(function(){run_l(2, left );},200);
					break;
				// if slide equals 2
				case 2:
					robot.style.backgroundPosition = '-80px -50px';
					timer = setTimeout(function(){run_l(3, left );},200);
					break;
				// if slide equals 3
				case 3:
					robot.style.backgroundPosition = '-120px -50px';
					timer = setTimeout(function(){run_l(4, left );},200);
					break;
				// if slide equals 4
				case 4:
					robot.style.backgroundPosition = '-80px -50px';
					timer = setTimeout(function(){run_l(1, left );},200);
					break;
			}
		}else{
			document.getElementById('j').style.backgroundPosition = '0px -50px';
		}
	}
	//---------
	function jump(up, top)
	{
		console.log('Jump');

		document.getElementById('j').style.backgroundPosition = '-160px 0px';

		if(up && (document.getElementById('j').offsetTop > 20))
		{
			// if he is currently moving up, and he is more than 20 pixels from the top of the stage ...
			top = top - (top * 0.1); // This gives us a slight arc in the jump, rather than a constant movement like running
			document.getElementById('j').style.top = top+'px';// Change his position
			timer = setTimeout(function(){ jump(up, top); } ,60); // Then call the function again

		}else if(up){

			// if he is currently moving up, but he is almost at the top of the stage and needs to come back down...
			up = false; // we switch the 'up' variable so he will be falling in the next loop 
			timer = setTimeout(function(){ jump(up, top); } ,60);

		}else if(!up && (document.getElementById('j').offsetTop < 115)){
			
			// if he is moving down, but is more than 5px from the ground, he will continue to fall...
			top = top + (top * 1); // he is falling slightly a'celerate
			document.getElementById('j').style.top = top + 'px';
			timer = setTimeout(function(){jump(up,top);},60);
		
		}else{

			//If he is moving down, and he is within 5px of the ground..
			document.getElementById('j').style.top = '120px'; // Place him on the ground
			document.getElementById('j').style.backgroundPosition = '0px 0px'; // return to standing sprite
			// We do not call the loop anymore since he is standing still at this point

		}
	}


// We will put all of our functions and variables in this area. 
// This is inside our 'impenetrable' wall, so nothing in this 
// area will conflict with other code. 
	return{
// Inside here, we place all of our 'doors' ... 
// these will be the only way anything can get
// in or out of this code.
// And, since this is still within the same 'scope' 
// as RobotMaker, we can use any variables mentioned above! 

	}
}
var timer;
// Run right


function stop_running(){
	document.getElementById('j').style.backgroundPosition = '0px 0px';
	clearTimeout(timer);
}
