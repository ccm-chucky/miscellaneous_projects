import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showLinks,setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
    const linksRef = useRef(null)
  return (
    <nav className='nav-center'>
      <div className='nav-header'>
        <img src={logo} alt='log' />
        <button
          className='nav-toggle'
          onClick={() => {
            setShowLinks(!showLinks)
          }}
        >
          <FaBars />
        </button>
      </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              )
            })}
          </ul>
        </div>
      <ul className='social-icons'>
        <li>
          <a href='https://www.twitter.com'>
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href='https://www.twitter.com'>
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href='https://www.twitter.com'>
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href='https://www.twitter.com'>
            <FaTwitter />
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
