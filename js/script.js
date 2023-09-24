let login=document.querySelector(".login_a");
let cabinet=document.querySelector(".cabinet");
login.onclick=function(){
    cabinet.classList.add("cabinet1");
}
let cross=document.querySelector(".cross_img");
cross.onclick=function(){
    cabinet.classList.remove("cabinet1");
}
let burger=document.querySelector(".login_burger");
burger.onclick=function(){
    cabinet.classList.add("cabinet1");
}
let ok =document.querySelector(".burger_ok");
let burger_cross =document.querySelector(".burger_cross");
let nav =document.querySelector(".nav");
let site_navigation=document.querySelector(".site_navigation");
ok.onclick=function(){
    ok.classList.add("burger_ok1");
    burger_cross.classList.add("burger_cross1");
    nav.classList.add("nav1");
    site_navigation.classList.add("site_navigation1");
}
burger_cross.onclick=function(){
    ok.classList.remove("burger_ok1");
    burger_cross.classList.remove("burger_cross1");
    nav.classList.remove("nav1");
    site_navigation.classList.remove("site_navigation1");
}
let fail=document.querySelector(".fail");
let fail_input=document.querySelectorAll(".fail_input");
let fail_cross=document.querySelector(".fail_ok");
for(f of fail_input){
    f.onclick=function(){
        fail.classList.add("fail1");
    }
}
fail_cross.onclick=function(){
    fail.classList.remove("fail1");
}
let yspix=document.querySelector(".yspix");
let yspix_inpiut=document.querySelectorAll(".yspix_inpiut");
let good_ok=document.querySelector(".good_ok");
for(ys_input of yspix_inpiut){
    ys_input.onclick=function(){
        yspix.classList.add("yspix1");
    }
}
good_ok.onclick=function(){
    yspix.classList.remove("yspix1");
}
fetch("https://api.apispreadsheets.com/data/8iIyB2YSYbEs78pe/", {
	method: "POST",
	body: JSON.stringify({"data": {"bat_form":"","name_form":"","master_form":"","surname_form":""}}),
}).then(res =>{
	if (res.status === 201){
		// SUCCESS
	}
	else{
		// ERROR
	}
})
