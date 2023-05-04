import React, { useEffect, useState } from 'react'
import './InboxMail.css'
import { FaAngleRight } from 'react-icons/fa'
import MailBox from '../MailPage/MailBox'
// Redux
import { useDispatch, useSelector } from 'react-redux'
import { getInbox } from '../../Redux/reducers/inboxMailReducer'
import { fetchEmail } from '../../Redux/reducers/fakeMailReducer'

export default function InboxMail() {
  // redux
  const dispatch = useDispatch()
  const email = useSelector(state => state.mail.mail.toString())
  const inbox = useSelector(state => state.inbox.inbox)
  // States
  const [inboxState, setInboxState] = useState(null)
  const [btnUpdateText, setBtnUpdateText] = useState('Update Inbox')
  const [emailData, setEmailData] = useState([])

  useEffect(() => {
    dispatch(fetchEmail())
  }, [])

  function updateBtnText() {
    setTimeout(() => setBtnUpdateText('Updatin'), 0);
    setTimeout(() => setBtnUpdateText('Updatin.'), 300);
    setTimeout(() => setBtnUpdateText('Updatin..'), 600);
    setTimeout(() => setBtnUpdateText('Updatin...'), 900);
    setTimeout(() => setBtnUpdateText('Updated :)'), 2000);
    setTimeout(() => setBtnUpdateText('Update Inbox'), 3500);
  }

  async function inboxDataUpdate() {
    updateBtnText()
    const parts = email.split('@')
    const username = parts[0]
    const domain = parts[1]
    await dispatch(getInbox({ username, domain }))
    setInboxState(inbox)
  }
  
  async function getDataMailHandler(mailID) {
    const parts = email.split('@')
    const username = parts[0]
    const domain = parts[1]
    const resopnse = await fetch(`https://www.1secmail.com/api/v1/?action=readMessage&login=${username}&domain=${domain}&id=${mailID}`)
    const data = await resopnse.json()
    setEmailData(data)
    const emailDataBox = document.querySelector('.email-datas');
    emailDataBox.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className='inbox-container mt-3'>
      <div className="container">
        <div className="update-inbox" onClick={inboxDataUpdate}>
          <button className='update-inbox-btn'>{btnUpdateText}</button>
        </div>
        <div className="row">
          <div className="col-sm-12 offset-lg-2 col-lg-8">
            <div className="inbox">
              <div className="inbox-top row p-3">
                <span className='col-4'>SENDER</span>
                <span className='col-4 text-center'>SUBJECT</span>
                <span className='col-4 text-end'>VIEW</span>
              </div>
              <div className="inbox-emails-container">
                <ul className='inbox-emails-list'>
                  {inboxState && inboxState.map(mail => (
                    <li key={mail.id}>
                      <div className='inbox-mail-link row d-flex align-items-center' onClick={() => getDataMailHandler(mail.id)}>
                        <div className="col-4 inbox-email-info-box d-flex flex-column">
                          <span className='inbox-email-info-mail'>{mail.from}</span>
                        </div>
                        <span className='inbox-email-subject col-4 text-center'>{mail.subject}</span>
                        <div className='col-4 text-end position-relative'>
                          <FaAngleRight className='inbox-mail-icon' />
                          <span className='mail-date'>{mail.date}</span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="email-datas">
        <MailBox emailData={emailData} ></MailBox>
      </div>
    </div>
  )
}
