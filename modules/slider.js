function welcomeSlider() {
  const prev = document.querySelector('.arrow.prev'),
    next = document.querySelector('.arrow.next'),
    current = document.querySelector('#current'),
    total = document.querySelector('#total'),
    slides = document.querySelectorAll('.slide'),
    dots = document.querySelectorAll('.dots-item');

  let index = 0;

  if (slides.length < 10) {
    total.textContent = `0${slides.length}`;
    current.textContent = `0${index + 1}`;
  } else {
    total.textContent = slides.length;
    current.textContent = index + 1;
  }

  const addZero = () => {
    if (slides.length < 10) {
      current.textContent = `0${index + 1}`;
    } else {
      current.textContent = index + 1;
    }
  };

  const activeSlide = (n) => {
    for (let slide of slides) {
      slide.classList.remove('active', 'fade');
    }
    slides[n].classList.add('active', 'fade');
  };

  const activeDot = (n) => {
    for (let dot of dots) {
      dot.classList.remove('active');
    }
    dots[n].classList.add('active');
  };

  const prepareCurrentSlide = (item) => {
    activeSlide(item);
    activeDot(item);
  };

  const nextSlide = () => {
    if (index == slides.length - 1) {
      index = 0;
      prepareCurrentSlide(index);
      addZero();
    } else {
      index++;
      prepareCurrentSlide(index);
      addZero();
    }
  };
  const prevSlide = () => {
    if (index == 0) {
      index = slides.length - 1;
      prepareCurrentSlide(index);
      addZero();
    } else {
      index--;
      prepareCurrentSlide(index);
      addZero();
    }
  };

  dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
      index = indexDot;
      prepareCurrentSlide(index);
    });
  });

  next.addEventListener('click', nextSlide);
  prev.addEventListener('click', prevSlide);

  setInterval(nextSlide, 2500);
}

export default welcomeSlider;
