import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

loadSprite("kartka","balwan.png")



add([
    sprite("kartka")
])
loadSprite("mike", "Bez nazwy.png")

const mike = add([
    sprite("mike"),
    pos(235,40)
])

onUpdate(()=>{
    
    if(mike.pos.x < 450) mike.pos.x = mike.pos.x+1
})
loadSound("mojamuza", "moja muza.mp3")
onKeyPress(("space"),()=>{play("mojamuza")})
