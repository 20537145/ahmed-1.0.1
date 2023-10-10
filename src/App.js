
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Book from './pages/Book';
import Data from './pages/data';
import PlayersList from './components/PlayersList';
import Guy from './pages/guy';

function App() {
  return (<> 
  <nav className='nav'>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='about'>About</Link></li>
      <li><Link to='resposive'>Responsive</Link></li>
      <li><Link to='player'>FIFA Cards</Link></li>
    </ul>
  </nav>
  <Routes>
    <Route path='resposive' element={<Data/>}/>
    <Route path='test' element={<Guy/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='player' element={<PlayersList/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='about/book' element={<Book/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </>
   
  );
}

export default App;
