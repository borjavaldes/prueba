class Gameover {
    constructor(ctx, width, height) {
        this.ctx = ctx
        this.width = width
        this.height = height
        this.image = new Image()
        this.image.src = 'js/img/gameover.jpg'

    }
    draw() {
        this.ctx.drawImage(this.image, 500, 50, 570, 300)
    }
}