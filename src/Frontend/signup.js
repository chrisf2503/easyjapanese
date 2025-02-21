import '../StyleSheet/General.css'
import '../StyleSheet/Signin.css'

function Signup(){
    return(
        <div className='body'>
            <div className = "signIn">
                <h1>Sign In</h1>
                <div className="form">
                    <form>
                        <label for = "name">Name:</label><br/>
                        <input type="text" id = "name" name="name"/>
                        <br/><br/>
                        <label for="email">Email:</label><br/>
                        <input type="text" id = "email" name="email"/>
                        <br/><br/>
                        <label for="password">Password:</label><br/>
                        <input type="text" id = "password" name = "password"/>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default Signup;