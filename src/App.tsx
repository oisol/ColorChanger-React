import Header from './components/Header/index';
import MainCard from './components/MainCard/index';
import Footer from './components/Footer/index';

import './index.css';

function App() {
  return (
    <div className="App">
      < Header 
        title='Color Changer'
      /> 
      < MainCard />
      < Footer />
    </div>
  );
}

export default App;
