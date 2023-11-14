import { PROJECT_LIST } from "../../../models/project";

import "./style.css";

export default function Section3() {
    return (
        <section className="section3">
            <h2>Canvas Projects</h2>
            <ul>
                {PROJECT_LIST.map((project) => (
                    <li key={project.title}>
                        <a href={project.link}>
                            <img src={project.thumbnail} />
                            <div className="title">{project.title}</div>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}
