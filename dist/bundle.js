/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_video_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/video-slider */ \"./modules/video-slider.js\");\n/* harmony import */ var _modules_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/gallery */ \"./modules/gallery.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/calc */ \"./modules/calc.js\");\n/* harmony import */ var _modules_comparison__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/comparison */ \"./modules/comparison.js\");\n/* harmony import */ var _modules_mobile_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/mobile-menu */ \"./modules/mobile-menu.js\");\n\n\n\n\n\n\n\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_modules_video_slider__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_gallery__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_comparison__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_modules_mobile_menu__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n\n\n//# sourceURL=webpack://museum/./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction calcTicket() {\r\n  const inputTickets = document.querySelectorAll('.input-ticket'),\r\n    total = document.querySelector('.total span'),\r\n    btnUp = document.querySelectorAll('.btn-calc'),\r\n    numberSenior = document.querySelector('.number-senior'),\r\n    numberBasic = document.querySelector('.number-basic');\r\n\r\n  function totalPrice() {\r\n    inputTickets.forEach((item) => {\r\n      if (item.checked) {\r\n        const name = item.value;\r\n        switch (name) {\r\n          case 'permanent':\r\n            total.textContent =\r\n              20 *\r\n              (Number(numberBasic.value) +\r\n                (Number(numberSenior.value) * 50) / 100);\r\n            break;\r\n          case 'temporary':\r\n            total.textContent =\r\n              25 *\r\n              (Number(numberBasic.value) +\r\n                (Number(numberSenior.value) * 50) / 100);\r\n            break;\r\n          case 'combined':\r\n            total.textContent =\r\n              40 *\r\n              (Number(numberBasic.value) +\r\n                (Number(numberSenior.value) * 50) / 100);\r\n            break;\r\n        }\r\n      }\r\n    });\r\n  }\r\n\r\n  btnUp.forEach((item) => {\r\n    item.addEventListener('click', () => {\r\n      totalPrice();\r\n    });\r\n  });\r\n\r\n  inputTickets.forEach((item) => {\r\n    item.addEventListener('input', () => totalPrice());\r\n  });\r\n\r\n  totalPrice();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calcTicket);\r\n\n\n//# sourceURL=webpack://museum/./modules/calc.js?");

/***/ }),

/***/ "./modules/comparison.js":
/*!*******************************!*\
  !*** ./modules/comparison.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction initComparisons() {\r\n  var x, i;\r\n  x = document.querySelectorAll('.img-comp-overlay');\r\n  for (i = 0; i < x.length; i++) {\r\n    compareImages(x[i]);\r\n  }\r\n  function compareImages(img) {\r\n    var slider,\r\n      img,\r\n      clicked = 0,\r\n      w,\r\n      h;\r\n\r\n    w = img.offsetWidth;\r\n    h = img.offsetHeight;\r\n\r\n    img.style.width = w / 2 + 'px';\r\n    img.style.borderRight = '2px solid #fff';\r\n\r\n    slider = document.createElement('DIV');\r\n    slider.setAttribute('class', 'img-comp-slider');\r\n\r\n    img.parentElement.insertBefore(slider, img);\r\n\r\n    slider.style.top = h / 2 - slider.offsetHeight / 2 + 'px';\r\n    slider.style.left = w / 2 - slider.offsetWidth / 2 + 'px';\r\n\r\n    slider.addEventListener('mousedown', slideReady);\r\n\r\n    window.addEventListener('mouseup', slideFinish);\r\n\r\n    slider.addEventListener('touchstart', slideReady);\r\n\r\n    window.addEventListener('touchstop', slideFinish);\r\n    function slideReady(e) {\r\n      e.preventDefault();\r\n\r\n      clicked = 1;\r\n\r\n      window.addEventListener('mousemove', slideMove);\r\n      window.addEventListener('touchmove', slideMove);\r\n    }\r\n    function slideFinish() {\r\n      clicked = 0;\r\n    }\r\n    function slideMove(e) {\r\n      var pos;\r\n      if (clicked == 0) return false;\r\n      pos = getCursorPos(e);\r\n      if (pos < 0) pos = 0;\r\n      if (pos > w) pos = w;\r\n      slide(pos);\r\n    }\r\n    function getCursorPos(e) {\r\n      var a,\r\n        x = 0;\r\n      e = e || window.event;\r\n      a = img.getBoundingClientRect();\r\n      x = e.pageX - a.left;\r\n      x = x - window.pageXOffset;\r\n      return x;\r\n    }\r\n    function slide(x) {\r\n      img.style.width = x + 'px';\r\n      slider.style.left = img.offsetWidth - slider.offsetWidth / 2 + 'px';\r\n    }\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initComparisons);\r\n\n\n//# sourceURL=webpack://museum/./modules/comparison.js?");

/***/ }),

/***/ "./modules/gallery.js":
/*!****************************!*\
  !*** ./modules/gallery.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction gallery() {\r\n  const pictureInnerContainer = document.querySelector(\r\n    '.picture-inner-container'\r\n  );\r\n\r\n  let arrUrl = [\r\n    'galery1',\r\n    'galery2',\r\n    'galery3',\r\n    'galery4',\r\n    'galery5',\r\n    'galery6',\r\n    'galery7',\r\n    'galery8',\r\n    'galery9',\r\n    'galery10',\r\n    'galery11',\r\n    'galery12',\r\n    'galery13',\r\n    'galery14',\r\n    'galery15',\r\n  ];\r\n\r\n  const shuffle = (array) => {\r\n    const newArray = [...array];\r\n    for (let i = newArray.length - 1; i > 0; i--) {\r\n      let j = Math.floor(Math.random() * (i + 1));\r\n      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];\r\n    }\r\n    return newArray;\r\n  };\r\n\r\n  arrUrl = shuffle(arrUrl);\r\n\r\n  function createImg(arr) {\r\n    arr.map((item) => {\r\n      const img = document.createElement('img');\r\n      img.classList.add('gallery-img', 'anim-show');\r\n      img.src = `assets/img/gallery/${item}.jpg`;\r\n      img.alt = `foto picture`;\r\n      pictureInnerContainer.append(img);\r\n    });\r\n  }\r\n  createImg(arrUrl);\r\n\r\n  const animItems = document.querySelectorAll('.anim-show');\r\n\r\n  window.addEventListener('scroll', animOnScroll);\r\n  function animOnScroll(params) {\r\n    for (let i = 0; i < animItems.length; i++) {\r\n      const animItem = animItems[i];\r\n      const animItemHeight = animItem.offsetHeight;\r\n      const animItemOffset = offset(animItem).top;\r\n      const animStart = 4;\r\n\r\n      let animItemPoint = window.innerHeight - animItemHeight / animStart;\r\n\r\n      if (animItemHeight > window.innerHeight) {\r\n        animItemPoint = window.innerHeight - window.innerHeight / animStart;\r\n      }\r\n\r\n      if (\r\n        pageYOffset > animItemOffset - animItemPoint &&\r\n        pageYOffset < animItemOffset + animItemHeight\r\n      ) {\r\n        animItem.classList.add('_active');\r\n      } else {\r\n        if (!animItem.classList.contains('gallery-img')) {\r\n          animItem.classList.remove('_active');\r\n        }\r\n      }\r\n    }\r\n\r\n    function offset(el) {\r\n      const rect = el.getBoundingClientRect(),\r\n        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,\r\n        scrollTop = window.pageYOffset || document.documentElement.scrollTop;\r\n      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };\r\n    }\r\n  }\r\n\r\n  animOnScroll();\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gallery);\r\n\n\n//# sourceURL=webpack://museum/./modules/gallery.js?");

/***/ }),

/***/ "./modules/mobile-menu.js":
/*!********************************!*\
  !*** ./modules/mobile-menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction mobileMenu() {\r\n  const toggleButton = document.querySelector('.toggle-menu'),\r\n    navBar = document.querySelector('.nav-bar'),\r\n    welcomeContent = document.querySelector('.welcome-content');\r\n\r\n  function changeMenu() {\r\n    navBar.classList.toggle('toggle');\r\n    toggleButton.classList.toggle('change');\r\n    navBar.classList.toggle('show-nav');\r\n    welcomeContent.classList.toggle('hide');\r\n    document.body.classList.toggle('no-scroll');\r\n    document.body.classList.toggle('open');\r\n  }\r\n\r\n  document.addEventListener('click', (e) => {\r\n    const target = e.target,\r\n      menuNav = target == navBar || target.closest('.nav-bar'),\r\n      btnNav = target.closest('.toggle-menu'),\r\n      navActive = navBar.classList.contains('toggle', 'show-nav');\r\n\r\n    if (!menuNav && !btnNav && navActive) {\r\n      changeMenu();\r\n    }\r\n  });\r\n\r\n  toggleButton.addEventListener('click', changeMenu);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mobileMenu);\r\n\n\n//# sourceURL=webpack://museum/./modules/mobile-menu.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction welcomeSlider() {\r\n  const prev = document.querySelector('.arrow.prev'),\r\n    next = document.querySelector('.arrow.next'),\r\n    current = document.querySelector('#current'),\r\n    total = document.querySelector('#total'),\r\n    slides = document.querySelectorAll('.slide'),\r\n    dots = document.querySelectorAll('.dots-item');\r\n\r\n  let index = 0;\r\n\r\n  if (slides.length < 10) {\r\n    total.textContent = `0${slides.length}`;\r\n    current.textContent = `0${index + 1}`;\r\n  } else {\r\n    total.textContent = slides.length;\r\n    current.textContent = index + 1;\r\n  }\r\n\r\n  const addZero = () => {\r\n    if (slides.length < 10) {\r\n      current.textContent = `0${index + 1}`;\r\n    } else {\r\n      current.textContent = index + 1;\r\n    }\r\n  };\r\n\r\n  const activeSlide = (n) => {\r\n    for (let slide of slides) {\r\n      slide.classList.remove('active', 'fade');\r\n    }\r\n    slides[n].classList.add('active', 'fade');\r\n  };\r\n\r\n  const activeDot = (n) => {\r\n    for (let dot of dots) {\r\n      dot.classList.remove('active');\r\n    }\r\n    dots[n].classList.add('active');\r\n  };\r\n\r\n  const prepareCurrentSlide = (item) => {\r\n    activeSlide(item);\r\n    activeDot(item);\r\n  };\r\n\r\n  const nextSlide = () => {\r\n    if (index == slides.length - 1) {\r\n      index = 0;\r\n      prepareCurrentSlide(index);\r\n      addZero();\r\n    } else {\r\n      index++;\r\n      prepareCurrentSlide(index);\r\n      addZero();\r\n    }\r\n  };\r\n  const prevSlide = () => {\r\n    if (index == 0) {\r\n      index = slides.length - 1;\r\n      prepareCurrentSlide(index);\r\n      addZero();\r\n    } else {\r\n      index--;\r\n      prepareCurrentSlide(index);\r\n      addZero();\r\n    }\r\n  };\r\n\r\n  dots.forEach((item, indexDot) => {\r\n    item.addEventListener('click', () => {\r\n      index = indexDot;\r\n      prepareCurrentSlide(index);\r\n    });\r\n  });\r\n\r\n  next.addEventListener('click', nextSlide);\r\n  prev.addEventListener('click', prevSlide);\r\n\r\n  setInterval(nextSlide, 2500);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (welcomeSlider);\r\n\n\n//# sourceURL=webpack://museum/./modules/slider.js?");

/***/ }),

/***/ "./modules/video-slider.js":
/*!*********************************!*\
  !*** ./modules/video-slider.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction videoSlider() {\r\n  const prev = document.querySelector('.arrow-prev'),\r\n    next = document.querySelector('.arrow-next'),\r\n    videoSlides = document.querySelectorAll('.video-slide'),\r\n    videoDots = document.querySelectorAll('.dot');\r\n\r\n  let index = 0;\r\n\r\n  const activeVideo = (n) => {\r\n    console.log(n);\r\n    for (let slide of videoSlides) {\r\n      slide.classList.remove('active');\r\n    }\r\n    videoSlides[n].classList.add('active');\r\n  };\r\n\r\n  const activeVideoDot = (n) => {\r\n    console.log(n);\r\n    for (let dot of videoDots) {\r\n      dot.classList.remove('active');\r\n    }\r\n    videoDots[n].classList.add('active');\r\n  };\r\n\r\n  const prepareVideoCurrentSlide = (item) => {\r\n    activeVideo(item);\r\n    activeVideoDot(item);\r\n  };\r\n\r\n  const nextVideoSlide = () => {\r\n    console.log(videoSlides.length);\r\n    if (index == videoSlides.length - 1) {\r\n      index = 0;\r\n      prepareVideoCurrentSlide(index);\r\n    } else {\r\n      index++;\r\n      prepareVideoCurrentSlide(index);\r\n    }\r\n  };\r\n  const prevVideoSlide = () => {\r\n    if (index == 0) {\r\n      index = videoSlides.length - 1;\r\n      prepareVideoCurrentSlide(index);\r\n    } else {\r\n      index--;\r\n      prepareVideoCurrentSlide(index);\r\n    }\r\n  };\r\n\r\n  videoDots.forEach((item, indexDot) => {\r\n    item.addEventListener('click', () => {\r\n      index = indexDot;\r\n      prepareVideoCurrentSlide(index);\r\n    });\r\n  });\r\n\r\n  next.addEventListener('click', nextVideoSlide);\r\n  prev.addEventListener('click', prevVideoSlide);\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (videoSlider);\r\n\n\n//# sourceURL=webpack://museum/./modules/video-slider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;