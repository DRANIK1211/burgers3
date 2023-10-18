var a = 1;
var b = 0;
var c = 0;
var slid = document.getElementById("slider");
function hover_vk(){
	var el = document.getElementById("vk_discript");
	el.innerHTML = "<img src='vk_icon_2.png' height='100%'/>"
}
function out_vk(){
	var el = document.getElementById("vk_discript");
	el.innerHTML = "<img src='vk_icon_1.png' height='100%'/>"
}

function hover_tg(){
	var el = document.getElementById("tg_discript");
	el.innerHTML = "<img src='tg_icon_2.png' height='100%'/>"
}
function out_tg(){
	var el = document.getElementById("tg_discript");
	el.innerHTML = "<img src='tg_icon_1.png' height='100%'/>"
}

function hover_fc(){
	var el = document.getElementById("fc_discript");
	el.innerHTML = "<img src='fc_icon_2.png' height='100%'/>"
}
function out_fc(){
	var el = document.getElementById("fc_discript");
	el.innerHTML = "<img src='fc_icon_1.png' height='100%'/>"
}
function hover_ct(){
	var el = document.getElementById("ct_discript");
	el.innerHTML = "<img src='ph_2.png' height='100%'/>"
}
function out_ct(){
	var el = document.getElementById("ct_discript");
	el.innerHTML = "<img src='ph.png' height='100%'/>"
}

setInterval(slider, 4000)


function slider(){
	if (a == 1){
		slid.innerHTML = "<div class='imeges'><div class='imeges-img'><img src='burger_log.png' height='100%'/></div><div class='text'><div class='text-title'>ЭГГ БУРГЕР</div><div class='text-info'> Бургер с котлетой из мраморной говядины, жареным яйцом, сыром Чеддер и свежими помидорами</div></div></div>";
		b = 1;
		a = 0;
		c = 0;
		
	}
	else if (b == 1){
		slid.innerHTML = "<div class='imeges'><div class='imeges-img'><img src='burger_log.png' height='100%'/></div><div class='text'><div class='text-title'>БЕКОНЫЧ</div><div class='text-info'>Бургер с яичницей, обжаренным до золотистой корочки беконом и сырным соусом на пышной картофельной булке</div></div></div>";
		c = 1;
		b = 0;
		a = 0;
		
	}
	else if (c == 1){
		slid.innerHTML = "<div class='imeges'><div class='imeges-img'><img src='burger_log.png' height='100%'/></div><div class='text'><div class='text-title'>ТЕТЯ ИЗ БАРСЕЛОНЫ</div><div class='text-info'>Бургер с сочной котлетой из мрaморнойговядины, жареным яйцом, томатами, маринованным огурцом, листьями салатаи соусом из запеченного сладкого перца</div></div></div>";
		a = 1;
		c = 0;
		b = 0;
	}
}