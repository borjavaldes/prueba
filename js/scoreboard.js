const ScoreBoard = {
    ctx: undefined,

    init: function (ctx) {
        this.ctx = ctx
        this.ctx.font = "30px sans-serif"
    },
    update: function (score, nivel) {
        this.ctx.fillStyle = "narange"
        this.ctx.fillText(" SCORE " + score + " NIVEL " + nivel, 50, 700)
    }
}