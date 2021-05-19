

//слайдер с opacity
let buttons = document.querySelectorAll('.works__button');
let div = document.querySelectorAll('.filter>div');
let filterSelectedData = "";



for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        filterSelectedData = this.getAttribute("data-filter");//получаем значение аттрибута нажатой кнопки        

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('focused');
        }
        this.classList.add('focused');



        if (filterSelectedData == 'all') {//если первая кнопка и она выключена
            for (let a = 0; a < div.length; a++) {
                div[a].style.transition = '0.5s linear';
                div[a].style.opacity = '1';//показать все блоки
            }
        } else {//если нажаты все другие кнопки
            for (let a = 0; a < div.length; a++) {//цикл проходится по всем блокам с картинками
                let div_filter = div[a].getAttribute('data-filter');
                if (div_filter == filterSelectedData) {
                    div[a].style.transition = '0.5s linear';
                    div[a].style.opacity = '1';
                } else {
                    div[a].style.transition = '0.5s linear';
                    div[a].style.opacity = '0';//скрываем все картинки

                }
            }
        }
    }
}


// Код для точек
let dot = document.querySelectorAll('.dot'),
    i = 0;

function remFun() {
    dot[i].classList.remove('active-dot');
}

function dotsFun(e) {
    remFun();
    this.classList.add('active-dot');
    i = [].slice.call(dot).indexOf(e.target);
}

for (var k = 0; k < dot.length; k++) {
    dot[k].addEventListener('click', dotsFun)
};




// slider for team

$(document).ready(function () {

    $(window).resize(function () {

        var browserWidth = $(window).innerWidth();

        function resizeSlider(numColumns) {

            //Translate number of bootstrap columns
            if (numColumns == 4) {
                var bsColumn = "col-xs-3";
            } else if (numColumns == 3) {
                var bsColumn = "col-xs-4";
            } else if (numColumns == 2) {
                var bsColumn = "col-xs-6";
            } else if (numColumns == 1) {
                var bsColumn = "col-xs-12";
            }

            //Upwrap the slide images from their containing divs
            $(".slide-link").unwrap().unwrap();

            //Wrap every card in the appropriate bootstrap column
            $(".slide-link").wrap("<div class='" + bsColumn + " slide-wrapper'></div>");

            var slideWrappers = $(".slide-wrapper");

            //Wrap every 3 cards in an item class, forming 1 whole slide
            for (var i = 0; i < slideWrappers.length; i += numColumns) {
                if (i == 0) {
                    var activeItem = ' active';
                } else {
                    var activeItem = '';
                }

                slideWrappers.slice(i, i + numColumns).wrapAll("<div class='item" + activeItem + "'></div>");
            }

            //Empty the control indicators and rebuild them based on new number of slides
            $(".carousel-indicators").html("");

            var newNumberOfSlides = $("#myCarousel .item").length;

            for (var s = 0; s < newNumberOfSlides; s++) {
                if (s == 0) {
                    var activeClass = "class='active'";
                } else {
                    var activeClass = "";
                }

                $(".carousel-indicators").append("<li data-target='#myCarousel' data-slide-to='" + s + "'" + activeClass + "></li>");
            }
        }

        //if we're on a large desktop, organize the slides in 3 columns
        if (browserWidth > 991) {
            resizeSlider(3);
            //Large Tablet - 3 columns
        } else if (browserWidth > 767) {
            resizeSlider(2);
            //Small Tablet - 2 column
        } else {
            resizeSlider(1);
        }
    }).resize();

});

// код для ссылок меню
let menu = document.querySelector("ul");

menu.addEventListener('click', (e) => {
  if(e.target.tagName !== 'A') return;
  e.preventDefault();
  
  const href = e.target.getAttribute('href');
  
  const target = document.querySelector(href)
  
  target.scrollIntoView({block: "start", behavior: "smooth"})
})


// стрелка для прокрутка

function createArrow() {
    let arrowUp = document.createElement('img');
    arrowUp.setAttribute('src', 'https://cdn1.iconfinder.com/data/icons/DarkGlass_Reworked/128x128/actions/1uparrow.png')
    arrowUp.id = 'arrow';
    sec1.append(arrowUp);//по айдишнику не работает
    arrow.style.position = 'fixed';
    arrow.style.display = 'none';
}

createArrow();


document.onkeydown = function (event) {//здесь задаем, чтобы кнопка появлялась и ей задаем посишн фикс
    if (pageYOffset > document.documentElement.clientHeight) {
        arrow.style.display = 'block';
    } else {
        arrow.style.display = 'none';
    }
}

document.onscroll = function (event) {//здесь задаем, чтобы кнопка появлялась и ей задаем поситион фикс
    if (pageYOffset > document.documentElement.clientHeight) {    //clientHeight-высота окна; pageYoffset - текущая прокрутка
        arrow.style.display = 'block';
    } else {
        arrow.style.display = 'none';
    }
}

arrow.onclick = function goUp() {
    if (pageYOffset > 0) {
        window.scrollBy(0, -150);  // Метод scrollBy(x,y) прокручивает страницу относительно её текущего положения НА -150.
        let timer = setTimeout(goUp, 20)//т.е. каждые 20 милисек страница вверха на 20px
    } else clearTimeout(goUp);//вызывать функию уже не неужно, т.к. мы навреху
};



// код для выпадающего бургер-меню
let burger = document.querySelector('.header__menu-bar__burger');
let nav = document.querySelector('.header__menu-bar__list');
let menuburgitem = document.querySelectorAll('.header__menu-bar__list__item')
let backgr = document.querySelector('.header-backgr');

burger.onclick = function () {
    for (let i = 0; i < menuburgitem.length; i++) {
        menuburgitem[i].style.padding = '7px';
    }
    if (burger.innerHTML == '<i class="fas fa-bars"></i>') {
        this.innerHTML = '<i class="fas fa-times"></i>';
        nav.classList.add('open');
        backgr.style.marginTop = '370px';
     
    } else {
        burger.innerHTML = '<i class="fas fa-bars"></i>';       
        nav.classList.remove('open');
        backgr.style.marginTop = '0px';
    }
}

//поворачиваем карточку service на 180
let card__box = document.querySelectorAll('.card__box');
let card_front = document.querySelectorAll('.card_front');
let card_back = document.querySelectorAll('.card_back');
let card__button = document.querySelectorAll('.card__button');

for (let i = 0; i < card__button.length; i++) {
    card__button[i].onclick = function () {
        card__box[i].classList.add('flipped');
    }

    for (let i = 0; i < card_back.length; i++) {
        card_back[i].onclick = function () {
            card__box[i].classList.remove('flipped');
        }

    }
}

// multiple items option
  
// var navigation = document.querySelector('nav ul')
// console.log(navigation);
  
// navigation.addEventListener('click', function (e) {
  
//   if (e.target.classList[0].includes('_item')) {
//     var item = e.target.classList[0].split('-')[0];
    
//     var section = document.querySelector('.' + item)
//     console.log(section);
//     section.scrollIntoView({behavior: "smooth"})
//   }
// })
