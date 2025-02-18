import './StyleSheet/Home.css'
import './StyleSheet/General.css'
import cherryBloosm from './img/cherryBlossom.jpg'
import Signin from '../Frontend/Signin';
function Home(){
    return (
        <body>
            <nav class = "nav-bar">
                <p class = "title">暢気日本語</p>
                <div class = "buttons">
                    <a href={<Signin/>} class="Signin">Sign in</a>
                    {/* <!-- <p class="signin">Sign in</p> --> */}
                    <button class="signup">Sign up</button>
                </div>
            </nav>
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