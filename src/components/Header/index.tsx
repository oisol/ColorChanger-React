import { MouseEventHandler } from 'react';
import {HiLightBulb} from 'react-icons/hi';

import { HeaderContainer, Title, Button } from "./Header.styles";

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
            <Button onClick={funcTheme}>
                <HiLightBulb />
            </Button>
        </HeaderContainer>
    )
}

export default Header;

