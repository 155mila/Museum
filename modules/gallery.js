function gallery() {
  const pictureInnerContainer = document.querySelector(
    '.picture-inner-container'
  );

  let arrUrl = [
    'galery1',
    'galery2',
    'galery3',
    'galery4',
    'galery5',
    'galery6',
    'galery7',
    'galery8',
    'galery9',
    'galery10',
    'galery11',
    'galery12',
    'galery13',
    'galery14',
    'galery15',
  ];

  const shuffle = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  arrUrl = shuffle(arrUrl);

  function createImg(arr) {
    console.log(arr);
    arr.map((item) => {
      //console.log(item);
      const img = document.createElement('img');
      img.classList.add('gallery-img', 'anim-show');
      img.src = `assets/img/gallery/${item}.jpg`;
      img.alt = `foto picture`;
      pictureInnerContainer.append(img);
      //console.log(img);
    });
  }
  createImg(arrUrl);

  const animItems = document.querySelectorAll('.anim-show');

  window.addEventListener('scroll', animOnScroll);
  function animOnScroll(params) {
    for (let i = 0; i < animItems.length; i++) {
      const animItem = animItems[i];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        pageYOffset > animItemOffset - animItemPoint &&
        pageYOffset < animItemOffset + animItemHeight
      ) {
        animItem.classList.add('_active');
      } else {
        if (!animItem.classList.contains('gallery-img')) {
          animItem.classList.remove('_active');
        }
      }
    }

    function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }
  }

  animOnScroll();
}
export default gallery;
