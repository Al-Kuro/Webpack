import "./index.css";
//import css from "./style.css";
import imgJS from './assets/js-pick.jpg';

console.log('Hello World');

const $h1Elem = document.createElement('h1');
$h1Elem.textContent = 'I love JavaScript';
const $imgElem = document.createElement('img');
$imgElem.classList.add('image');
$imgElem.src = imgJS;
document.body.append($h1Elem);
document.body.append($imgElem);