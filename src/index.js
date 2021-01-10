// index.js
import $ from 'jquery'
import './style.css'
import Game from './game.js'
import View from './hanoi-view'

const $main = $('.main');
const $buttons = $('.buttons')
const heightInput = $('<input>').addClass('heightInput')
const heightInputButton = $('<button>').addClass('heightInputButton')
heightInputButton.text('input game height')
$buttons.append(heightInput)
$buttons.append(heightInputButton)

heightInputButton.click(function(event) {
  const game = new Game(parseInt(heightInput.val()))
  const view = new View(game, $main);
  $('ul.tower').click(function(event) {
    view.towerSelection(event)
  })
})
// const game = new Game(3);
// const view = new View(game, $main);
// add click event to towers
