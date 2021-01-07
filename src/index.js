// index.js
import $ from 'jquery'
import './style.css'
import Game from './game.js'
import View from './hanoi-view'

const $main = $('.main');
const $buttons = $('.buttons')
const game = new Game(5);
const view = new View(game, $main);

// add click event to towers
$('ul.tower').click(function(event) {
  view.towerSelection(event)
})
