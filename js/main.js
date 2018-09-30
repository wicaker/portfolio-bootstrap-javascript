let nav = document.querySelector('#menu');
let btnToogle = document.querySelectorAll('.btn-line');

document.querySelector('.btn-nav').addEventListener('click',function(){
    if(nav.style.visibility=='visible'){
        document.querySelector('.btn-nav').style.WebkitTransform='rotate(0deg)';
        nav.style.visibility = "hidden";
        btnToogle[1].style.visibility="visible";
        btnToogle[0].style.WebkitTransform= "rotate(0deg)";
        btnToogle[2].style.WebkitTransform= "rotate(0deg)";        
    }
    else{
        nav.style.visibility = "visible";
        document.querySelector('.btn-nav').style.WebkitTransform='rotate(180deg)';
        btnToogle[1].style.visibility="hidden";
        btnToogle[0].style.WebkitTransform= "rotate(45deg) translate(5px,5px)";
        btnToogle[2].style.WebkitTransform= "rotate(-45deg) translate(7px,-6px)";
    }
});

if(document.body.clientWidth < 576){
    let leftSide = document.querySelector('.left');
    leftSide.parentNode.removeChild(leftSide);
    document.querySelector('.right').style.fontSize="25px";
    document.querySelector('.lg-heading').style.fontSize="4rem";
    document.querySelector('.sm-heading').style.fontSize="2rem";
}