import '../StyleSheet/General.css'
import '../StyleSheet/Signin.css'
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

//Look into this in order to fix issues latter on in order to have multiple inputs
//http://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable

function Signin(){

    const [inputs, setInputs] = useState({});
    //here we would want to check if the email is valid and if the password
    //is a strong password

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))

    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(inputs)
    }
    return(
        <div className = "body">
            <div className = "signIn">
                <h1>Sign In</h1>
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <label for="email">
                            Email:<br/>
                            <input 
                            type="text" 
                            name = "email" 
                            value = {inputs.email} 
                            onChange={handleChange}/>    
                        </label>
                        <br/><br/>
                        <label for="password">
                            Password:<br/>
                            <input type="text" 
                            name = "password" 
                            value = {inputs.password} 
                            onChange={handleChange}/>
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