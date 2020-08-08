    let ul = document.querySelector('.slide_wrap');
    let firstItemClone = ul.firstElementChild.cloneNode(true);
    ul.appendChild(firstItemClone);
    function move(){

        let curIndex = 0;

        setInterval(function(){
            ul.style.transition = '0.2s';
            ul.style.transform = "translate3d(-"+200*(curIndex+1)+"px, 0px, 0px)";

            curIndex++;

            if(curIndex === 5){
                setTimeout(function(){
                    ul.style.transition = '0s';
                    ul.style.transform = "translate3d(0px, 0px, 0px)";
                },201)
                curIndex = 0;
            }

        },1000);
    }

    document.addEventListener("DOMContentLoaded",function(){
        move();
    });