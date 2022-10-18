import React from 'react'
import './footer.css'
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from 'react-icons/bs'

export default function Footer() {
  return (
    <div className='footer-container'>
      <p className='footer-text'>© 2021-2022 Todo. All Rights Reserved.</p>
      <div className='footer-social-icons'>
        <BsFacebook className='footer-icons' />
        <BsInstagram className='footer-icons' />
        <BsTwitter className='footer-icons' />
        <BsGithub className='footer-icons' />
      </div>
    </div>
  )
}
