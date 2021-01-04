// index.js

import './style.css'
import Game from './game.js'
import './hanoi-view'

const game = new Game(5);
console.log(game.towers[0]);
