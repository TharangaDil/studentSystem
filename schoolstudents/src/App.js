import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Mainpage from './components/Mainpage';
import Studentlist from './components/Studentlist';


function App() {
  return (
   <>
     <Router>
     <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='/first' element={<Mainpage/>} />
      <Route path='/stulist' element={<Studentlist/>} />
     </Routes>

     </Router>
     
    
   </> 
  );
}

export default App;
