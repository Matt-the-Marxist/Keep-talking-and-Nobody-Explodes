let tabSelected;

let border = "0.5em solid "
let sideColors = [null,
	"#8b4513",
	"#008000",
	"#4682b4",
	"#4b0082",
	"#ff0000",
	"#ffff00",
	"#00ff00",
	"#00ffff",
	"#0000ff",
	"#eee8aa",
	"#ff1493"
]

$(document).ready(function(){
	
	//set the top tab
	topSelector(1);

	$(".op1").click(()=>{
		topSelector(1);
	});

	$(".op2").click(()=>{
		topSelector(2);
	});

	$(".op3").click(()=>{
		topSelector(3);
	});

	$(".op4").click(()=>{
		topSelector(4);
	});
	
	$(".op5").click(()=>{
		topSelector(5);
	});
	
	$(".op6").click(()=>{
		topSelector(6);
	});
	
	$(".op7").click(()=>{
		topSelector(7);
	});
	
	$(".op8").click(()=>{
		topSelector(8);
	});
	
	$(".op9").click(()=>{
		topSelector(9);
	});
	
	$(".op10").click(()=>{
		topSelector(10);
	});
	
	$(".op11").click(()=>{
		topSelector(11);
	});
});

/**
 * change module tab selected
 * @param {int} tabNum the tab number from left to right 
 */
function topSelector(tabNum){
	
	
	for(let i=1;i<12;i++){
		$(`.tab${i}`).css("display", "none");
	}

	$(`.op${tabSelected}`).removeClass("selected");

	tabSelected = tabNum;

	$(`.op${tabNum}`).addClass("selected");
	$(`.tab${tabNum}`).css("display", "");
	$(".mainContent").css("border", border+sideColors[tabNum])
}



