player.onChat("granja", function () {
    for (let value of animal) {
        blocks.fill(
        OAK_FENCE,
        pos(5, 0, 5),
        pos(-5, 0, -5),
        FillOperation.Hollow
        )
        blocks.fill(
        AIR,
        pos(4, 0, 4),
        pos(-4, 0, -4),
        FillOperation.Replace
        )
        mobs.spawn(value, pos(0, 0, 0))
    }
})
let animal: number[] = []
animal = [
CHICKEN,
COW,
PIG,
SHEEP,
HORSE
]
