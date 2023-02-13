let last = document.querySelector(`#last`);
let naming = document.querySelector(`#naming`);

let imgs = [`headphones.jpg`, `microphone.jpg`, `vynil.jpg`];
let names = [`Наушники`, `Микрофон`, `Пластинка`];


for (let i = 0; i<imgs.length; i++) {
    let img = imgs[i];

    last.innerHTML += `<li class="lastLi"><img src="assets/${img}" alt=""></li>`;
}

let lastLi = document.querySelector(`.lastLi`);
let prev = document.querySelector(`#prev`);
let next = document.querySelector(`#next`);
let count = 0;

document.addEventListener(`click`, function(evt) {
    if (evt.target.classList.contains(`next`) && count<2) {
        count++;
        last.style.left = `${(count-1)*-lastLi.clientWidth}px`;
        setTimeout(() => {naming.innerHTML = names[count]; }, 1000);
    } else if (evt.target.classList.contains(`prev`) && count>0) {
        count--;
        last.style.left = `${(count-1)*-lastLi.clientWidth}px`;
        setTimeout(() => {naming.innerHTML = names[count]; }, 1000);
    }
});

