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
      console.log(item);
      const img = document.createElement('img');
      img.classList.add('gallery-img');
      img.src = `assets/img/gallery/${item}.jpg`;
      img.alt = `foto picture`;
      pictureInnerContainer.append(img);
      console.log(img);
    });
  }

  createImg(arrUrl);
}
export default gallery;
