import { Mouse } from "./Mouse";

export class RainDrop {
    x: number;
    y: number;
    radius: number;
    vy: number;
    acc: number;
    color: string;
    particles: any[];

    constructor(x: number, y: number, radius: number, vy: number) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.vy = vy;
        this.acc = 1.03;
        this.color = "#fff";

        this.particles = [];
    }
    createParticles() {
        for (let i = 0; i < 100; i++) {
            this.particles.push();
        }
    }
    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath(); //path를 그리기 시작함
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + this.radius);
        ctx.strokeStyle = this.color;
        ctx.stroke();
        ctx.closePath();
    }
    update(mouse: Mouse) {
        this.y += this.vy;

        if (
            mouse.y <= this.y + this.radius &&
            this.y + this.radius <= mouse.y + 128 &&
            mouse.x <= this.x &&
            this.x <= mouse.x + 128
        ) {
            // 이 조건일때 particle push
            this.color = "red";
            this.createParticles();
        } else {
            this.color = "#fff";
        }
    }
}
