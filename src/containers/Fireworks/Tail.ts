import { randomNumBetween } from "../../utils/util";

class Tail {
    x: number;
    y: number;
    vy: number;
    color: string;
    angle: number;
    friction: number;
    opacity: number;

    constructor(x: number, y: number, vy: number, color: string) {
        this.x = x;
        this.y = y;
        this.vy = vy;
        this.color = color;
        this.angle = randomNumBetween(0, 2);
        this.friction = 0.985;

        this.opacity = -this.vy;
    }

    update() {
        this.vy *= this.friction;
        this.y += this.vy;

        this.angle += 1;
        this.x += Math.cos(this.angle) * this.vy * 0.2;

        this.opacity = -this.vy * 0.1;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    }
}

export default Tail;
