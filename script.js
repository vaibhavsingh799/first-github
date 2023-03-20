let flag = 1;

function clickslide(x){
    flag = flag + x;
    imgslider(flag);


}


imgslider(flag);



function imgslider(num){
    let slide = document.getElementsByClassName('slider');
    // let dot = document.getElementsByClassName('gola');

    if(num == slide.length){
        flag = 0,
        num = 0
    }

    if(num < 0){
        flag = slide.length -1,
        num = slide.length -1
    }

    for(let y of slide){
        y.style.display = 'none';
        y.style.display.backgroundcolor = 'gray';

    }
    // for(let z of dot){
        //     z.style.display.backgroundcolor = 'gray';
    // }

    slide[num].style.display = 'block';
    dot[num].style.display.backgroundcolor = 'white';
}