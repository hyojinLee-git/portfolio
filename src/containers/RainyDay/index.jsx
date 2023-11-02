import { useRef, useEffect } from "react";
import { randomNumBetween } from "../../utils/util";
import { RainDrop } from "./RainDrop";

import "./style.css";

export default function RainyDay() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const canvasParent = canvas.parentNode;
        const ctx = canvas.getContext("2d");

        let canvasWidth, canvasHeight;

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

        const particles = [];
        const TOTAL = 20;

        for (let i = 0; i < TOTAL; i++) {
            const x = randomNumBetween(0, canvas.width);
            const y = randomNumBetween(0, canvas.height);
            const radius = randomNumBetween(30, 80);
            const vy = randomNumBetween(1, 5);
            const particle = new RainDrop(x, y, radius, vy);
            particles.push(particle);
        }

        function animate() {
            window.requestAnimationFrame(animate); // 프레임을 무한으로 생성

            now = Date.now();
            delta = now - then;

            if (delta < interval) return;

            ctx.clearRect(0, 0, canvasWidth, canvasHeight); // 이전 프레임을 지우고 새 프레임을 만듦

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
