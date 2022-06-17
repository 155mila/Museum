function videoSlider() {
  const prev = document.querySelector('.arrow-prev'),
    next = document.querySelector('.arrow-next'),
    videoSlides = document.querySelectorAll('.video-slide'),
    videoDots = document.querySelectorAll('.dot');

  let index = 0;

  const activeVideo = (n) => {
    for (let slide of videoSlides) {
      slide.classList.remove('active');
    }
    videoSlides[n].classList.add('active');
  };

  const activeDot = (n) => {
    for (let dot of videoDots) {
      dot.classList.remove('active');
    }
    videoDots[n].classList.add('active');
  };

  const prepareCurrentSlide = (item) => {
    activeVideo(item);
    activeDot(item);
  };

  const nextSlide = () => {
    if (index == videoSlides.length - 1) {
      index = 0;
      prepareCurrentSlide(index);
    } else {
      index++;
      prepareCurrentSlide(index);
    }
  };
  const prevSlide = () => {
    if (index == 0) {
      index = videoSlides.length - 1;
      prepareCurrentSlide(index);
    } else {
      index--;
      prepareCurrentSlide(index);
    }
  };

  videoDots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
      index = indexDot;
      prepareCurrentSlide(index);
    });
  });

  next.addEventListener('click', nextSlide);
  prev.addEventListener('click', prevSlide);
}
export default videoSlider;
