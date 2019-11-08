class Ball {
    constructor(ctx, height, width, ) {

        this.ctx = ctx
        this.height = height
        this.width = width
        this.posXball = 600
        this.posYball = 700
        this.velX = 7
        this.velY = 7
        this.radius = 10

    }

    drawBall() {

        //this.ctx.fillStyle = "#0095DD";
        this.ctx.beginPath();
        this.ctx.fillStyle = "orange";
        this.ctx.arc(this.posXball, this.posYball, this.radius, 0, Math.PI * 2)
        this.ctx.fill();
        this.ctx.closePath()

    }

    move() {
        this.posYball -= this.velY
        this.posXball += this.velX
    }


    // this.posXball += this.velX
    // this.posXball > 30 ? this.width -= this.velX *= -1 : null

}

