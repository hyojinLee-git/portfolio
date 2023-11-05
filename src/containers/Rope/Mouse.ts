import { RefObject } from "react";
import Vector from "./Vector.js";

export default class Mouse {
    pos: Vector;
    radius: number;

    constructor(canvas: RefObject<HTMLCanvasElement>) {
        this.pos = new Vector(-1000, -1000);
        this.radius = 100;

        if (canvas.current) {
            canvas.current.onmousemove = (e) =>
                this.pos.setXY(e.clientX, e.clientY);
            canvas.current.ontouchmove = (e) =>
                this.pos.setXY(e.touches[0].clientX, e.touches[0].clientY);
        }
    }
}
