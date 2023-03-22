// import { useEffect, useState } from 'react';
// import {HiLightBulb} from 'react-icons/hi'

import { HeaderContainer, Title } from "./Header.styles";

interface HeaderProps {
    title: string
}

function Header({ title } : HeaderProps) {
    // const [theme, setTheme] = useState(true)

    // useEffect(() => {
    //     const title = document.querySelector(".header--title");
    //     const header = document.querySelector(".header");
    //     const footer = document.querySelector(".footer--social");
    //     const card = document.querySelector(".main--card");
    //     const text = document.querySelector(".main--text");

    //     if (theme === false) {
    //         header.style.background = "radial-gradient(circle, rgba(113,58,99,1) 35%, rgba(94,29,78,1) 100%)"
    //         title.style.color = "#51BD3A"
    //         footer.style.background = "#2E7070"
    //         card.style.background = "#706944"
    //         text.style.color = "#BDAD60"
    //         document.body.style.backgroundColor = "#713a63"
    //     } else {
    //         header.style.background = "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 150%)"
    //         title.style.color = "#BAFFBD"
    //         footer.style.background = "#78BDE0"
    //         card.style.background = "#E7BFE7"
    //         text.style.color = "#8af3e3"
    //         document.body.style.backgroundColor = "#E3F0A4"
    //     };
    // })

    // function nightMode() {
    //     setTheme(prevTheme => (
    //         !theme
    //     ))
    // }

    return (
        <HeaderContainer >
            <Title >
                { title }
            </Title>
            
            {/* <div className='header--nightmode'>
                <button className='button--nightmode' onClick={nightMode}>
                    <HiLightBulb />
                </button>
            </div> */}
        </HeaderContainer>
    )
}

export default Header;