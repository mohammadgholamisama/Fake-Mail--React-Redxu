import React from 'react'
import './MailBox.css'

export default function MailBox({ emailData }) {
    return (
        <div className='mail-box my-4'>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 offset-lg-2 col-lg-8">
                        <div className="mail-box-info">
                            <span className='d-inline-block'>
                                <span className='mail-box-title'>from : </span> : <span className="mail-box-dsk">{emailData.from}</span>
                            </span>
                            <br />
                            <span className='mt-2 d-inline-block'>
                                <span className='mail-box-title'>subject : </span> : <span className="mail-box-dsk">{emailData.subject}</span>
                            </span>
                            <br />
                            <span className='mt-2 d-inline-block'>
                                <span className='mail-box-title'>date : </span> : <span className="mail-box-dsk">{emailData.date}</span>
                            </span>
                            <br />
                            <div className='mt-4'>
                                <span className='mail-box-title'>text : </span> :
                                <p className="mail-box-dsk mt-3">{emailData.textBody}</p>
                            </div>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
