let seconds = 0;

let el = document.getElementById("counter");

function incrementSeconds() {
    seconds += 1;
    el.innerText = seconds;
};

let set = setInterval(incrementSeconds, 1000);
let plusButton = document.getElementById("plus");
let minusButton = document.getElementById("minus");
let pauseButton = document.getElementById("pause");
let heartButton = document.getElementById("heart");
let likesCount = document.getElementsByClassName("likes")[0]
let likesNum = 0;

plusButton.addEventListener("click", function(){
    seconds += 1
    el.innerText = seconds;
});

minusButton.addEventListener("click", function(){
    seconds -= 1
    el.innerText = seconds;
});


pauseButton.addEventListener("click", function(){
    clearInterval(set)
});

heartButton.addEventListener("click", function(){
    likesNum += 1
    likesCount.innerText = likesNum

})



