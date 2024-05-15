import React from 'react'
import { useState } from 'react'
import './Auth.css'
import {useDispatch, useSelector} from 'react-redux'
import { logIn, signUp } from '../../Actions/AuthActions/logIn'

import Loading from '../../Components/Loading.jsx'
import Error from '../../Components/Error'

const Auth = () => {

    const [IsSignUp, setIsSignUp] = useState(true)

    const dispatch = useDispatch()

    const { loading, error } = useSelector((state) => state.authReducer)

    const [data, setData] = useState({
        Firstname : "",
        Lastname : "",
        Username : "",
        Password : "",
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
            if (data.Password === data.cpassword)
            {
                dispatch(signUp(data))
            }

            else
            {
                setConfirmPassword(false)
            }
        }

        else
        {
            dispatch(logIn(data))
        }
    }

    const resetForm = () => {

        setConfirmPassword(true)

        setData({ 
            Firstname : "",
            Lastname : "",
            Username : "",
            Password : "",
            cpassword : ""
        })
    }

  return (
      <>
          {
              error ? <Error error={error} /> :
                  loading ? <Loading /> :
                      <div className="Auth">
                          {/* Left side */}
                          <div className="Auth-left">
                              <img src={process.env.PUBLIC_URL + "/logo1.png"} alt="" />
                              <div className="WebsiteName">
                                  <h1>Namaste</h1>
                                  <h6>Explore the ideas throught the world</h6>
                              </div>
                          </div>

                          {/* Right side */}
                          {/* Same form is used for Login and SignUp */}
                          <div className="Auth-right">
                              <form action="" className="SignUpForm" onSubmit={handleSubmit}>

                                  <h3>{IsSignUp ? "Sign Up" : "Log In"}</h3>

                                  {IsSignUp && <div>
                                      <input type="text" placeholder="First Name" className="signup-info" name='Firstname' value={data.Firstname} onChange={handleChange} />
                                      <input type="text" placeholder="Last Name" className="signup-info" name='Lastname' value={data.Lastname} onChange={handleChange} />
                                  </div>
                                  }

                                  <div>
                                      <input type="text" placeholder="Username" className="signup-info" name='Username' value={data.Username} onChange={handleChange} />
                                  </div>
                                  <div>
                                      <input type="password" placeholder="Password" className="signup-info" name='Password' value={data.Password} onChange={handleChange} />
                                      {IsSignUp && <input type="password" placeholder="Confirm Password" className="signup-info" name='cpassword' value={data.cpassword} onChange={handleChange} />}
                                  </div>

                                  <span style={{ display: confirmPassword ? "none" : "block", color: "red", fontSize: "12px", margin: "0" }}>* Confirm Password is not same</span>

                                  <span onClick={() => { setIsSignUp((prev) => !prev); resetForm() }}>{IsSignUp ? <span>Already have an account. <b>Log In!</b></span> : <span>Don't have an account. <b>Sign Up!</b></span>}</span>

                                  <button className="button info-btn" type='submit' disabled={loading}>
                                      {loading ? "loading" : IsSignUp ? "Sign Up" : "Log In"}
                                  </button>

                              </form>
                          </div>

                      </div>
          }
      </>
  )

}

export default Auth