class Player {
    constructor(ctx, width, height) {
        this.ctx = ctx;
        this.gameWidth = width;
        this.gameHeight = height;

        this.image = new Image();
        this.image.src = "js/img/raqueta.png";

        this.width = 190;
        this.height = 20;

        this.posX = 700;
        this.posY = 750;
        this._vel = 100

        this.setEventListeners()

    }

    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)

    }
    goLeft() {
        this.posX >= 100 ? this.posX -= this._vel : null
    }
    goRight() {

        this.posX + this.width <= this.gameWidth ? this.posX += this._vel : null

    }
    setEventListeners() {
        document.onkeydown = e => {
            switch (e.keyCode) {
                case 37:
                    this.goLeft()
                    break
                case 39:
                    this.goRight()
                    break
            }
        }

    }
}






// goLeft() {
//     if (this.posX >= 100) {  //"inicio" de la pantalla
//         this.posX -= this._vel
//     }
//     // this.posX >= 100 ? this.posX -= this._vel : null
// }
// goRight() {
//     if (this.posX + this.width <= this.gameWidth) { //final de la pantalla
//         this._posX += this._vel
//     }
//     // this.posX + this.width <= this.gameWidth ? this.posX += this._vel : null

//     // this.posX + this.width + 60 <= this.gameWidth ? this.posX += this._vel : null
// }