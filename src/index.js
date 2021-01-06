// index.js
import $ from 'jquery'
import './style.css'
import Game from './game.js'
import View from './hanoi-view'

const $main = $('.main');
const game = new Game(5);
const view = new View(game, $main);

// add click event to towers
$('.tower').click(function(event) {
  event.target.classList.add('startTower')
})
