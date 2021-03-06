import React, { Component } from 'react';
import './Header.css'
class Navbar extends Component {
    render() {
        return (
            <div>
                <header className='header'>
                    <nav>
                        <ul>
                            <li>Home</li>
                            <li className='feeds'>#</li>
                            <li>Notification</li>
                            <li>Message</li>
                            <li>Search Bar</li>
                            <li>Profile</li>
                        </ul>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Navbar;