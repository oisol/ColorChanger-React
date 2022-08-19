import { useEffect, useState } from 'react';
import {HiLightBulb} from 'react-icons/hi'

function Header() {
    const [theme, setTheme] = useState(true)

    useEffect(() => {
        if (theme === false) {
            const title = document.querySelector(".header--title");
            const header = document.querySelector(".header");
            const footer = document.querySelector(".footer--social");
            header.style.background = "#713a63"
            title.style.color = "#446a84"
            footer.style.background = "#713a63"
            document.body.style.backgroundColor = "#713a63"
        };
    })

    function nightMode() {
        setTheme(prevTheme => (
            !theme
        ))
    }

    return (
        <header className="header">
            <h1 className="header--title">
                Color Changer
            </h1>
            <button className='header--nightmode' onClick={nightMode}>
                <HiLightBulb />
            </button>

        </header>
    )
}

export default Header;