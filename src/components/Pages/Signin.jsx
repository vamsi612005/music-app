import React,{ useState } from "react";
import './css/Signin.css';

// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+/;
const Signin = () => {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     const validationErrors = {};

    //     if(!email) {
    //         validationErrors.emailError = 'Please enter your Email';
    //     } else if (!emailRegex.test(email)) {
    //         validationErrors.emailError = 'Invalid Email Format';
    //     }

    //     if(!password) {
    //         validationErrors.passwordError = 'Please enter yout Password';
    //     }

    //     setErrors(validationErrors);

    //     if(Object.keys(validationErrors).length == 0) {
    //         try {
    //             const userData = { email, password };
    //             const response = await axios.get('http://localhost:2222/login', userData);

    //         }
    //     }
    // }
        
        return(
            <section id='main'>
                <div className='card'>
        <h1><b>SIGN IN</b></h1>
        <br />
        <form action = "">
        <p></p>
        <input type="text"
              name="email"
              placeholder="email"
              aria-describedby="inputGroupPrepend2"
              required/>
        <br /> <br />
        <p></p>
        <input type="password"
              name="password"
              placeholder="Password"
              aria-describedby="inputGroupPrepend2"
              required/>
        <br /> <br />
        <a href="/home" id="submit">submit</a>
        </form>
        <br />
        <p>Not logged in?</p>
        <a href="/Signup" >Sign up</a>
      </div> 
            </section>
        )
    }

export default Signin;