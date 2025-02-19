import '../StyleSheet/General.css'

function Signin(){
    return(
        <body>
            <div class = "signIn">
                <h1>Sign In</h1>
                <div class="form">
                    <form>
                        <label for="email">Email:</label><br/>
                        <input type="text" id = "email" name="name"/><br/>
                        <label for="password">Password:</label><br/>
                        <input type="text" id = "password" name = "password"/>
                    </form>
                </div>
            </div>
        </body>
    );
}


export default Signin;