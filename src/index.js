// index.js
import $ from 'jquery'
import './style.css'
import Game from './game.js'
import View from './hanoi-view'

const $main = $('.main');
const $buttons = $('.buttons')
const heightInput = $('<input>')
heightInput.addClass('heightInput')
const heightInputButton = $('<button>')
heightInputButton.addClass('heightInputButton')
heightInputButton.text('input game height')
$buttons.append(heightInput)
$buttons.append(heightInputButton)

heightInputButton.click(function(event) {
  const game = new Game(parseInt(heightInput.val()))
  $main.empty()
  const view = new View(game, $main);
  $('ul.tower').click(function(event) {
    view.towerSelection(event)
  })
})
