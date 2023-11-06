import { useEffect, useRef } from "react";
import "./style.css";
import String from "./String";

export default function BounceString() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current!;
        const canvasParent = canvas.parentElement!;
        const ctx = canvas.getContext("2d")!;

        let canvasWidth: number, canvasHeight: number;

        function resize() {
            canvasWidth = canvasParent.clientWidth;
            canvasHeight = canvasParent.clientHeight;
            canvas.style.width = canvasWidth + "px";
            canvas.style.height = canvasHeight + "px";
            canvas.width = canvasWidth;
            canvas.height = canvasHeight;
        }

        let interval = 1000 / 60;
        let now, delta;
        let then = Date.now();

        const strings: String[] = [];
        let moveX = -5000;
        let moveY = -5000;
        let isDown = false;

        const xGap = 20;
        const yGap = 20;
        const x1 = xGap;
        const x2 = canvas.width - xGap;
        const total = Math.floor((canvas.height - yGap) / yGap);

        for (let i = 0; i < total; i++) {
            strings[i] = new String(
                {
                    // 선의 왼쪽 x위치
                    x1: x1,
                    // 선의 왼쪽 y위치
                    y1: i * yGap + yGap,
                    // 선의 오른쪽 x위치
                    x2: x2,
                    // 선의 오른쪽 y위치
                    y2: i * yGap + yGap,
                },
                "#ff5038"
            );
        }

        function animate() {
            window.requestAnimationFrame(animate); // 프레임을 무한으로 생성

            now = Date.now();
            delta = now - then;

            if (delta < interval) return;

            ctx.clearRect(0, 0, canvasWidth, canvasHeight); // 이전 프레임을 지우고 새 프레임을 만듦

            then = now - (delta % interval);

            if (strings.length > 0) {
                for (let i = 0; i < strings.length; i++) {
                    // this.strings[i].animate(this.ctx, this.ball.x, this.ball.y);
                    // bounce string by click window
                    strings[i].animate(ctx, moveX, moveY);
                }
            }
        }

        function onDown(e: MouseEvent) {
            isDown = true;
            moveX = e.clientX;
            moveY = e.clientY;
        }

        function onMove(e: MouseEvent) {
            if (isDown) {
                moveX = e.clientX;
                moveY = e.clientY;
            }
        }

        function onUp(e: MouseEvent) {
            isDown = false;

            moveX = -5000;
            moveY = -5000;
        }

        window.addEventListener("resize", resize);
        resize();
        animate();

        canvas.addEventListener("mousedown", onDown);
        canvas.addEventListener("mousemove", onMove);
        canvas.addEventListener("mouseup", onUp);

        return () => {
            window.removeEventListener("resize", resize);
            canvas.removeEventListener("mousedown", onDown);
            canvas.removeEventListener("mousemove", onMove);
            canvas.removeEventListener("mouseup", onUp);
        };
    }, []);

    return (
        <div className="bounce-string">
            <canvas ref={canvasRef}></canvas>
        </div>
    );
}
