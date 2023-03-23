import { useEffect, useState } from 'react';

import Header from './components/Header/index';
import MainCard from './components/MainCard/index';
import Footer from './components/Footer/index';
import { GlobalStyle } from './components/GlobalStyle';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './components/UI/themes';

const App = () => {
    const [theme, setTheme] = useState(true)

    useEffect(() => {
        // Verifica se o tema está false no localstorage 
        let isDark = localStorage.getItem('theme') === 'false'

        if (!localStorage.getItem("theme")) {
            localStorage.setItem("theme", `true`);
        }
        // Seta o State para false caso o local storage retorne false.
        if (isDark) {
            setTheme(false)
        }
    }, [])

    const toggleTheme = () => {
        setTheme((theme) => !theme);
        localStorage.setItem('theme', `${!theme}`)
    };

    return (
        <ThemeProvider theme={theme ? lightTheme : darkTheme}>
            <GlobalStyle />
            <Header
                title='Color Changer'
                funcTheme={toggleTheme}
            />
            <MainCard
                text='Clique no botão para trocar a cor da tela'
                btnText='Click'
            />
            <Footer />
        </ThemeProvider>
    );
}

export default App;
