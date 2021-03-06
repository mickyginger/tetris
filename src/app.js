import './style.css'

import { createElement } from './lib/helpers'
import Game from './lib/Game'

const width = 10
const board = document.querySelector('.board')
const level = document.querySelector('.level')
const lines = document.querySelector('.lines')
const score = document.querySelector('.score')
const next = document.querySelector('.next')
const startBtn = document.querySelector('button')
const squares = []
const nextSquares = []

for(let i = 0; i < Math.floor(width * width * 2.2); i++) {
  const square = createElement('div')
  board.appendChild(square)
  squares.push(square)
}


for(let i = 0; i < 16; i++) {
  const square = createElement('div')
  next.appendChild(square)
  nextSquares.push(square)
}

const game = new Game(squares, width, level, lines, score, nextSquares)
startBtn.addEventListener('click', game.start)
