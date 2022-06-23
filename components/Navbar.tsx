import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <Link href='/'>
            <a>Home |</a>
          </Link>
          <Link href='/about'>
            <a> About</a>
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar