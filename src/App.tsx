import Header from './components/Header/index';
import MainCard from './components/MainCard/index';
import Footer from './components/Footer/index';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './components/UI/themes';
import './index.css';

function App() {
  return (  
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        < Header 
          title='Color Changer'
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
