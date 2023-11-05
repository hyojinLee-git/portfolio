import { useRef } from "react";
import "./style.css";

export default function Rope() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    return (
        <div className="rope">
            <canvas ref={canvasRef}></canvas>
        </div>
    );
}
