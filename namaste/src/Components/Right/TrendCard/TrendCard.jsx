import React from 'react'
import './TrendCard.css'

import {Trends} from '../../../Data/Trends.js'

const TrendCard = () => {
  return (
    <div className="TrendCard">
        <h3>Trends for you</h3>
        {Trends.map((trend, id)=>{
            return(
                <div className="trend" key={id}>
                    <span>#{trend.name}</span>
                    <span>{trend.shares} shares</span>
                </div>
            )
        })}
    </div>
  )
}

export default TrendCard