function videoSlider() {
  const prev = document.querySelector('.arrow-prev'),
    next = document.querySelector('.arrow-next'),
    videoSlides = document.querySelectorAll('.video-slide'),
    videoDots = document.querySelectorAll('.dot');

  let index = 0;

  const activeVideo = (n) => {
    console.log(n);
    for (let slide of videoSlides) {
      slide.classList.remove('active');
    }
    videoSlides[n].classList.add('active');
  };

  const activeVideoDot = (n) => {
    console.log(n);
    for (let dot of videoDots) {
      dot.classList.remove('active');
    }
    videoDots[n].classList.add('active');
  };

  const prepareVideoCurrentSlide = (item) => {
    activeVideo(item);
    activeVideoDot(item);
  };

  const nextVideoSlide = () => {
    console.log(videoSlides.length);
    if (index == videoSlides.length - 1) {
      index = 0;
      prepareVideoCurrentSlide(index);
    } else {
      index++;
      prepareVideoCurrentSlide(index);
    }
  };
  const prevVideoSlide = () => {
    if (index == 0) {
      index = videoSlides.length - 1;
      prepareVideoCurrentSlide(index);
    } else {
      index--;
      prepareVideoCurrentSlide(index);
    }
  };

  videoDots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
      index = indexDot;
      prepareVideoCurrentSlide(index);
    });
  });

  next.addEventListener('click', nextVideoSlide);
  prev.addEventListener('click', prevVideoSlide);
}
export default videoSlider;
