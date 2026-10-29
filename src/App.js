import Home from './components/Home.js';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Lost from './components/Lost'
import Portfolio from './components/Portfolio';
import { HashRouter, Route, Routes } from 'react-router-dom'
import { DataProvider } from './context/Datacontext';
import { useState } from 'react';

function App() {
  const [hasPlayedDecrypt, setHasPlayedDecrypt] = useState(false);

  return (
    <HashRouter>
      <div className="App">
        <DataProvider>
          <Routes>
            <Route exact path="/" element={<Home hasPlayedDecrypt={hasPlayedDecrypt} setHasPlayedDecrypt={setHasPlayedDecrypt}/>}></Route>
            <Route exact path="/about" element={<About/>}></Route>
            <Route exact path="/skills" element={<Skills/>}></Route>
            <Route exact path='/projects' element={<Portfolio/>}></Route>
            <Route exact path='/contact' element={<Contact/>}></Route>
            <Route exact path='/*' element={<Lost/>}></Route>
          </Routes>
        </DataProvider>
      </div>
    </HashRouter>
  );
}

export default App;
