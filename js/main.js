let nav = document.querySelector('#menu');
let btnToogle = document.querySelectorAll('.btn-line');
let leftSide = document.querySelector('.left');

function animation(targetPosition,posisi1,posisi2,posisi,time,visible){
    if(posisi=='top'){
    var target = document.querySelector(targetPosition);
    var player = target.animate([
            {top: posisi1},
            {top: posisi2},
            ], time);
            player.addEventListener('finish', function() {
                target.style.visibility = visible;
              }); 
    }
    else if(posisi=='bottom'){
        var target = document.querySelector(targetPosition);
            var player = target.animate([
                    {bottom: posisi1},
                    {bottom: posisi2}
                  ], time);
                  player.addEventListener('finish', function() {
                    target.style.visibility = visible;
                  }); 
    }
    else{
            var player = targetPosition.animate([
                    {right: posisi1},
                    {right: posisi2}
                  ], time);
    }
      
}

document.querySelector('.btn-nav').addEventListener('click',function(){
    let list = document.getElementsByClassName('item');
    if(document.querySelector('.left').style.visibility=="visible" && document.querySelector('.right').style.visibility=="visible"){
        document.querySelector('.btn-nav').style.WebkitTransform='rotate(0deg)';
        btnToogle[1].style.visibility="visible";
        btnToogle[0].style.WebkitTransform= "rotate(0deg)";
        btnToogle[2].style.WebkitTransform= "rotate(0deg)";
        animation('.left','0px','-1000px','top',300,'hidden');
        animation('.right','0px','-1000px','bottom',300,'hidden');
        
    }
    else{
        document.querySelector('.left').style.visibility="visible";
        document.querySelector('.right').style.visibility="visible";
        animation('.left','-1000px','0px','top',300);
        animation('.right','-1000px','0px','bottom',300);
        for(let i =0; i< list.length ;i++){
            let time = 500;
            animation(list[i],'-1000px','0px','right',time+i*100);
        }
        document.querySelector('.btn-nav').style.WebkitTransform='rotate(180deg)';
        btnToogle[1].style.visibility="hidden";
        btnToogle[0].style.WebkitTransform= "rotate(45deg) translate(5px,5px)";
        btnToogle[2].style.WebkitTransform= "rotate(-45deg) translate(7px,-6px)";
    }
    
});

if(document.body.clientWidth < 576){
    document.getElementById('img-small').innerHTML='<img class="rounded-circle " style="height: 20vh; weight: 20vw; "src="img/portrait.jpg" alt="">';
    leftSide.querySelector('img').remove('img');
    document.querySelector('.right').style.fontSize="3rem";
    leftSide.style.position = 'absolute';
    document.querySelector('.lg-heading').style.fontSize="4rem";
    document.querySelector('.sm-heading').style.fontSize="2rem";
}