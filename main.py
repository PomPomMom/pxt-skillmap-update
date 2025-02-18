# ...
scene.set_background_image(assets.image("""directions"""))
my_sprite = None
my_sprite2 = None
my_sprite3 = None
info.score()

def nextEmotion():
    my_sprite = sprites.create(assets.image("""happy"""), SpriteKind.player)
    my_sprite2 = sprites.create(assets.image("""sad"""), SpriteKind.player)
    my_sprite3 = sprites.create(assets.image("""angry"""), SpriteKind.player)