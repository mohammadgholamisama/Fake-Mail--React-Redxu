import React from 'react'
import InboxMail from '../InboxMail/InboxMail'
import Navbar from '../Navbar/Navbar'
import EmailBox from '../EmailBox/EmailBox'

export default function Home() {
    return (
        <>
            <div className="header">
                <div className="container">
                    <Navbar />
                    <EmailBox />
                </div>
            </div>
            <InboxMail />
        </>
    )
}
