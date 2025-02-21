import './App.css';
import Home from './Home.js';
import Signin from './Frontend/signin.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Frontend/signup.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </Router>
  );
}

export default App;
