import { useRef, useEffect } from "react";
import gsap from "gsap";
import Particle from "./Particle";
import "./style.css";

export default function CountDown() {
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

        const particles: Particle[] = [];
        const PARTICLE_NUM = 1000;

        function createRing() {
            for (let i = 0; i < PARTICLE_NUM; i++) {
                particles.push(new Particle(canvasWidth, canvasHeight));
            }
        }

        function animate() {
            window.requestAnimationFrame(animate); // 프레임을 무한으로 생성

            now = Date.now();
            delta = now - then;

            if (delta < interval) return;

            ctx.clearRect(0, 0, canvasWidth, canvasHeight); // 이전 프레임을 지우고 새 프레임을 만듦

            for (let i = particles.length - 1; i >= 0; i--) {
                particles[i].update(canvasWidth, canvasHeight);
                particles[i].draw(ctx);

                if (particles[i].opacity < 0) particles.splice(i, 1);
            }

            then = now - (delta % interval);
        }

        function countDownAnimation() {
            const texts = document.querySelectorAll("span");

            const countDownOption = {
                opacity: 1,
                scale: 1,
                duration: 0.4,
                ease: "Power4.easeOut",
            };

            gsap.fromTo(texts[0], { opacity: 0, scale: 5 }, countDownOption);
            gsap.fromTo(
                texts[1],
                { opacity: 0, scale: 5 },
                {
                    ...countDownOption,
                    delay: 1,
                    onStart: () => {
                        texts[0].style.opacity = "0";
                    },
                }
            );
            gsap.fromTo(
                texts[2],
                { opacity: 0, scale: 5 },
                {
                    ...countDownOption,
                    delay: 2,
                    onStart: () => {
                        texts[1].style.opacity = "0";
                    },
                }
            );

            const ring = document.querySelector("#ring");
            gsap.fromTo(
                ring,
                { opacity: 1 },
                {
                    opacity: 0,
                    duration: 1,
                    delay: 3,
                    onStart: () => {
                        createRing();
                        texts[2].style.opacity = "0";
                    },
                }
            );
        }

        window.addEventListener("click", countDownAnimation);
        window.addEventListener("resize", resize);
        resize();
        animate();

        return () => {
            window.removeEventListener("click", countDownAnimation);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <div className="count-down">
            <canvas ref={canvasRef}></canvas>
            <div id="ring"></div>
            <div id="countdown">
                <span>3</span>
                <span>2</span>
                <span>1</span>
            </div>
        </div>
    );
}
