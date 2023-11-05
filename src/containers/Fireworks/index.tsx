import { useEffect, useRef } from "react";
import { randomNumBetween, hypotenuse } from "../../utils/util";
import Tail from "./Tail";
import Particle from "./Particle";
import Spark from "./Spark";

import "./style.css";

export default function Fireworks() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current!;
        const canvasParent = canvas.parentElement!;
        const ctx = canvas.getContext("2d")!;

        let canvasWidth: number, canvasHeight: number;

        const bgColor = "#000000";
        const tails: Tail[] = [];
        const particles: Particle[] = [];
        const sparks: Spark[] = [];

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

        function createTail() {
            const x = randomNumBetween(canvasWidth * 0.2, canvasWidth * 0.8);
            const vy = canvasHeight * randomNumBetween(0.01, 0.015) * -1;
            const r = randomNumBetween(0, 255);
            const g = randomNumBetween(0, 255);
            const b = randomNumBetween(0, 255);
            const color = `${r}, ${g}, ${b}`;
            tails.push(new Tail(x, canvasHeight, vy, color));
        }

        function createParticles(x: number, y: number, color: string) {
            const PARTICLE_NUM = 400;

            for (let i = 0; i < PARTICLE_NUM; i++) {
                const r =
                    randomNumBetween(2, 100) *
                    hypotenuse(innerWidth, innerHeight) *
                    0.0001;
                const angle = (Math.PI / 180) * randomNumBetween(0, 360);

                const vx = r * Math.cos(angle);
                const vy = r * Math.sin(angle);

                const opacity = randomNumBetween(0.6, 0.9);

                particles.push(new Particle(x, y, vx, vy, opacity, color));
            }
        }

        function animate() {
            window.requestAnimationFrame(animate); // 프레임을 무한으로 생성

            now = Date.now();
            delta = now - then;

            if (delta < interval) return;

            ctx.clearRect(0, 0, canvasWidth, canvasHeight); // 이전 프레임을 지우고 새 프레임을 만듦

            ctx.fillStyle = bgColor + "30"; //#00000010: 잔상이 남도록
            ctx.fillRect(0, 0, canvasWidth, canvasHeight);

            ctx.fillStyle = `rgba(255,255,255,${particles.length / 30000})`;
            ctx.fillRect(0, 0, canvasWidth, canvasHeight);

            if (Math.random() < 0.03) createTail();

            tails.forEach((tail, idx) => {
                tail.update();
                tail.draw(ctx);

                const vx = randomNumBetween(-5, 5) * 0.05;
                const vy = randomNumBetween(-5, 5) * 0.05;
                const opacity = Math.min(-tail.vy, 0.5);
                for (let i = 0; i < Math.round(-tail.vy * 0.5); i++) {
                    sparks.push(
                        new Spark(tail.x, tail.y, vx, vy, opacity, tail.color)
                    );
                }

                if (tail.vy > -0.7) {
                    tails.splice(idx, 1);
                    createParticles(tail.x, tail.y, tail.color);
                }
            });

            particles.forEach((particle, idx) => {
                particle.update();
                particle.draw(ctx);

                if (Math.random() < 0.1) {
                    sparks.push(
                        new Spark(
                            particle.x,
                            particle.y,
                            0,
                            0,
                            0.3,
                            "255,210,77"
                        )
                    );
                }

                if (particle.opacity < 0) particles.splice(idx, 1);
            });

            sparks.forEach((spark, idx) => {
                spark.update();
                spark.draw(ctx);

                if (spark.opacity < 0) sparks.splice(idx, 1);
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
        <div className="fireworks">
            <canvas ref={canvasRef}></canvas>
        </div>
    );
}
