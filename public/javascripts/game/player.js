import EventBroker from "./eventBroker.js";

export default class Player extends EventBroker{
    constructor(id, options = {shortcuts:null, image:null, position: {x:0,y:0}}) {
        super();
        this.id = id
        if (options.image){
            this.image = options.image
        }else{
            this.image = "sheep-1"
        }
        this.position = options.position

        this.width = 25
        this.height = 25
        this.actions = {
            forward: false,
            backward: false,
            left: false,
            right: false
        }

        this.currentState = this.state()

        if (options.shortcuts){
            options.shortcuts.subscribe("shortcut.MOVE_FORWARD.start", () => this.actions.forward = true)
            options.shortcuts.subscribe("shortcut.MOVE_FORWARD.end", () => this.actions.forward = false)
            options.shortcuts.subscribe("shortcut.MOVE_BACKWARD.start", () => this.actions.backward = true)
            options.shortcuts.subscribe("shortcut.MOVE_BACKWARD.end", () => this.actions.backward = false)
            options.shortcuts.subscribe("shortcut.MOVE_LEFT.start", () => this.actions.left = true)
            options.shortcuts.subscribe("shortcut.MOVE_LEFT.end", () => this.actions.left = false)
            options.shortcuts.subscribe("shortcut.MOVE_RIGHT.start", () => this.actions.right = true)
            options.shortcuts.subscribe("shortcut.MOVE_RIGHT.end", () => this.actions.right = false)
        }


        socket.on("player-move-computed", (res) => {
            if (res.playerId === this.id){
                this.currentState = this.state()
                this.position = res.position
            }
        })
    }

    compute (){
       if (this.currentState !== this.state()){
           socket.emit("player-move", {
               actions: this.actions,
               position: this.position
           })
           this.trigger("player-move", this.position)
       }
    }

    state() {
        return JSON.stringify({
            actions: this.actions,
            position: this.position
        })
    }

    render (canvas) {
        if (canvas.getContext) {
            var ctx = canvas.getContext("2d");

            ctx.fillStyle = 'rgb(200, 0, 0)';
            ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        }
    }
}