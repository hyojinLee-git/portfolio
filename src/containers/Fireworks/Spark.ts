class Spark {
    x: number;
    y: number;
    vx: number;
    vy: number;
    opacity: number;
    color: string;

    constructor(
        x: number,
        y: number,
        vx: number,
        vy: number,
        opacity: number,
        color: string
    ) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.opacity = opacity;
        this.color = color;
    }
    update() {
        this.opacity -= 0.01;

        this.x += this.vx;
        this.y += this.vy;
    }
    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color},${this.opacity})`;
        ctx.fill();
        ctx.closePath();
    }
}

export default Spark;
