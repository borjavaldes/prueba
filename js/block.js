

class Block {
    constructor(ctx, width, height, posX, posY) {
        this.ctx = ctx;
        this.gameWidth = width;
        this.gameHeight = height;

        this.image = new Image();
        this.image.src = "js/img/bloque.png"

        this.width = 60
        this.height = 60

        this.posX = posX
        this.posY = posY
    }
    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
    }

}

class ladrilo extends Block {
    constructor(ctx, width, height, posX, posY) {
        super(ctx, width, height, posX, posY)
        this.image = new Image();
        this.image.src = "js/img/ladrilo.png"
    }
}