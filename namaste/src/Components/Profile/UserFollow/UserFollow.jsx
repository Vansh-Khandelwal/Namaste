import React from 'react'

export const UserFollow = ({person}) => {
  return (
    <div className="follower-line">
        <div className="prof-about">
        <img src={person.img} alt="" className="prof-image"/>
        <span>
            <div className="prof-name">{person.name}</div>
            <div className="prof-tag">@{person.tag}</div>
        </span>
        </div>
        <button className="follow-button">Follow</button>
    </div>
  )
}
