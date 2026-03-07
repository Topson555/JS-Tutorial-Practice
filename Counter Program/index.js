const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const reserBtn = document.getElementById("reserBtn");
const countlabel = document.getElementById("countlabel");
let count = 0;
increaseBtn.onclick = function(){
    count++;
    countlabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    countlabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countlabel.textContent = count;
}
