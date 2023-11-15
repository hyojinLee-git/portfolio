import { useState } from "react";

import "./style.css";
import { MENU_LIST } from "../../models/project";

export default function Navigator() {
    const [currentMenu, setCurrentMenu] = useState(0);
    const [showMenu, setShowMenu] = useState(false);

    const handleNavMenu = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        id: string
    ) => {
        e.preventDefault();
        const target = document.getElementById(id);
        target?.scrollIntoView({ behavior: "smooth", block: "center" });
        setShowMenu(false);
    };

    return (
        <nav>
            <a href="/#" className="nav__logo">
                HyoJin
            </a>
            <ul>
                {MENU_LIST.map((menu, idx) => (
                    <li
                        key={menu.title}
                        className={idx === currentMenu ? "active" : ""}
                        onClick={() => setCurrentMenu(idx)}
                    >
                        <a
                            href={`/#${menu.hash}`}
                            onClick={(e) => handleNavMenu(e, menu.hash)}
                        >
                            {menu.title}
                        </a>
                    </li>
                ))}
            </ul>
            <button
                id="hamburger_button"
                onClick={() => setShowMenu(true)}
                className="nav__menu"
            >
                <div />
                <div />
                <div />
            </button>
            {showMenu && (
                <div id="hamburger_menu">
                    <button onClick={() => setShowMenu(false)}>
                        <div id="right" />
                        <div id="left" />
                    </button>
                    <ul>
                        {MENU_LIST.map((menu, idx) => (
                            <li
                                key={menu.title}
                                className={idx === currentMenu ? "active" : ""}
                                onClick={() => setCurrentMenu(idx)}
                            >
                                <a
                                    href={`/#${menu.hash}`}
                                    onClick={(e) => handleNavMenu(e, menu.hash)}
                                >
                                    {menu.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}
