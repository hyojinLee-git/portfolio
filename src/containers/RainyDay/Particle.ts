import { randomNumBetween } from "../../utils/util";

export class Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    gravity: number;
    opacity: number;
    friction: number;

    constructor(x: number, y: number, opacity: number) {
        // rain drop 길이만큼 particle 생성, 옆으로 퍼짐
        this.x = x;
        this.y = y;
        this.vx = randomNumBetween(-5, 5);
        this.vy = 0;
        this.gravity = 0.12;
        this.friction = 0.98;
        this.opacity = opacity;
    }

    update() {
        this.opacity -= 0.02;

        this.vy += this.gravity;

        this.vx *= this.friction;
        this.vy *= this.friction;

        this.x += this.vx;
        this.y += this.vy;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
        // ctx.fillStyle = `rgba(255,255,255,${this.opacity})`;
        ctx.fillStyle = `rgba(255,255,255,${this.opacity})`;
        ctx.fill();
        ctx.closePath();
    }
}
