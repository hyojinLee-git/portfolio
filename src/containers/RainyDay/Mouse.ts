export class Mouse {
    x: number;
    y: number;
    constructor(canvas: HTMLCanvasElement) {
        this.x = -5000;
        this.y = -5000;
        if (canvas) {
            canvas.addEventListener("mousemove", (e) => {
                this.x = e.clientX;
                this.y = e.clientY;
            });
        }
    }
}
