const countLabel = document.getElementById('countLabel');
const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');
const increaseBtn = document.getElementById('increaseBtn');

let count = 0;

decreaseBtn.addEventListener('click', function() {
    count--;
    countLabel.textContent = count;
})

resetBtn.addEventListener('click', function() {
    count = 0;
    countLabel.textContent = count;
})

increaseBtn.addEventListener('click', function() {
    count++;
    countLabel.textContent = count;
})