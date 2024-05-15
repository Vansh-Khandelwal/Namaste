import React from 'react'
import './Error.css'

import { useDispatch } from 'react-redux'
import { refresh } from '../Actions/AuthActions/logIn'

const Error = ({ error }) => {
    const dispatch = useDispatch()

    const errorHandle = () => {
        // console.log(error)
        dispatch(refresh(error))
    }

    return (
        <div className="error">
            <h1 className="error-title">Something went wrong</h1>
            <button onClick={errorHandle} className="button">Back</button>
        </div>
    )
}

export default Error