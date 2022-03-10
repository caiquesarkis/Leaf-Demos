import { Vector2d } from '../../../Leaf.TS/dist/core/Math.js'
import { Scene, Entity, Components } from '../../../Leaf.TS/dist/index.js'

let scene = new Scene('main', window.innerWidth, window.innerHeight)
scene.addComponent(Components.Transform, 'Transform')
scene.addComponent(Components.Geometry.Box2d, 'Box2d')
scene.addComponent(Components.Text, 'Text')


let player = new Entity()
player.addComponents(['Transform', 'Box2d'])

let fpsDisplayer = new Entity()
fpsDisplayer.addComponents(['Transform', 'Text'])

scene.addEntity(fpsDisplayer)
scene.addEntity(player)

scene.addSystem((scene)=>{
    let playerTransform = scene.getEntityComponent(player.id, "Transform")
    playerTransform.scale = 60
    playerTransform.angle += 2*Math.PI/360

}, 'playerSpawn')

scene.addSystem((scene)=>{
    let textTransform = scene.getEntityComponent(fpsDisplayer.id, "Transform")
    let fpsText = scene.getEntityComponent(fpsDisplayer.id, "Text")
    fpsText.size = 18
    fpsText.value = `Fps ${scene.fps}`
    textTransform.position = new Vector2d(scene.width/3, - scene.height/2 + 30)
}, 'FpsDisplayer')
scene.start()
console.log(scene)