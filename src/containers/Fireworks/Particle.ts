class Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    opacity: number;
    color: string;
    gravity: number;
    friction: number;

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
        this.gravity = 0.12;
        this.friction = 0.93;
        this.color = color;
    }

    update() {
        this.vy += this.gravity;

        this.vx *= this.friction;
        this.vy *= this.friction;

        this.x += this.vx;
        this.y += this.vy;

        this.opacity -= 0.02;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.fillStyle = `rgba(${this.color},${this.opacity})`;
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    }
}

export default Particle;
