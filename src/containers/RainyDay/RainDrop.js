export class RainDrop {
    constructor(x, y, radius, vy) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.vy = vy;
        this.acc = 1.03;
    }
    draw(ctx) {
        ctx.beginPath(); //path를 그리기 시작함
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + this.radius);
        ctx.strokeStyle = "#ffffff";
        ctx.stroke();
        ctx.closePath();
    }
    update() {
        this.vy *= this.acc;
        this.y += this.vy;
    }
}
