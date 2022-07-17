//=====Slider=======
const carousel = document.querySelector('.slider');
const list = carousel.querySelector('ul');
const listElems = carousel.querySelectorAll('li');
const item = carousel.querySelector('li');
const prevBtn = carousel.querySelector('.slider__scroll-btn-prev');
const nextBtn = carousel.querySelector('.slider__scroll-btn-next');

let widthCSSprop = parseInt(window.getComputedStyle(item).width);
let marginCSSprop = parseInt(window.getComputedStyle(item).getPropertyValue('margin-right'));

let width = widthCSSprop + marginCSSprop; 
const count = 2; 

let position = 0; 

list.style.width = width*listElems.length + 14*(listElems.length-2) + 'px';

prevBtn.onclick = function() {
  position += width*3;
  position = Math.min(position, 0)
  list.style.marginLeft = position + 'px';
};

nextBtn.onclick = function() {
  position -= width*3;
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + 'px';
};

if(listElems.length < 3) {
  prevBtn.classList.add('slider__scroll-btn--disabled');
  nextBtn.classList.add('slider__scroll-btn--disabled');
} else if (listElems.length > 2) {
  prevBtn.classList.remove('slider__scroll-btn--disabled');
  nextBtn.classList.remove('slider__scroll-btn--disabled');
} 

// ======End of Slider===========

// ===============Popup==================

const infoBtn = document.querySelector('.footer__mobile-info');
const popup = document.querySelector('.cart-total__mobile');
const closeBtn = document.querySelector('.cart-total__mobile-button');
const content = document.querySelector('.checkout');
const footer = document.querySelector('.footer')

infoBtn.addEventListener('click', () => {
  popup.style.display = 'block';
  content.style.display = 'none';
  footer.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
  content.style.display = 'block';
  footer.style.display = 'block';
})

// ===============End of Popup===========