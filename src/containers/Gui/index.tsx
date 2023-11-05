import { useEffect, useRef } from "react";

import "./style.css";
import { randomNumBetween } from "../../utils/util";
import Gui from "./Gui";

export default function GuiPage() {
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

        const TOTAL = 20;
        const particles: Gui[] = [];

        for (let i = 0; i < TOTAL; i++) {
            const x = randomNumBetween(0, canvas.width);
            const y = randomNumBetween(0, canvas.height);
            const radius = randomNumBetween(30, 80);
            const vy = randomNumBetween(1, 5);
            const particle = new Gui(x, y, radius, vy);
            particles.push(particle);
        }

        function animate() {
            window.requestAnimationFrame(animate); // 프레임을 무한으로 생성

            now = Date.now();
            delta = now - then;

            if (delta < interval) return;

            ctx.clearRect(0, 0, canvasWidth, canvasHeight); // 이전 프레임을 지우고 새 프레임을 만듦

            then = now - (delta % interval);

            particles.forEach((particle) => {
                particle.update();
                particle.draw(ctx);

                if (particle.y - particle.radius > canvasHeight) {
                    particle.y = -particle.radius;
                    particle.x = randomNumBetween(0, canvasWidth);
                    particle.radius = randomNumBetween(30, 100);
                    particle.vy = randomNumBetween(1, 5);
                }
            });
        }

        window.addEventListener("resize", resize);
        resize();
        animate();

        return () => {
            window.removeEventListener("resize", resize);
        };
    }, []);
    return (
        <div className="gui">
            <svg>
                <defs>
                    <filter id="gooey">
                        <feGaussianBlur
                            stdDeviation="40"
                            in="SourceGraphic"
                            result="blur1"
                        />
                        <feColorMatrix
                            in="blur1"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 100 -23"
                        />
                    </filter>
                </defs>
            </svg>
            <canvas ref={canvasRef}></canvas>
        </div>
    );
}
