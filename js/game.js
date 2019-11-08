const Game = {
    canvas: undefined,
    ctx: undefined,
    width: undefined,
    height: undefined,
    frames: 1,
    player: undefined,
    strike: [],
    blockBreak: [
        [1, 0, 0, 0, 0, 1, 1, 0, 0],
        [0, 1, 0, 0, 1, 0, 1, 1, 0],
        [0, 0, 1, 0, 0, 0, 1, 0, 1],
        [0, 0, 0, 1, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 0, 0, 1, 0],
    ],
    fps: 60,
    score: 0,
    nivel: 1,
    musicTime: new Audio('js/img/avengers.mp3'),

    init: function () {
        this.canvas = document.getElementById("canvas")
        this.ctx = this.canvas.getContext("2d")
        this.width = window.innerWidth * 0.98;
        this.height = window.innerHeight * 0.98;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.start();
    },

    start() {
        this.reset();
        this.interval = setInterval(() => {
            this.musicTime.play()
            this.clear()
            this.drawAll()
            this.moveAll()
            this.isOut()
            this.isPaddleCollide()
            this.isBlockCollide()
            this.isGroundCollide()
            if (this.strike.length == 0) {
                this.nivel += 1;
                this.levels()
                this.strike = [];
                this.reset()
            }
            if (this.strike.length <= 0) {
                this.gameOver()
            }
        }, 1000 / this.fps)
    },

    reset() {
        this.background = new Background(this.ctx, this.width, this.height);
        this.player = new Player(this.ctx, this.width, this.height)
        this.ball = new Ball(this.ctx, this.width, this.height)
        this.generateBricks()
        this.scoreboard = ScoreBoard;
        this.scoreboard.init(this.ctx);
        this.gameover = new Gameover(this.ctx, this.width, this.height)
        this.winover = new Winover(this.ctx, this.width, this.height)
    },

    generateBricks() {
        let label = this.blockBreak.length;
        if (this.nivel == 1 || this.nivel > 2) {
            for (let i = 0; i < label; i++) {    //filas de la matrix
                let long = this.blockBreak[i].length
                for (let k = 0; k < long; k++) {        //columnas de la matrix
                    console.log(long)
                    if (this.blockBreak[i][k] == 1) {       //¿coincide la casilla con un 1?

                        //push de un nuevo brick
                        this.strike.push(new Block(this.ctx, this.width, this.height, window.innerWidth / 9 * k, window.innerHeight / 10 * i))

                    }
                }
            }
        }

        if (this.nivel == 2) {
            for (let i = 0; i < label; i++) {    //filas de la matrix
                let long = this.blockBreak[i].length
                for (let k = 0; k < long; k++) {        //columnas de la matrix
                    console.log(long)
                    if (this.blockBreak[i][k] == 1) {       //¿coincide la casilla con un 1?

                        //push de un nuevo brick
                        this.strike.push(new ladrilo(this.ctx, this.width, this.height, window.innerWidth / 9 * k, window.innerHeight / 10 * i))

                    }
                }
            }


        }

    },

    drawAll() {
        this.background.draw();
        this.player.draw()
        this.ball.drawBall()
        this.drawObstacles()
        this.drawScore();

    },

    moveAll() {
        this.ball.move()
    },

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },

    isOut() {
        if (this.ball.posYball <= 4) {
            this.ball.velY *= -1
            console.log(this.ball.posXball)
            console.log(this.ball.posYball)
        } else if (this.ball.posXball <= 0) {
            this.ball.velX *= -1
        } else if (this.ball.posXball > window.innerWidth) {
            this.ball.velX *= -1
        } else if (this.ball.posYball > window.innerWidth) {
            this.ball.velY *= -1
        }
    },

    isPaddleCollide() {
        if (this.ball.posYball + 10 >= this.player.posY && this.ball.posXball + 10 >= this.player.posX && this.ball.posXball <= (this.player.posX + 190)) {
            this.ball.velY *= -1
        }

    },

    isBlockCollide() {

        this.strike.some((block, idex) => {
            if (
                this.ball.posXball + this.ball.radius >= block.posX &&
                this.ball.posYball + this.ball.radius >= block.posY &&
                this.ball.posXball <= block.posX + 60 &&
                this.ball.posYball <= block.posY + 60) {
                this.strike.splice(idex, 1)
                this.ball.velY *= -1
                this.score += 20;

            }

        })

    },
    isGroundCollide() {

        if (this.ball.posYball + this.ball.radius >= window.innerHeight) {
            this.gameover.draw()
            this.gameOver()
        }
    },

    drawObstacles() {
        this.strike.forEach(block => block.draw())


    },
    levels() {
        if (this.nivel == 2) {
            this.blockBreak =
                [[1, 0, 1, 1, 1, 0, 1, 1, 1],
                [1, 1, 1, 0, 0, 1, 1, 1, 1],
                [1, 1, 1, 0, 0, 1, 1, 0, 1],
                [1, 1, 0, 1, 1, 0, 1, 1, 1],
                [1, 0, 1, 1, 1, 1, 0, 1, 1]]
        }
        if (this.nivel == 3) {
            this.blockBreak =
                [[1, 0, 1, 1, 1, 1, 0, 1, 1],
                [1, 1, 1, 1, 0, 1, 1, 0, 1],
                [1, 0, 1, 1, 0, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 0, 0, 1, 0],
                [1, 1, 0, 1, 0, 1, 1, 0, 1]]
        }
    },

    drawScore() {
        this.scoreboard.update(this.score, this.nivel);
    },
    gameOver() {
        //this.gameover.draw()
        clearInterval(this.interval)
    },
    winover() {
        this.winover.draw()
        clearInterval(this.interval)
    },
    musicPrincipal() {
        this.musicTime.volume = 0, 6
        this.musicTime.loop = true
        this.musicTime.play()
    }
}









