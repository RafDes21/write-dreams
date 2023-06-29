import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='flex justify-around bg-slate-300'>
      <h1>Dreams</h1>
      <nav>
        <ul>
            <li><Link href={'/'}>HOME</Link></li>
            <li><Link href={'/about'}>ABOUT</Link></li>
            <li><Link href={'/categories'}>CATEGORIES</Link></li>
        </ul>
      </nav>
      <button>Login</button>
    </header>
  )
}

export default Header
