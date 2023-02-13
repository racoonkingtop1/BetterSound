let burgerOn = document.querySelector(`.hBurImg`);
let burCross = document.querySelector(`.burCross`);
let burger = document.querySelector(`.burgerMenu`);

burgerOn.addEventListener(`click`, function(evt) {
    burger.classList.remove(`w-0`);
    setTimeout (() => {burCross.classList.remove(`d-none`)}, 1000) ;
});

burCross.addEventListener(`click`, function(evt) {
    burger.classList.add(`w-0`);
    burCross.classList.add(`d-none`);
});