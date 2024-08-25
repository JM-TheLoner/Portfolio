import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Lost from './components/Lost'
import Portfolio from './components/Portfolio';
import { Route, Routes } from 'react-router-dom'
import { DataProvider } from './context/Datacontext';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/skills" element={<About/>}></Route>
          <Route exact path='/portfolio' element={<Portfolio/>}></Route>
          <Route exact path='/contact' element={<Contact/>}></Route>
          <Route exact path='/*' element={<Lost/>}></Route>
        </Routes>
        <Footer/>
      </DataProvider>
    </div>
  );
}

export default App;
