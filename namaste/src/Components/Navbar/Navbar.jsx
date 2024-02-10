import React from 'react'
import ProfilePgLeft from '../ProfilePgLeft/ProfilePgLeft'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav class="navbar">
            <div class="navbar-container container">
                <input type="checkbox" name="" id="nav-items" />
                <div class="hamburger-lines">
                    <span class="line line1"></span>
                    <span class="line line2"></span>
                    <span class="line line3"></span>
                </div>
                <ul class="menu-items">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Profile</a></li>
                </ul>

                <h1 class="logo">Navbar</h1>

                <input type="checkbox" name="info" id="nav-info" defaultChecked />
                <div className="info-prof">
                    <div class="hl">
                        <span class="line l1"></span>
                        <span class="line l2"></span>
                        <span class="line l3"></span>
                    </div>
                    <div className="info-mat">
                        <ProfilePgLeft />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar