import '../StyleSheet/General.css'
import '../StyleSheet/Signin.css'
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

// function Form(email, password){
//     if(email.length > 0 && password.length>0){
//         return true;
//     }
// }

function Signin(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //here we would want to check if the email is valid and if the password
    //is a strong password

    const handleSubmit = (event) => {
        event.preventDefault();
        // alert(`The email you entered was: ${email}`);
        // alert(`The password you entered was: ${password}`);
        console.log(email);
        console.log(password);
    }
    
    return(
        <div className = "body">
            <div className = "signIn">
                <h1>Sign In</h1>
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <label for="email">
                            Email:<br/>
                            <input type="text" id = "email" value = {email} onChange={(e => setEmail(e.target.value))}/>    
                        </label>
                        <br/><br/>
                        <label for="password">
                            Password:<br/>
                            <input type="text" id = "password" value = {password} onChange={((e => setPassword(e.target.value)))}/>
                        </label>
                        <br/>
                        <input className='submit' type='submit'/>
                    </form>
                </div>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Signin />);

export default Signin;