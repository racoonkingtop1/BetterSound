let infoBtn = document.querySelectorAll(`.more`);
let modalPlace = document.querySelector(`.modalPlace`);
let cards = document.querySelector(`.cards`);
let cartUl = document.querySelector(`.cartUl`);
let cartBtn = document.querySelector(`.shopCart`);
let cart = document.querySelector(`.cart`);
let cartH = document.querySelector(`.cartH`);
let cartBuy = document.querySelector(`.cartBuy`);
let catBtn = document.querySelector(`.categories`);
let categ = document.querySelector(`.SB`);
let sidebar = document.querySelector(`.sidebar`);
let sidebarBack = document.querySelector(`.sidebarBack`);
let cartBack = document.querySelector(`.cartBack`);

let goods = [
    {
        img: "headphones.jpg",
        name: "Наушники",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatem cumque quae voluptates delectus reiciendis earum maiores, autem sed magnam tempore corporis explicabo perspiciatis optio, sunt similique temporibus reprehenderit. Consequatur.",
        loud: "Высокая",
        freq: "16000дб",
        nouse: "Krisp",
        qual: "Высокое",
        endur: "Высокая",
        cost: "3000р.",
        buy: "Купить"
    },
    {
        img: "microphone.jpg",
        name: "Микрофон",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatem cumque quae voluptates delectus reiciendis earum maiores, autem sed magnam tempore corporis explicabo perspiciatis optio, sunt similique temporibus reprehenderit. Consequatur.",
        loud: "Высокая",
        freq: "20000дб",
        nouse: "Krisp",
        qual: "низкое",
        endur: "Высокая",
        cost: "3000р.",
        buy: "Купить"
    },
    {
        img: "vynil.jpg",
        name: "Пластинка",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatem cumque quae voluptates delectus reiciendis earum maiores, autem sed magnam tempore corporis explicabo perspiciatis optio, sunt similique temporibus reprehenderit. Consequatur.",
        loud: "Высокая",
        freq: "1дб",
        nouse: "нет",
        qual: "среднее",
        endur: "Высокая",
        cost: "3000р.",
        buy: "Купить"
    },
    {
        img: "textback.jpg",
        name: "Чел)",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatem cumque quae voluptates delectus reiciendis earum maiores, autem sed magnam tempore corporis explicabo perspiciatis optio, sunt similique temporibus reprehenderit. Consequatur.",
        loud: "Высокая",
        freq: "7645азаз",
        nouse: "ага",
        qual: "лютое",
        endur: "Высокая",
        cost: "3000р.",
        buy: "Купить"
    },
    {
        img: "textback.jpg",
        name: "Фон",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatem cumque quae voluptates delectus reiciendis earum maiores, autem sed magnam tempore corporis explicabo perspiciatis optio, sunt similique temporibus reprehenderit. Consequatur.",
        loud: "Высокая",
        freq: "5032кек",
        nouse: "чево",
        qual: "жыжа",
        endur: "Высокая",
        cost: "3000р.",
        buy: "Купить"
    },
    {
        img: "mainUp.jpg",
        name: "Картинка",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatem cumque quae voluptates delectus reiciendis earum maiores, autem sed magnam tempore corporis explicabo perspiciatis optio, sunt similique temporibus reprehenderit. Consequatur.",
        loud: "Высокая",
        freq: "6973лол",
        nouse: "лол",
        qual: "неееееееееет",
        endur: "Высокая",
        cost: "3000р.",
        buy: "Купить"
    },
];

for (i=0; i<goods.length; i++) { 
    let img = goods[i].img;
    let name = goods[i].name;
    let cost = goods[i].cost;
    let buy = goods[i].buy;

    // карта

    let card = `
    <div class="card" data-id="${i}">
        <img class="cardImg" src="assets/${img}" alt="">
        <div class="cardCont">
            <h3 class="pixel cardname">${name}</h3>
            <div class="cardBtns">
                <p>${cost}</p>
                <button class="pixel more">${buy}</button>
            </div>
            <img class="cardCart" src="assets/cart.svg" alt="">
        </div>
    </div>
    `;

    cards.innerHTML += card;

    // модалка

    function createModal(i) {
        let img = goods[i].img;
        let name = goods[i].name;
        let desc = goods[i].desc;
        let loud = goods[i].loud;
        let freq = goods[i].freq;
        let noise = goods[i].nouse;
        let qual = goods[i].qual;
        let endur = goods[i].endur;
        let cost = goods[i].cost;

        let modal = `
            <div class="mod">
                <div class="modal" id="modal">
                <div class="crossBtn"><img class="modalCross" src="assets/cross.svg"></div>
                    <div class="modalCont">
                        <img src="assets/${img}" class="modalImg" alt="">
                        <div class="modalText">
                            <h3 class="pixel gray">${name}</h3>
                            <p class="pixel gray desc mb-5 p0">Описание:</p>
                            <p class="m-10 descr">${desc}</p>
                            <br>
                            <p class="pixel gray">Характеристики:</p>
                            <ul>
                                <li class="modalTextli">Громкость: . . . . . . . . . . . . . . . . ${loud};</li>
                                <li class="modalTextli">Частота: . . . . . . . . . . . . . . . . . . . ${freq};</li>
                                <li class="modalTextli">Шумоподавление: . . . . . . . . ${noise};</li>
                                <li class="modalTextli">Качество звука: . . . . . . . . . . . ${qual};</li>
                                <li class="modalTextli">Прочность: . . . . . . . . . . . . . . . . ${endur}.</li>
                            </ul>
                        </div>
                        <div class="modalContButton"><button>Купить ${cost}</button></div>
                    </div>
                </div>
            </div>
        `;

        return modal;
    }

    // выключение модалки

    function modalOff(evt) {
        console.log(`aaaaaa`);
            if (!evt.target.closest(`#modal`)) {
                modalPlace.innerHTML = ``;
                document.removeEventListener(`click`, modalOff);
            }
    };

    document.addEventListener(`click`, function(evt) {
        if (evt.target.closest(`.more`)) {
            let i = evt.target.closest(`.card`).dataset.id;
            modalPlace.innerHTML = createModal(i);
        } 
        document.addEventListener(`click`, modalOff);
    });
}

// корзина

function cartOn(evt) {
    let target = evt.target.closest(`.cardCart`);

    if (!target) {
        return;
    } 

    let current = target.closest(`.card`).dataset.id;
    console.log(current);

    let string = `<li class="cartLi pixel" id="cartLi"><span class="goodName">${goods[current].name}</span><span class="goodPrice">${goods[current].cost}</span></li>`;

    cartUl.innerHTML += string;
}

let cartLi = document.querySelectorAll(`#cartLi`);

document.addEventListener(`click`, function(evt) {
    let liTarget = evt.target.closest(`#cartLi`);
    if (evt.target.closest(`#cartLi`)) {
        liTarget.remove();
    }
});

document.addEventListener(`click`, cartOn);

// поиск

let searchInput = document.querySelector(`.searchinput`);

searchInput.addEventListener(`input`, function(evt) {
    let search = searchInput.value;

    console.log(`ccccccccc`);

    if (name.toLowerCase().includes(search.toLowerCase()) && cards.innerHTML !== ``) {
        cards.innerHTML = ``;
        cards.innerHTML += cardN;
    } else if (search.vale === ``) {
        return(evt);
    }
});



cartBtn.addEventListener(`click`, function(evt) {
    cart.classList.toggle(`cartNone`);
    cartUl.classList.toggle(`d-none`);
    cartH.classList.toggle(`d-none`);
    cartBuy.classList.toggle(`d-none`);
});

catBtn.addEventListener(`click`, function(evt) {
    if (categ.classList.contains(`catNone`)) {
        setTimeout(() => {sidebar.classList.remove(`d-none`);}, 1000);
        categ.classList.remove(`catNone`);
    } else {
        categ.classList.add(`catNone`);
        sidebar.classList.add(`d-none`);
    } 
});

sidebarBack.addEventListener(`click`, function(evt) {
    categ.classList.add(`catNone`);
    sidebar.classList.add(`d-none`);
});

cartBack.addEventListener(`click`, function(evt) {
    cart.classList.add(`cartNone`);
    cartUl.classList.add(`d-none`);
    cartH.classList.add(`d-none`);
    cartBuy.classList.add(`d-none`);
});


document.addEventListener(`click`, function(evt) {
    let target = evt.target;
    console.log(target);
    if (target.classList.contains(`modalCross`)) {
        modalPlace.innerHTML = ``;
    }
});