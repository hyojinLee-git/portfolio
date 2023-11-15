import { PROJECT_LIST } from "../../../models/project";

import "./style.css";

export default function Section4() {
    return (
        <section className="section4">
            <h2>Canvas Projects</h2>
            <ul>
                {PROJECT_LIST.map((project) => (
                    <li key={project.title}>
                        <a href={project.link}>
                            <img src={project.thumbnail} />
                            <div className="title">
                                <div>{project.title}</div>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}
