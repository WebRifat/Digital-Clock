let boxFirst = document.querySelector(".wrapper .box .box1");
let boxSecond = document.querySelector(".wrapper .box .box2");
let boxThird = document.querySelector(".wrapper .box .box3");
let count = 0;
let interval = 1000;
// console.log(boxFirst,boxSecond,boxThird)

let counting = setInterval(() => {

    boxThird.innerHTML = Number(boxThird.innerHTML) + 1;
    

    if((boxThird.innerHTML == 60)){
        boxSecond.innerHTML = Number(boxSecond.innerHTML) + 1;
        boxThird.innerHTML = 0;


        if(boxSecond.innerHTML == 60){
            boxFirst.innerHTML = Number(boxFirst.innerHTML) + 1;
            boxSecond.innerHTML = 0;
        }
    } 
    
}, 1000);




