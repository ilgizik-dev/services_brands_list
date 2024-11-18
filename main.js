// Вытащили кнопку
const btn = document.querySelector('.article__button');

// Вытащили картинку стрелочек рядом с кнопкой
const icon = document.querySelector('.article__button--img'); 

// Переменная для скрытых элементов, меняется в зависимости от ширины экрана
let elements = document.querySelectorAll('.article__list--item:nth-child(n + 7)');

// обработчик событий для кнопки
btn.addEventListener('click', function () {
    console.log(elements);
// цикл, проходящий по всем скрытым элементам, и меняющий всем им классы с помощью classList.toggle
    for (let i = 0; i < elements.length; i++) {    
    elements[i].classList.toggle('show');
    }
// Условия, если текст кнопки один, поменять его на другой, и все это в обработчике событий
    if (btn.textContent === 'Показать все') {
        btn.textContent = 'Скрыть';
    } else {
        btn.textContent = 'Показать все';
    }
    // Ротате
    const currentRotation = icon.style.transform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';
    icon.style.transform = currentRotation;
});

// свайпер


const firstSlide = document.querySelector('swiper-slide:nth-child(1)')

new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 16,
    pagination: {
        el: '.swiper-pagination',
     }
    
})


