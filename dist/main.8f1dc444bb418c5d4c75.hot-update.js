/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateyatunes"]("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_musicPlayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/musicPlayer */ \"./src/module/musicPlayer.js\");\n/* harmony import */ var _module_videoPlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/videoPlayer */ \"./src/module/videoPlayer.js\");\n/* harmony import */ var _module_radioPlayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/radioPlayer */ \"./src/module/radioPlayer.js\");\n\n\n\nvar playerBtn = document.querySelectorAll('.player-btn');\nvar playerBlock = document.querySelectorAll('.player-block');\nvar temp = document.querySelector('.temp');\nvar stopVideoPlayer = (0,_module_videoPlayer__WEBPACK_IMPORTED_MODULE_1__.videoPlayerInit)();\nvar stopMusicPlayer = (0,_module_musicPlayer__WEBPACK_IMPORTED_MODULE_0__.musicPlayerInit)();\nvar stopRadioPlayer = (0,_module_radioPlayer__WEBPACK_IMPORTED_MODULE_2__.radioPlayerInit)();\n\nvar deactivationPlayer = function deactivationPlayer() {\n  temp.style.display = 'none';\n  playerBtn.forEach(function (item) {\n    return item.classList.remove('active');\n  });\n  playerBlock.forEach(function (item) {\n    return item.classList.remove('active');\n  });\n  stopMusicPlayer();\n  stopRadioPlayer();\n  stopVideoPlayer();\n};\n\nplayerBtn.forEach(function (btn, i) {\n  return btn.addEventListener('click', function () {\n    deactivationPlayer();\n    btn.classList.add('active');\n    playerBlock[i].classList.add('active');\n  });\n});\n(0,_module_musicPlayer__WEBPACK_IMPORTED_MODULE_0__.musicPlayerInit)();\n(0,_module_videoPlayer__WEBPACK_IMPORTED_MODULE_1__.videoPlayerInit)();\n(0,_module_radioPlayer__WEBPACK_IMPORTED_MODULE_2__.radioPlayerInit)();\n\n//# sourceURL=webpack://yatunes/./src/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "af11a362b17f0788311e"
/******/ 	})();
/******/ 	
/******/ }
);