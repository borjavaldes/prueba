class Winover {
    constructor(ctx, width, height) {
        this.ctx = ctx
        this.width = width
        this.height = height
        this.image = new Image()
        this.image.src = 'js/img/ganador.jpg'

    }
    draw() {
        this.ctx.drawImage(this.image, 0, 0, window.innerWidth * 0.98, window.innerHeight * 0.98)
    }
}