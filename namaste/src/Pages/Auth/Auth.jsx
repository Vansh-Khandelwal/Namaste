import React from 'react'
import { useState } from 'react'
import './Auth.css'

const Auth = () => {

    const [IsSignUp, setIsSignUp] = useState(true)

    const [data, setData] = useState({
        firstname : "",
        lastname : "",
        username : "",
        password : "",
        cpassword : ""
    })

    const [confirmPassword, setConfirmPassword] = useState(true)

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    } 
    // this way data gets destructured and for the name of that field same as that in the data variable the input value will be taken as its value

    const handleSubmit = (event) => {
        event.preventDefault();

        if(IsSignUp)
        {
            if (data.password!==data.confirmPassword)
            {
                setConfirmPassword(false)
            }
        }
    }

    const resetForm = () => {

        setConfirmPassword(true)

        setData({ 
            firstname : "",
            lastname : "",
            username : "",
            password : "",
            cpassword : ""
        })
    }

  return (
    <div className="Auth">
        {/* Left side */}
        <div className="Auth-left">
            <img src={process.env.PUBLIC_URL+"./logo1.png"} alt="" />
            <div className="WebsiteName">
                <h1>Namaste</h1>
                <h6>Explore the ideas throught the world</h6>
            </div>
        </div>

        {/* Right side */}
        {/* Same form is used for Login and SignUp */}
        <div className="Auth-right">
                <form action="" className="SignUpForm" onSubmit={handleSubmit}>

                    <h3>{IsSignUp? "Sign Up": "Log In"}</h3>

                    {IsSignUp && <div>
                        <input type="text" placeholder="First Name" className="signup-info" name='firstname' value={data.firstname} onChange={handleChange}/>
                        <input type="text" placeholder="Last Name" className="signup-info" name='lastname' value={data.lastname} onChange={handleChange}/>
                    </div>
                    }
                    
                    <div>
                        <input type="text" placeholder="Username" className="signup-info" name='username' value={data.username} onChange={handleChange}/>
                    </div>
                    <div>
                        <input type="password" placeholder="Password" className="signup-info" name='password' value={data.password} onChange={handleChange}/>
                        {IsSignUp && <input type="password" placeholder="Confirm Password" className="signup-info" name='cpassword' value={data.confirmPassword} onChange={handleChange}/>}
                    </div>
                   
                    <span style = {{display : confirmPassword? "none": "block", color : "red", fontSize : "12px", margin : "0"}}>* Confirm Password is not same</span>
                    
                    <span onClick={() => {setIsSignUp((prev) => !prev); resetForm()}}>{IsSignUp? "Already have an account. Login! ": "Don't have an account. SignUp!"}</span>
                    <button className="button info-btn" type='submit'>{IsSignUp? "Sign Up": "Log In"}</button>

                </form>
            </div>

    </div>
  )

}

export default Auth