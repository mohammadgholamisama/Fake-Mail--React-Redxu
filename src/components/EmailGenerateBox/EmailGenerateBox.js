import React, { useEffect, useState } from 'react'
import './EmailGenerateBox.css'
import { RiFileCopyFill } from 'react-icons/ri'
import { HiOutlineRefresh } from 'react-icons/hi'
// Redux
import { useDispatch, useSelector } from 'react-redux'
import { fetchEmail } from '../../Redux/reducers/fakeMailReducer'

export default function EmailGenerateBox() {

  const dispatch = useDispatch()
  const email = useSelector(state => state.mail.mail.toString())
  const [mailState, SetMailState] = useState('')

  useEffect(() => {
    dispatch(fetchEmail())
  }, [dispatch])

  useEffect(() => {
    if (email) {
      SetMailState(email)
    } else {
      SetMailState('Loading...')
    }
  }, [email])


  function newEmilHandler() {
    dispatch(fetchEmail())
  }

  function copyEmailHandler() {
    if (mailState !== 'Loading...') {
      navigator.clipboard.writeText(mailState);
      document.querySelector('.mail-box-input').select()
    }
  }

  return (
    <div className='mail-box d-flex justify-content-center'>
      <div className="mail-box-container">
        <h2 className='mail-box-desk mt-3'>Your Temporary Email Address</h2>
        <div className="mail-box-generate-box d-flex justify-content-center mt-4">
          <input type="text" className='mail-box-input' value={mailState} readOnly />
          <div className="ms-3">
            <button className='mail-box-btn' onClick={copyEmailHandler}><RiFileCopyFill /></button>
          </div>
          <button className='mail-refresh' onClick={newEmilHandler}><HiOutlineRefresh /></button>
        </div>
        <div className="text-center mt-3">
          <button className='mibile-mod-copy' onClick={copyEmailHandler}><RiFileCopyFill /> Copy Email</button>
        </div>
      </div>
    </div>
  )
}
