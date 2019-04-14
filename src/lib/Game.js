import Tetronimo from './Tetronimo'
import { shapes } from './helpers'

class Game {
  constructor(squares, boardWidth, levelElem, linesElem, scoreElem, nextSquares) {
    this.squares = squares
    this.boardWidth = boardWidth
    this.levelElem = levelElem
    this.linesElem = linesElem
    this.scoreElem = scoreElem
    this.nextSquares = nextSquares
    this.tetronimo = null
    this.interval = 0
    this.shapes = shapes
    this.nextTetronimo = this.generateRandomTetronimo(this.nextSquares, 4)
    this.score = 0
    this.lines = 0
    this.level = 0
    this.gameOver = false
    this.possibleScores = {
      1: 40,
      2: 100,
      3: 300,
      4: 1200
    }

    this.audio = new Audio('assets/theme.mp3')
    this.audio.loop = true

    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)

    this.handleKeydown = this.handleKeydown.bind(this)
    document.addEventListener('keydown', this.handleKeydown)
  }

  generateTetronimo(name, squares, width) {
    const shape = this.shapes[name](width)
    return new Tetronimo(name, shape, squares, width, this.stop)
  }

  generateRandomTetronimo(squares, width) {
    const names = Object.keys(this.shapes)
    const name = names[Math.floor(Math.random() * names.length)]
    return this.generateTetronimo(name, squares, width)
  }

  updateScore(amount) {
    this.score = amount
    this.scoreElem.innerText = this.score
  }

  updateLines(amount) {
    this.lines = amount
    this.linesElem.innerText = this.lines
  }

  updateLevel() {
    if(this.level === 9) return false
    this.level = Math.floor(this.lines / 10)
    this.levelElem.innerText = this.level
  }

  animate() {
    if(this.gameOver) return false
    this.interval = setTimeout(() => {
      this.tetronimo.moveDown()
      if(this.tetronimo.isSettled()) {
        clearInterval(this.interval)
        this.clearLines()
        return this.drop()
      }
      this.animate()
    }, 750 - (this.level * 50))
  }

  drop() {
    this.tetronimo = this.generateTetronimo(this.nextTetronimo.name, this.squares, this.boardWidth)
    this.clearNext()
    this.nextTetronimo = this.generateRandomTetronimo(this.nextSquares, 4)
    this.animate()
  }

  start() {
    this.gameOver = false
    this.audio.currentTime = 0
    this.audio.play()
    this.squares[0].parentNode.classList.remove('game-over')
    this.squares.forEach(square => square.removeAttribute('class'))
    this.updateLines(0)
    this.updateScore(0)
    this.updateLevel()
    this.drop()
  }

  stop() {
    this.audio.pause()
    this.squares[0].parentNode.classList.add('game-over')
    this.gameOver = true
    clearTimeout(this.interval)
  }

  clearNext() {
    this.nextSquares.forEach(square => square.removeAttribute('class'))
  }

  clearLines() {
    // get each line in turn
    let lineIndex = (Math.floor(this.squares.length / this.boardWidth) - 1) * this.boardWidth
    let completedLines = 0

    while(lineIndex > 0) {
      const line = this.squares.slice(lineIndex, lineIndex + this.boardWidth)
      if(line.every(square => !square.className)) break
      // check if they are complete
      if(line.every(square => square.className)) {
        completedLines += 1
        // if so, clear them and prepend them to the board
        line.forEach(square => {
          square.removeAttribute('class')
          square.parentNode.insertBefore(square, this.squares[0])
        })
        // splice that section from the squares array and move them to the start of the array
        const removedLine = this.squares.splice(lineIndex, this.boardWidth)
        this.squares = removedLine.concat(this.squares)
      } else {
        lineIndex -= this.boardWidth
      }
    }

    if(completedLines) {
      this.updateLines(this.lines + completedLines)
      this.updateScore(this.score + this.possibleScores[completedLines] * (this.level + 1))
      this.updateLevel()
    }
  }

  handleKeydown(e) {
    if(![37, 39, 40, 32].includes(e.keyCode) || this.tetronimo.isSettled()) return false

    switch(e.keyCode) {
      case 37: this.tetronimo.moveLeft()
        break
      case 39: this.tetronimo.moveRight()
        break
      case 40: this.tetronimo.moveDown()
        break
      case 32: this.tetronimo.rotate()
        break
    }
  }
}

export default Game
