import { useEffect, useState } from 'react';

import Header from './components/Header/index';
import MainCard from './components/MainCard/index';
import Footer from './components/Footer/index';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './components/UI/themes';
import './index.css';

function App() {
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
            <div className="App">
                < Header
                    title='Color Changer'
                    funcTheme={toggleTheme}
                />
                < MainCard
                    text='Clique no botão para trocar a cor da tela'
                    btnText='Click'
                />
                < Footer />
            </div>
        </ThemeProvider>
    );
}

export default App;
