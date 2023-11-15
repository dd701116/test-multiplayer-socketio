import EventBroker from "./eventBroker.js";

export default class Shortcuts extends EventBroker{
    constructor(initListeners = true) {
        super()
        this.inputs = {
            MOVE_FORWARD: {
                code: "KeyW",
                released: true
            },
            MOVE_BACKWARD: {
                code: "KeyS",
                released: true
            },
            MOVE_LEFT: {
                code: "KeyA",
                released: true
            },
            MOVE_RIGHT: {
                code: "KeyD",
                released: true
            },
        }

        if (initListeners){
            //  KEY DOWN
            document.addEventListener("keydown", (e) => {

                if (e.code == this.inputs.MOVE_FORWARD.code){
                    this.trigger("shortcut.MOVE_FORWARD.start")
                    this.inputs.MOVE_FORWARD.released = false
                } else if (e.code == this.inputs.MOVE_BACKWARD.code){
                    this.trigger("shortcut.MOVE_BACKWARD.start")
                    this.inputs.MOVE_BACKWARD.released = false
                } else if (e.code == this.inputs.MOVE_LEFT.code){
                    this.trigger("shortcut.MOVE_LEFT.start")
                    this.inputs.MOVE_LEFT.released = false
                } else if (e.code == this.inputs.MOVE_RIGHT.code){
                    this.trigger("shortcut.MOVE_RIGHT.start")
                    this.inputs.MOVE_RIGHT.released = false
                }
            })

            //  KEY UP
            document.addEventListener("keyup", (e) => {
                if (e.code == this.inputs.MOVE_FORWARD.code){
                    this.trigger("shortcut.MOVE_FORWARD.end")
                    this.inputs.MOVE_FORWARD.released = true
                } else if (e.code == this.inputs.MOVE_BACKWARD.code){
                    this.trigger("shortcut.MOVE_BACKWARD.end")
                    this.inputs.MOVE_BACKWARD.released = true
                } else if (e.code == this.inputs.MOVE_LEFT.code){
                    this.trigger("shortcut.MOVE_LEFT.end")
                    this.inputs.MOVE_LEFT.released = true
                } else if (e.code == this.inputs.MOVE_RIGHT.code){
                    this.trigger("shortcut.MOVE_RIGHT.end")
                    this.inputs.MOVE_RIGHT.released = true
                }
            })
        }

    }

}