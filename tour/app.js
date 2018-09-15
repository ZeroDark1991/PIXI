let {
  Application,
  Rectangle,
  Sprite,
  loader,
  utils
} = PIXI

let {
  resources
} = loader

let {
  TextureCache
} = utils

let app = new Application({
  width: document.body.clientWidth,
  height: window.innerHeight,
  antialias: true,    // default: false
  transparent: false, // default: false
  resolution: 1       // default: 1
})

document.body.appendChild(app.view)
window.addEventListener('resize', () => {
  renderer.autoResize = true
  renderer.resize(document.body.clientWidth, window.innerHeight)
}, false)

let { renderer } = app
renderer.backgroundColor = 0xdddddd

PIXI.loader
  .add('images/tileset.png')
  .on('progress', loadProgressHandler)
  .load(setup)

// function setup() {
//   let cat = new Sprite(resources['images/cat.png'].texture)

//   cat.position.set(100, 100)
//   // cat.scale.set(1.2, 1.2)
//   // cat.anchor.set(0.5, 0.5)
//   cat.pivot.set(32, 32)
//   cat.rotation = Math.PI

//   app.stage.addChild(cat)
// }

function setup() {
  let texture = TextureCache['images/tileset.png']
  let rectangle = new Rectangle(192, 128, 64, 64)
  texture.frame = rectangle

  let rocket = new Sprite(texture)

  app.stage.addChild(rocket)
}
function loadProgressHandler(loader, resources) {
  console.log("loading:" + resources.url)
  console.log('progress:' + loader.progress + '%')
}