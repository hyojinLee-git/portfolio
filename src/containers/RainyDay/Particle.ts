export class Particle {
    x: number;
    y: number;
    opacity: number;

    constructor(x: number, y: number) {
        // rain drop 길이만큼 particle 생성, 옆으로 퍼짐
        this.x = x;
        this.y = y;
        this.opacity = 1;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
        // ctx.fillStyle = `rgba(255,255,255,${this.opacity})`;
        ctx.fillStyle = `rgba(255,255,255,${this.opacity})`;
        ctx.fill();
        ctx.closePath();
    }

    update() {
        this.opacity -= 0.003;
    }
}
