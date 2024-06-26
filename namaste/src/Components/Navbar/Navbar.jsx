import React from 'react'
import { Link } from 'react-router-dom'

import { CgProfile } from "react-icons/cg";
import { RiSettings3Fill } from 'react-icons/ri'

import './Navbar.css'

import Search from '../Profile/Search/Search'
import ProfileInfoCard from '../ProfilePgLeft/ProfileInfoCard/ProfileInfoCard'
import ProfileCard from '../Profile/Profile_Card/Profile_Card'
import Following from '../Profile/Following/Following'
import TrendCard from '../Right/TrendCard/TrendCard'

import Navicons from '../Navicons/Navicons'

const Navbar = ({ user }) => {
    return (
        <>
            <nav className="navbar">
                {/* <div className="full-page-gray"></div> */}
                <div className="navbar-container container">


                    <input type="checkbox" name="info" id="nav-info" defaultChecked />
                    <label htmlFor="nav-info">
                        <CgProfile style={{ color: "#ff7b08", width: "100%", height: "100%" }} />
                    </label>

                    <div className="info-mat">
                        <ProfileCard />
                        <Navicons />
                        <ProfileInfoCard user={user} />
                    </div>

                    <h1 className="logo">
                        <Link to='../home' style={{ color: "#ff7b08" }}>
                            <img src={process.env.PUBLIC_URL + "/logo1.png"} alt="logo" className='logo' />
                        </Link>
                        Namaste
                    </h1>

                    <input type="checkbox" name="trend-following" id="nav-trend-following" defaultChecked />
                    <label htmlFor="nav-trend-following">
                        <RiSettings3Fill style={{ color: "#ff7b08", width: "100%", height: "100%" }} />
                    </label>

                    <div className="trend-following">
                        <Search />
                        <TrendCard />
                        <Following />
                    </div>

            </div>
        </nav>
        </>
    )
}

export default Navbar