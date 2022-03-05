import { Scene, Entity, Position } from '../../../../Leaf.TS/dist/index.js'

class Traits{ 
    constructor(){
        this.traits = []
    }
}

let scene = new Scene();
scene.addComponent(Position, 'Position')
scene.addComponent(Traits, 'Traits')

let player = new Entity();
player.addComponents(['Position', 'Traits'])
scene.addEntity(player)

// Systems
scene.addSystem((scene) => {
    let position = scene.get('Position')
    for (let id in position) {
        position[id].x += 1
    }
}
, 'knematics')

scene.addSystem((scene)=>{
    let traits = scene.get('Traits')
    let position = scene.get('Position')
    for (let trait in traits){
        if(position[trait].x > 0){
            traits[trait].traits.push("Right looser")
        }else{
            traits[trait].traits.push("Left god")
        }
    }
   console.log(traits)
}, 'traitByPosition')

console.log("Scene: ",scene)
scene.run()
console.log("Scene: ",scene)


