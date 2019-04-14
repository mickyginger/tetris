class Tetronimo {
  constructor(name, shapes, squares, boardWidth) {
    this.interval = 0
    this.name = name
    this.shapes = shapes
    this.squares = squares
    this.boardWidth = boardWidth
    this.turns = shapes.length
    this.orientationIndex = 0
    this.shape = shapes[0]

    const start = Math.round(Math.random() * (this.boardWidth - this.shape.width))

    this.position = this.shape.indices.map(index => index + start)
    this.draw()
  }

  getLeftEdge() {
    const cols = this.position.map(index => index % this.boardWidth)
    const leftCol = Math.min(...cols)
    return this.position.filter((pos, i) => cols[i] === leftCol)
  }

  getRightEdge() {
    const cols = this.position.map(index => index % this.boardWidth)
    const rightCol = Math.max(...cols)
    return this.position.filter((pos, i) => cols[i] === rightCol)
  }

  canMoveLeft() {
    return this.position.every(index => index % this.boardWidth > 0) &&
      this.getLeftEdge().every(index => !this.squares[index - 1].className)
  }

  canMoveRight() {
    return this.position.every(index => index % this.boardWidth < this.boardWidth - 1) &&
      this.getRightEdge().every(index => !this.squares[index + 1].className)
  }

  isSettled() {
    const settled = this.position.some(index => {
      return !this.squares[index + this.boardWidth] || this.squares[index + this.boardWidth].classList.contains('settled')
    })

    if(settled) this.position.forEach(index => this.squares[index].classList.add('settled'))
    return settled
  }

  draw() {
    this.position.forEach(index => this.squares[index].classList.add('shape', this.name))
  }

  erase() {
    this.position.forEach(index => this.squares[index].classList.remove('shape', this.name))
  }

  moveLeft() {
    if(!this.canMoveLeft()) return false
    this.erase()
    this.position = this.position.map(index => index - 1)
    this.draw()
  }

  moveRight() {
    if(!this.canMoveRight()) return false
    this.erase()
    this.position = this.position.map(index => index + 1)
    this.draw()
  }

  moveDown() {
    if(this.isSettled()) return false
    this.erase()
    this.position = this.position.map(index => index + this.boardWidth)
    this.draw()
  }

  rotate() {
    this.erase()
    this.orientationIndex = this.orientationIndex === this.turns-1 ? 0 : this.orientationIndex + 1
    this.shape = this.shapes[this.orientationIndex]
    const leftMostCol = this.position.reduce((leftMost, index) => leftMost > index ? index : leftMost) % this.boardWidth
    const diff = this.boardWidth - leftMostCol - this.shape.width

    if(diff < 0) this.position = this.position.map(index => index + diff)

    this.position = this.shape.indices.map(index => index + this.position[0])
    this.draw()
  }

}

export default Tetronimo
