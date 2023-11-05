import { useEffect, useRef } from "react";
import "./style.css";
import { randomNumBetween } from "../../utils/util";
import Rope from "./Rope";
import Mouse from "./Mouse";

export default function RopePage() {
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

            initRopes();
        }

        let interval = 1000 / 60;
        let now, delta;
        let then = Date.now();

        const ropes: Rope[] = [];
        const mouse = new Mouse(canvasRef);

        function initRopes() {
            const TOTAL = canvasWidth * 0.06;

            for (let i = 0; i < TOTAL; i++) {
                const rope = new Rope({
                    x: randomNumBetween(canvasWidth * 0.3, canvasWidth * 0.7),
                    y: 0,
                    gap: randomNumBetween(
                        canvasHeight * 0.05,
                        canvasHeight * 0.08
                    ),
                });
                rope.pin(0);
                ropes.push(rope);
            }
        }

        function animate() {
            window.requestAnimationFrame(animate); // 프레임을 무한으로 생성

            now = Date.now();
            delta = now - then;

            if (delta < interval) return;

            ctx.clearRect(0, 0, canvasWidth, canvasHeight); // 이전 프레임을 지우고 새 프레임을 만듦

            then = now - (delta % interval);

            ropes.forEach((rope) => {
                rope.update(mouse);
                rope.draw(ctx);
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
        <div className="rope">
            <img src="/Rope/glowing.png" id="light-img" />

            <canvas ref={canvasRef}></canvas>
        </div>
    );
}
