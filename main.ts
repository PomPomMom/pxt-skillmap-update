//  ...
scene.setBackgroundImage(assets.image`directions`)
let my_sprite = null
let my_sprite2 = null
let my_sprite3 = null
info.score()
function nextEmotion() {
    let my_sprite = sprites.create(assets.image`happy`, SpriteKind.Player)
    let my_sprite2 = sprites.create(assets.image`sad`, SpriteKind.Player)
    let my_sprite3 = sprites.create(assets.image`angry`, SpriteKind.Player)
}

