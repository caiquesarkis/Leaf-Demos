import { Vector2d } from '../../../Leaf.TS/dist/core/Math.js'
import { Scene, Entity, Components } from '../../../Leaf.TS/dist/index.js'

let scene = new Scene('main', window.innerWidth, window.innerHeight)
scene.addComponent(Components.Transform, 'Transform')
scene.addComponent(Components.Geometry.Box2d, 'Box2d')


let player = new Entity()
player.addComponents(['Transform', 'Box2d'])
scene.addEntity(player)


let player2 = new Entity()
player2.addComponents(['Transform', 'Box2d'])
scene.addEntity(player2)

scene.addSystem((scene)=>{
    let playerTransformPool = scene.get("Transform")
    for(let ID in playerTransformPool){
        let entity = playerTransformPool[ID]
        entity.position = new Vector2d((Math.random()-0.5)*100, (Math.random()-0.5)*100)
        entity.scale =  20*Math.cos(entity.angle)
        entity.angle += 2*Math.PI/90
    }
   }
, 'playerSpawn')

scene.start()
console.log(scene)