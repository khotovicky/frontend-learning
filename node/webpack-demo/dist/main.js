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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _interpretator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interpretator */ \"./src/interpretator.js\");\n\n\nconst interpretatorInput = document.getElementById(\"interpretator_input\")\nconst interpretatorButton = document.getElementById(\"interpretator_button\")\nconst history = document.querySelector('#history')\n\nfunction createHistoryElement(command, result) {\n    const element = document.createElement(\"li\")\n    element.innerHTML = `${command}: ${result}`\n    return element\n}\n\ninterpretatorButton.addEventListener(\"click\", () => {\n    const command = interpretatorInput.value\n    const result = (0,_interpretator__WEBPACK_IMPORTED_MODULE_0__.perfomCommand)(command)\n    interpretatorInput.value = \"\"\n    interpretatorInput.focus()\n    console.log(`${command}: ${result}`)\n    history.appendChild(createHistoryElement(command, result))\n})\n\n(function IIFE(){\n    console.log(\"Hello!\")\n  })();\n\n\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/interpretator.js":
/*!******************************!*\
  !*** ./src/interpretator.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"perfomCommand\": () => (/* binding */ perfomCommand)\n/* harmony export */ });\n/* harmony import */ var _phoneBook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./phoneBook */ \"./src/phoneBook.js\");\n\n \nconst phoneBook = (0,_phoneBook__WEBPACK_IMPORTED_MODULE_0__.createPhoneBook)()\n\nfunction perfomCommand(command) {\n    if (command === null) {\n        return \"Invalid\"\n    }\n    const tokens = command.split(\" \")\n    const op = tokens[0]\n    if (op === 'get') {\n        return phoneBook.getNumber(tokens[1]) \n    } else if (op === 'set') {\n        return phoneBook.setNumber(tokens[1], tokens[2])\n    } else if (op === 'delete'){\n        return phoneBook.deleteNumber(tokens[1])\n    } else {\n        return \"Invalid\"\n    }\n}\n\nwhile (true) {\n    const a = prompt(\"Введите команду\") // get Jura // set Vitya 8327489327498 // delete Kostja // exit \n    if (a === 'exit') {\n        break\n    }\n    alert(perfomCommand(a))\n}\n\n\n//# sourceURL=webpack://webpack-demo/./src/interpretator.js?");

/***/ }),

/***/ "./src/phoneBook.js":
/*!**************************!*\
  !*** ./src/phoneBook.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createPhoneBook\": () => (/* binding */ createPhoneBook)\n/* harmony export */ });\nfunction createPhoneBook(initialList = {}) {\n    const phoneBook = initialList\n\n    function getNumber(name) {\n        if (!name) {\n            return 'invalid'\n        }\n        if (!phoneBook[name]) {\n            return 'niema imienia'\n        }\n        return phoneBook[name]\n    }\n    \n    function setNumber(name, number) {\n        if (!name || !number) {\n            return 'invalid'\n        }\n        phoneBook[name] = number\n        return 'imię dodano'\n    }\n    \n    function deleteNumber(name) {\n        if (!name) {\n            return 'invalid'\n        }\n        if (!phoneBook[name]) {\n            return 'niema imienia'\n        }\n        delete phoneBook[name]\n        return \"imię usunięto\"\n    }\n    return {\n        getNumber,\n        setNumber,\n        deleteNumber\n    }\n}\n\n\n//# sourceURL=webpack://webpack-demo/./src/phoneBook.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;