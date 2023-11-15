import Board from "../game/board.js";

class GameBoard extends HTMLElement{
    constructor() {
        super();

        this.MAX_WIDTH = 900
        this.MAX_HEIGHT = 600

        let canvas = document.createElement("canvas")
        canvas.id = "game-board"
        canvas.width = this.MAX_WIDTH
        canvas.height = this.MAX_HEIGHT

        this.started = true
        this.board = new Board(this.MAX_WIDTH, this.MAX_HEIGHT)
        this.append(canvas)

        this.interval_compute = setInterval(() => this.board.compute(), 1000/60)
        this.interval_render = setInterval(() => this.board.render(canvas), 1000/60)

    }

}

customElements.define("game-board", GameBoard)

