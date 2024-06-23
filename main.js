/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 215:
/***/ (() => {

// создание элемента-контейнера
const gnomeGame = document.createElement("div");
gnomeGame.className = "gnome-game";
document.body.appendChild(gnomeGame);

// добавление элементов гномов в контейнер
for (let i = 1; i <= 16; i++) {
  gnomeGame.insertAdjacentHTML("beforeEnd", `<div class="gnome" id="gnome${i}"></div>`);
}
function goGnome() {
  // хранение индекса активного гнома
  let activeGnome = 1;

  // получаем индексы на странице
  const getGnome = index => document.getElementById(`gnome${index}`);

  // деактивация гнома по индексу
  const deactivateGnome = index => getGnome(index).classList = "gnome";

  // активация гнома по индексу
  const activateGnome = index => getGnome(index).classList = "gnome gnome_has-mole";

  // рандомное перемемещние гнома по полю
  const next = () => setTimeout(() => {
    deactivateGnome(activeGnome);
    activeGnome = Math.floor(1 + Math.random() * 16);
    activateGnome(activeGnome);

    // Добавляем проверку нажатия на гнома через одну секунду после его появления
    const dead = document.getElementById("dead");
    const lost = document.getElementById("lost");
    let isClicked = false;
    setTimeout(() => {
      if (!isClicked) {
        isClicked = true;
        if (getGnome(activeGnome).classList.contains("gnome_has-mole")) {
          lost.textContent++;
          getGnome(activeGnome).classList.remove("gnome_has-mole");
        }

        // Проверяем, проиграл ли игрок
        if (lost.textContent == 5) {
          alert("Вы проиграли");
          dead.textContent = 0;
          lost.textContent = 0;
        }
      }
    }, 1000); // Задержка в одну секунду перед проверкой нажатия
    next();
  }, 1000);

  // запуск анимации
  next();
}
goGnome();

/***/ }),

/***/ 535:
/***/ (() => {

document.addEventListener("DOMContentLoaded", () => {
  const dead = document.getElementById("dead");
  for (let i = 1; i <= 16; i++) {
    const getGnome = index => document.getElementById(`gnome${index}`);
    const gnome = getGnome(i);
    gnome.addEventListener("click", event => {
      if (gnome.classList.contains("gnome_has-mole")) {
        dead.textContent++;
        event.target.classList.remove("gnome_has-mole");
      }
    });
  }
});

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./src/js/game.js
var game = __webpack_require__(215);
// EXTERNAL MODULE: ./src/js/logic.js
var logic = __webpack_require__(535);
;// CONCATENATED MODULE: ./src/img/gnome.png
const gnome_namespaceObject = __webpack_require__.p + "2dbd01ce16c0fa83cb67.png";
;// CONCATENATED MODULE: ./src/img/cursor.png
const cursor_namespaceObject = __webpack_require__.p + "2fed66b66268c5267f3c.png";
;// CONCATENATED MODULE: ./src/index.js





})();

/******/ })()
;