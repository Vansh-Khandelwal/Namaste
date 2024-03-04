import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import {HiHome} from 'react-icons/hi'
import {IoNotifications} from 'react-icons/io5'
import {RiSettings3Fill, RiChatSmile2Fill} from 'react-icons/ri'
import { MdCancel } from "react-icons/md";

import './Navicons.css'

const Navicons = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (visible) {
            setTimeout(() => {
                setVisible(false)
            }, 4000);
        }
    }, [visible])

  return (
      <>
          <div className="alert-info" style={visible ? { display: "flex" } : { display: "none" }} onClose={() => setVisible(false)}>
              This feature is not yet added <MdCancel onClick={() => setVisible(false)} />
          </div>
          <div className="navicons">
              <Link to='../home' style={{ color: "#ff7b08" }}>
                  <HiHome />
              </Link>

              <Link style={{ color: "#ff7b08" }} onClick={() => setVisible(true)}>
                  <IoNotifications />
              </Link>
              <Link to='../chat' style={{ color: "#ff7b08" }}>
                  <RiChatSmile2Fill />
              </Link>
              <Link style={{ color: "#ff7b08" }} onClick={() => setVisible(true)}>
                  <RiSettings3Fill />
              </Link>
          </div>
      </>
  )
}

export default Navicons