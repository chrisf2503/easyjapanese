import './StyleSheet/Home.css'
import './StyleSheet/General.css'
import cherryBloosm from './img/cherryBlossom.jpg'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Signin from './Frontend/Signin';

function Home(){
    return (
        <body>
            <Router>
                <nav class = "nav-bar">
                    <p class = "title">暢気日本語</p>
                    <div class = "buttons">
                        {/* Trying to fix the this in order to click an move on to the signin page */}
                        | <Link to = "/">Sign in</Link>
                        <button class="signup">Sign up</button>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<Signin />} />
                </Routes>
            </Router>
            <div class = "content">
                <h1>暢気日本語</h1>
                <div class="middle-image">
                    <p class="jpn">こにちは</p>
                    <img src={cherryBloosm} alt="Cherry Blossom Tree" class="img1"/>
                    <p class="jpn">みなさん</p>
                </div>
                <p class="p1">Welcome to Easy Japanese!</p>
                <p class="p2">Learning Japanese easier an better</p>
            </div>

        </body>
    );
}

export default Home;