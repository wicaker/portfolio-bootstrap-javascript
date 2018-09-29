let nav = document.querySelector('#menu');
let btnToogle = document.querySelectorAll('.btn-line');

document.querySelector('.btn-nav').addEventListener('click',function(){
    if(nav.style.visibility=='hidden'){
        nav.style.visibility = "visible";
        btnToogle[1].style.visibility="hidden";
        btnToogle[0].style.WebkitTransform= "rotate(45deg) translate(5px,5px)";
        btnToogle[2].style.WebkitTransform= "rotate(-45deg) translate(7px,-6px)";
        
    }
    else{
        nav.style.visibility = "hidden";
        btnToogle[1].style.visibility="visible";
        btnToogle[0].style.WebkitTransform= "rotate(0deg)";
        btnToogle[2].style.WebkitTransform= "rotate(0deg)";
               
    }
});