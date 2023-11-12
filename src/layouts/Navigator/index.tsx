import { useState } from "react";
import "./style.css";
import { MENU_LIST } from "../../models/project";

export default function Navigator() {
    const [currentMenu, setCurrentMenu] = useState(0);
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav>
            <div className="nav__logo">HyoJin</div>
            <ul>
                {MENU_LIST.map((menu, idx) => (
                    <li
                        key={menu.title}
                        className={idx === currentMenu ? "active" : ""}
                        onClick={() => setCurrentMenu(idx)}
                    >
                        <a>{menu.title}</a>
                    </li>
                ))}
            </ul>
            <button
                onClick={() => setShowMenu(!showMenu)}
                className="nav__menu"
            >
                <div />
                <div />
                <div />
            </button>
        </nav>
    );
}
