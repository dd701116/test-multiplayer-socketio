
const USERS = {}
const ROOMS = []


function playerCompute(config) {
    let {actions, position} = config
    if (actions.forward){
        position.y-=5
    }
    if (actions.backward){
        position.y+=5
    }
    if (actions.left){
        position.x-=5
    }
    if (actions.right){
        position.x+=5
    }
    if (actions.forward && actions.left){
        position.x+=1
        position.y+=1
    }
    if (actions.forward && actions.right){
        position.x-=1
        position.y+=1
    }

    if (actions.backward && actions.left){
        position.x+=1
        position.y-=1
    }
    if (actions.backward && actions.right){
        position.x-=1
        position.y-=1
    }

    position.x = Math.max(0, Math.min(position.x, 900 - 25))
    position.y = Math.max(0, Math.min(position.y, 600 - 25))

    return position
}

module.exports = {
    USERS,
    ROOMS,
    playerCompute
}