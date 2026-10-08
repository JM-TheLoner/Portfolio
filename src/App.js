import Home from './components/Home.js';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Lost from './components/Lost'
import Portfolio from './components/Portfolio';
import { Route, Routes } from 'react-router-dom'
import { DataProvider } from './context/Datacontext';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About/>}></Route>
          <Route exact path="/skills" element={<Skills/>}></Route>
          <Route exact path='/projects' element={<Portfolio/>}></Route>
          <Route exact path='/contact' element={<Contact/>}></Route>
          <Route exact path='/*' element={<Lost/>}></Route>
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
