
// function run_right(){
// 	//move slighty
// 	console.log("hello")
// 	setTimeout(function(){run_right();},200);
// }

// run_right(1);

function run_right(slide){
	switch(slide){
		//if slide equals 1
		case 1:
		document.getElementById('j').style.backgroundPosition = '-40px 0px'
		setTimeout(function(){run_right(2);},200);
		break;
		// if slide equals 2
		case 2:
		document.getElementById('j').style.backgroundPosition = '-80px 0px'
		setTimeout(function(){run_right(3);},200);
		break;
		// if slide equals 3
		case 3:
		document.getElementById('j').style.backgroundPosition = '-120px 0px'
		setTimeout(function(){run_right(4);},200);
		break;
		// if slide equals 4
		case 4:
		document.getElementById('j').style.backgroundPosition = '-80px 0px'
		setTimeout(function(){run_right(1);},200);
		break;

	}
}