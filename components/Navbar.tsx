import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className='links'>
          <Link href='/'>
            <a>Home |</a>
          </Link>
          <Link href='/about'>
            <a> About</a>
          </Link>
        </ul>
      </nav>
      <style jsx> {`
        .links {
          background: #FFFFFF;
        }
      `} </style>
    </div>
  )
}

export default Navbar