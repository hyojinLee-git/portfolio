export default class Gui {
    x: number;
    y: number;
    radius: number;
    vy: number;
    acc: number;

    constructor(x: number, y: number, radius: number, vy: number) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.vy = vy;
        this.acc = 1.03;
    }
    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath(); //path를 그리기 시작함
        ctx.arc(this.x, this.y, this.radius, 0, (Math.PI / 180) * 360); //각도 단위는 rad
        ctx.fillStyle = "orange";
        ctx.fill();
        ctx.closePath();
    }
    update() {
        this.vy *= this.acc;
        this.y += this.vy;
    }
}
