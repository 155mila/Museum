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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_video_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/video-slider */ \"./modules/video-slider.js\");\n/* harmony import */ var _modules_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/gallery */ \"./modules/gallery.js\");\n\n\n\n\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_modules_video_slider__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_gallery__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n/*import image from './images/lazy.png';\n\nconst createImage = (src) => new Promise((res, rej) => {\n  const img = new Image();\n  img.onload = () => res(img);\n  img.onerror = rej;\n  img.src = src;\n});\n\nasync function render() {\n  const subHeader = document.createElement('h2');\n  subHeader.innerHTML = 'This elements was created by js';\n  const myImage = await createImage(image);\n  document.body.appendChild(subHeader);\n  document.body.appendChild(myImage);\n}\n\nrender();*/\n\n\n//# sourceURL=webpack://museum/./index.js?");

/***/ }),

/***/ "./modules/gallery.js":
/*!****************************!*\
  !*** ./modules/gallery.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction gallery() {\r\n  const pictureInnerContainer = document.querySelector(\r\n    '.picture-inner-container'\r\n  );\r\n\r\n  let arrUrl = [\r\n    'galery1',\r\n    'galery2',\r\n    'galery3',\r\n    'galery4',\r\n    'galery5',\r\n    'galery6',\r\n    'galery7',\r\n    'galery8',\r\n    'galery9',\r\n    'galery10',\r\n    'galery11',\r\n    'galery12',\r\n    'galery13',\r\n    'galery14',\r\n    'galery15',\r\n  ];\r\n\r\n  const shuffle = (array) => {\r\n    const newArray = [...array];\r\n    for (let i = newArray.length - 1; i > 0; i--) {\r\n      let j = Math.floor(Math.random() * (i + 1));\r\n      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];\r\n    }\r\n    return newArray;\r\n  };\r\n\r\n  arrUrl = shuffle(arrUrl);\r\n\r\n  function createImg(arr) {\r\n    console.log(arr);\r\n    arr.map((item) => {\r\n      console.log(item);\r\n      const img = document.createElement('img');\r\n      img.classList.add('gallery-img');\r\n      img.src = `assets/img/gallery/${item}.jpg`;\r\n      img.alt = `foto picture`;\r\n      pictureInnerContainer.append(img);\r\n      console.log(img);\r\n    });\r\n  }\r\n\r\n  createImg(arrUrl);\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gallery);\r\n\n\n//# sourceURL=webpack://museum/./modules/gallery.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction videoSlider() {\r\n  const prev = document.querySelector('.arrow-prev'),\r\n    next = document.querySelector('.arrow-next'),\r\n    videoSlides = document.querySelectorAll('.video-slide'),\r\n    videoDots = document.querySelectorAll('.dot');\r\n\r\n  let index = 0;\r\n\r\n  const activeVideo = (n) => {\r\n    for (let slide of videoSlides) {\r\n      slide.classList.remove('active');\r\n    }\r\n    videoSlides[n].classList.add('active');\r\n  };\r\n\r\n  const activeDot = (n) => {\r\n    for (let dot of videoDots) {\r\n      dot.classList.remove('active');\r\n    }\r\n    videoDots[n].classList.add('active');\r\n  };\r\n\r\n  const prepareCurrentSlide = (item) => {\r\n    activeVideo(item);\r\n    activeDot(item);\r\n  };\r\n\r\n  const nextSlide = () => {\r\n    if (index == videoSlides.length - 1) {\r\n      index = 0;\r\n      prepareCurrentSlide(index);\r\n    } else {\r\n      index++;\r\n      prepareCurrentSlide(index);\r\n    }\r\n  };\r\n  const prevSlide = () => {\r\n    if (index == 0) {\r\n      index = videoSlides.length - 1;\r\n      prepareCurrentSlide(index);\r\n    } else {\r\n      index--;\r\n      prepareCurrentSlide(index);\r\n    }\r\n  };\r\n\r\n  videoDots.forEach((item, indexDot) => {\r\n    item.addEventListener('click', () => {\r\n      index = indexDot;\r\n      prepareCurrentSlide(index);\r\n    });\r\n  });\r\n\r\n  next.addEventListener('click', nextSlide);\r\n  prev.addEventListener('click', prevSlide);\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (videoSlider);\r\n\n\n//# sourceURL=webpack://museum/./modules/video-slider.js?");

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