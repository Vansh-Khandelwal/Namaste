import React from 'react'
import "./Loading.css"

const Loading = () => {
    return (
        <div className="spinner">
            <div className="color"></div>
            <div className="mask"></div>
        </div>
    )
}

export default Loading