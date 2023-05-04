import React from 'react'
import { BiMailSend } from 'react-icons/bi'

export default function Navbar() {
    return (
        <nav className='text-white d-flex justify-content-center align-items-center py-2'>
            <BiMailSend className='navbar-icon fs-1 me-2'></BiMailSend>
            <span className="navbar-text fs-3">
                FAKE<span style={{color: '#2af80e'}}>MAIL</span>
            </span>

        </nav>
    )
}
