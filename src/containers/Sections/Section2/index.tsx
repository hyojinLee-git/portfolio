import { PROJECT_LIST } from "../../../models/project";

import "./style.css";

export default function Section2() {
    return (
        <section className="section2">
            <h2>Projects</h2>
            <ul>
                {PROJECT_LIST.map((project) => (
                    <li key={project.title}>
                        <a href={project.link}>
                            <div>thumbnail</div>
                            <div className="title">{project.title}</div>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}
