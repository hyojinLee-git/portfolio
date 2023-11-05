import Mouse from "./Mouse.js";
import Vector from "./Vector.js";

export default class Dot {
    pos: Vector;
    oldPos: Vector;
    gravity: Vector;
    friction: number;
    pinned: boolean;
    mass: number;
    lightImg: HTMLImageElement;
    lightSize: number;
    constructor(x: number, y: number) {
        this.pos = new Vector(x, y);
        this.oldPos = new Vector(x, y);

        this.gravity = new Vector(0, 1);
        this.friction = 0.97;

        this.pinned = false;

        this.mass = 1;

        this.lightImg = document.querySelector("#light-img")!;
        this.lightSize = 15;
    }

    update(mouse: Mouse) {
        if (this.pinned) return;
        let vel = Vector.sub(this.pos, this.oldPos);

        this.oldPos.setXY(this.pos.x, this.pos.y);

        vel.mult(this.friction);
        vel.add(this.gravity);
        this.pos.add(vel);

        let { x: dx, y: dy } = Vector.sub(mouse.pos, this.pos);
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist > mouse.radius) return;

        const direction = new Vector(dx / dist, dy / dist);

        const force = Math.max((mouse.radius - dist) / mouse.radius, 0);

        if (force > 0.8) this.pos.setXY(mouse.pos.x, mouse.pos.y);
        else this.pos.add(direction.mult(force).mult(5));
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = "#999";
        ctx.fillRect(
            this.pos.x - this.mass,
            this.pos.y - this.mass,
            this.mass * 2,
            this.mass * 2
        );
    }

    drawLight(ctx: CanvasRenderingContext2D) {
        ctx.drawImage(
            this.lightImg,
            this.pos.x - this.lightSize / 2,
            this.pos.y - this.lightSize / 2,
            this.lightSize,
            this.lightSize
        );
    }
}
