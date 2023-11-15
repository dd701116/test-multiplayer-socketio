import EventBroker from "./eventBroker.js";
import Player from "./player.js";
import Shortcuts from "./shortcuts.js";

export default class Board extends EventBroker{
    constructor(width, height) {
        super();
        this.config = {
            board: {
                width,
                height
            }
        }
        let shortcuts = new Shortcuts()
        this.me = new Player(socket.id, {
            shortcuts,
            image:null,
            position: {x:0, y:0}
        })
        // -> Il faut que le parametre de l'option soit facultatif

        this.others = []

        socket.on("player-join", (res) => {
            this.others = []
            console.log(res)
            res.players.forEach(p => {
                if (p.id !== socket.id){
                    this.join(new Player(p.id, {shortcuts:null, image:null, position: p.position}))
                }
            })

        })

        socket.emit("board-update")

    }

    join(player){
        this.others.push(player)
    }

    compute(){
        this.me.compute()
    }
    render (canvas) {
        canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
        this.me.render(canvas)
        this.others.forEach(o => o.render(canvas))
    }
}