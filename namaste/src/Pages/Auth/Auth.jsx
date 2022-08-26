import React from 'react'
import './Auth.css'

const Auth = () => {
  return (
    <div className="Auth">
        <div className="Auth-left">
            <img src={process.env.PUBLIC_URL+"./logo1.png"} alt="" />
            <div className="WebsiteName">
                <h1>Namaste</h1>
                <h6>Explore the ideas throught the world</h6>
            </div>
        </div>

        {SignUp()}

    </div>
  )

    function SignUp(){
        return(
            <div className="Auth-right">
                <form action="" className="SignUpForm">

                    <h3>Sign Up</h3>

                    <div>
                        <input type="text" placeholder="First Name" className="signup-info" name='firstname'/>
                        <input type="text" placeholder="Last Name" className="signup-info" name='lastname'/>
                    </div>
                    <div>
                        <input type="text" placeholder="Username" className="signup-info" name='username'/>
                    </div>
                    <div>
                        <input type="text" placeholder="Password" className="signup-info" name='password'/>
                        <input type="text" placeholder="Confirm Password" className="signup-info" name='cpassword'/>
                    </div>

                    <span>Already have an account.Login! <button className="button info-btn" type='submit'>Sign Up</button></span>

                </form>
            </div>
        )
    }

}

export default Auth