namespace SpriteKind {
    export const Background = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy(effects.warmRadial, 500)
    Lives += -1
    scene.cameraShake(4, 500)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprite.destroy(effects.confetti, 500)
    info.changeScoreBy(5)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 7 5 7 5 7 5 7 . . . . 
. . . . . 5 7 5 7 5 7 5 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, mySprite, 150, 0)
})
let Stars: Sprite = null
let Obstacle: Sprite = null
let Choice = 0
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . f f f f . . . . . . . . . . . . . . . 
. . . f f f 2 2 f f f . . . . . . . . . . . . . 
. . f f f 2 2 2 2 f f f . . . . . . . . . . . . 
. f f f e e e e e e f f f . . . . . . . . . . . 
. f f e 2 2 2 2 2 2 e e f . . . . . . . . . . . 
. f e 2 f f f f f f 2 e f . . . . . . . . . . . 
. f f f f e e e e f f f f . . . . . . . . . . . 
f f e f b f 4 4 f b f e f f . . . . . . . . . . 
f e e 4 1 f d d f 1 4 e e f . . . . . . . . . . 
. f f f f d d d d d e e f . . . . . . . . . . . 
f d d d d f 4 4 4 e e f . . . . . . . . . . . . 
f b b b b f 2 2 2 2 f 4 e . . . . . . . . . . . 
f b b b b f 2 2 2 2 f d 4 . . . . . . . . . . . 
. f c c f 4 5 5 4 4 f 4 4 . . . . . . . . . . . 
. . f f f f f f f f . . . . . . . . . . . . . . 
. . . . f f . . f f . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite, 75, 150)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
mySprite.setPosition(0, 60)
let Lives = 3
info.setScore(0)
game.onUpdateInterval(2000, function () {
    Choice = Math.randomRange(1, 2)
    if (Choice == 1) {
        Obstacle = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . e e e e e e e e 2 . . . 
. . . e e d d d d d d e e 2 2 . 
. . e e d d d d d e d d e e 4 2 
. . e d d d d d d d d d e e 5 4 
. . e e d d e d d d d d e 4 4 5 
. . . e e d d d d d d e e 4 4 2 
. . . . e e d d d d e e 4 2 2 . 
. . . . . . e e e e e 2 2 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, -30, 0)
    } else if (Choice == 2) {
        Obstacle = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . e e e e . . . . . 
. . . . . . e d d d e . . . . . 
. . . . . . e d d d e e 2 2 . . 
. . . . e e e d e d e e 4 4 2 2 
. . . e e d d d d d d e e 4 4 2 
. . e e d d d d d e d d e e 4 5 
. . e d d d d d d d d d e e 4 4 
. . e e d d e d d d d d e 4 5 4 
. . . e e d d d d d d e e 4 2 2 
. . . . e d d d d d e e 2 2 . . 
. . . . e d d e e e e 2 . . . . 
. . . . e e d e e . . . . . . . 
. . . . e d e e . . . . . . . . 
. . . . . e e . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, -20, 0)
    }
    Obstacle.y = Math.randomRange(10, scene.screenHeight())
    Obstacle.setKind(SpriteKind.Enemy)
    info.changeScoreBy(2)
})
game.onUpdate(function () {
    if (Lives <= 0) {
        game.over(false)
    }
})
game.onUpdate(function () {
    if (Math.percentChance(25)) {
        Stars = sprites.createProjectileFromSide(img`
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . 1 1 . . . 
. . . 1 1 . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
`, Math.randomRange(-100, -10), 0)
        Stars.setPosition(scene.screenWidth(), Math.randomRange(0, scene.screenHeight()))
        Stars.setKind(SpriteKind.Background)
    }
})
