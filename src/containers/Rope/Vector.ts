export default class Vector {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x || 0;
        this.y = y || 0;
    }
    static add(v1: { x: number; y: number }, v2: { x: number; y: number }) {
        return new Vector(v1.x + v2.x, v1.y + v2.y);
    }

    add(x: { x: number; y: number } | number, y?: number) {
        if (arguments.length === 1 && typeof x === "object") {
            this.x += x.x;
            this.y += x.y;
        } else if (
            arguments.length === 2 &&
            typeof x === "number" &&
            typeof y === "number"
        ) {
            this.x += x;
            this.y += y;
        }
        return this;
    }

    static sub(v1: { x: number; y: number }, v2: { x: number; y: number }) {
        return new Vector(v1.x - v2.x, v1.y - v2.y);
    }

    sub(x: { x: number; y: number } | number, y?: number) {
        if (
            arguments.length === 2 &&
            typeof x === "number" &&
            typeof y === "number"
        ) {
            this.x -= x;
            this.y -= y;
        } else if (arguments.length === 1 && typeof x === "object") {
            this.x -= x.x;
            this.y -= x.y;
        }
        return this;
    }

    mult(v: number | { x: number; y: number }) {
        if (typeof v === "number") {
            this.x *= v;
            this.y *= v;
        } else {
            this.x *= v.x;
            this.y *= v.y;
        }
        return this;
    }

    setXY(x: number, y: number) {
        this.x = x;
        this.y = y;
        return this;
    }

    dist(v: { x: number; y: number }) {
        const dx = this.x - v.x;
        const dy = this.y - v.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}
