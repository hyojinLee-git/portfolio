import { Link } from "react-router-dom";
import { PROJECT_LIST } from "../../../models/project";

import "./style.css";

export default function Section4() {
    return (
        <section className="section4">
            <h2 id="projects">Personal Projects</h2>
            <ul>
                {PROJECT_LIST.map((project) => (
                    <li key={project.title}>
                        <Link to={project.link}>
                            <img src={project.thumbnail} />
                            <div className="title">
                                <div>{project.title}</div>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}
