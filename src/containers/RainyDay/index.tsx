import { useRef, useEffect, ReactElement } from "react";

import "./style.css";
import { RainDrop } from "./RainDrop";
import { randomNumBetween } from "../../utils/util";

export default function RainyDay() {
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

        const rainDrops: RainDrop[] = [];
        const TOTAL = 20;

        for (let i = 0; i < TOTAL; i++) {
            const x = randomNumBetween(0, canvas.width);
            const y = randomNumBetween(0, canvas.height);
            const radius = randomNumBetween(30, 80);
            const vy = randomNumBetween(1, 5);
            const particle = new RainDrop(x, y, radius, vy);
            rainDrops.push(particle);
        }

        function animate() {
            window.requestAnimationFrame(animate); // 프레임을 무한으로 생성

            now = Date.now();
            delta = now - then;

            if (delta < interval) return;

            ctx.clearRect(0, 0, canvasWidth, canvasHeight); // 이전 프레임을 지우고 새 프레임을 만듦

            rainDrops.forEach((rainDrop) => {
                rainDrop.update();
                rainDrop.draw(ctx);

                if (rainDrop.y - rainDrop.radius > canvasHeight) {
                    rainDrop.y = -rainDrop.radius;
                    rainDrop.x = randomNumBetween(0, canvasWidth);
                    rainDrop.radius = randomNumBetween(30, 100);
                    rainDrop.vy = randomNumBetween(1, 5);
                }
            });

            then = now - (delta % interval);
        }

        window.addEventListener("resize", resize);
        resize();
        animate();

        return () => {
            window.removeEventListener("resize", resize);
        };
    }, []);
    return (
        <div className="rainy-day">
            <canvas ref={canvasRef}></canvas>
        </div>
    );
}
