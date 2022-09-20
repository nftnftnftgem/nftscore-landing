(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _burgerMenu = _interopRequireDefault(require("./components/burger-menu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.
//import Accordion from './components/accordion';
_burgerMenu["default"].init();

var html = document.documentElement;
var containers = document.querySelectorAll('.js-img-container');
var imgs = document.querySelectorAll('.ranking-img');
var windowHeight = document.documentElement.clientHeight;
var imgHeight = imgs[0].offsetHeight;
imgs.forEach(function (item) {
  return item.style.top = windowHeight - item.offsetHeight + 'px';
}); // const imgWrap = document.querySelector('.img-wrap');
// const overflowContainer = document.querySelector(".js-overflow-container");
// overflowContainer.style.position = "sticky";
// overflowContainer.style.height = imgs[0].offsetHeight + "px";
// overflowContainer.style.top = windowHeight / 2 - imgs[0].offsetHeight / 2 + "px";
// const topBlock = document.querySelector(".top-block");
// const bottomBlock = document.querySelector(".bottom-block");
// imgs.forEach( item => item.style.top = windowHeight / 2 - item.offsetHeight / 2 + "px" );

if (html.clientWidth >= 1024) {
  var scrollHandler = function scrollHandler() {
    containers.forEach(function (container, index) {
      // const topCoord = container.getBoundingClientRect().top;
      var bottomCoord = container.getBoundingClientRect().top; // const opacityValue = (topCoord + windowHeight - imgHeight) * 0.001;

      var opacityValue = (bottomCoord + imgs[0].offsetHeight) * 0.001;
      var block = container.querySelector('.ranking-img'); // const borderRadiusValue = parseFloat(block.style.borderRadius || 50);
      // const borderRadiusValue = topCoord - (windowHeight - block.offsetHeight) * 1.3;

      if (index === containers.length - 1) return;
      block.style.opacity = opacityValue; // block.style.borderRadius = borderRadiusValue <= 0 ? 0 : borderRadiusValue + "%";
    });
  };

  containers.forEach(function (item, index) {
    if (index === 0) return;
    item.style.marginTop = -imgHeight + 'px';
  });
  scrollHandler();
  window.addEventListener("scroll", scrollHandler);
}

},{"./components/burger-menu":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var BURGER = document.querySelector('.js-burger-open');
var NAV = document.querySelector('.js-burger');
var BODY = document.querySelector('body');
var CLASS_OVERFLOW = 'overflow';
var CLASS_ACTIVE = 'active';
var HEADER = document.querySelector('.header');
var padding = window.innerWidth - BODY.clientWidth;

var burgerMenu = function () {
  var burgeInit = function burgeInit() {
    if (!BURGER) return;
    BURGER.addEventListener('click', function (e) {
      if (!e.currentTarget.classList.contains('active')) {
        openBurger();
      } else {
        closeBurger();
      }
    });
  };

  var openBurger = function openBurger() {
    BURGER.classList.add(CLASS_ACTIVE);
    NAV.classList.add(CLASS_ACTIVE);
    BODY.classList.add(CLASS_OVERFLOW);

    if (screen.width >= 1024) {
      BODY.style.paddingRight = "".concat(padding, "px");
      HEADER.style.paddingRight = "".concat(padding, "px");
    }
  };

  var closeBurger = function closeBurger() {
    BURGER.classList.remove(CLASS_ACTIVE);
    NAV.classList.remove(CLASS_ACTIVE);
    BODY.classList.remove(CLASS_OVERFLOW);
    BODY.style.paddingRight = 0;
    HEADER.style.paddingRight = 0;
  };

  $('a[href^="#"]').click(function () {
    var href = $.attr(this, 'href');
    closeBurger();
    $('html, body').animate({
      scrollTop: $(href).offset().top
    }, 500);
    return false;
  });

  var init = function init() {
    burgeInit();
  };

  return {
    init: init,
    closeBurger: closeBurger
  };
}();

var _default = burgerMenu;
exports["default"] = _default;

},{}]},{},[1]);
