import { MouseEventHandler } from 'react';
import {HiLightBulb} from 'react-icons/hi';

import { HeaderContainer, Title } from "./Header.styles";

interface HeaderProps {
    title: string
    funcTheme: MouseEventHandler
}

function Header({ title, funcTheme } : HeaderProps) {

    return (
        <HeaderContainer >
            <Title >
                { title }
            </Title>      
            <button onClick={funcTheme}>
                <HiLightBulb />
            </button>
        </HeaderContainer>
    )
}

export default Header;

