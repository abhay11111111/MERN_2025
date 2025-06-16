import React from 'react'
import { Link } from 'react-router'


const Navbar = () => {
  return <header className='bg-base-300 boder-b border-base-content/10'>
    <div className='mx-auto max-w-6xl p-4'>
        <div className='flex items-center justify-between'>
            <h1 className='text-3xl font-bold text-primary font-mono tracking-tighter'>THINKBOARD</h1>
            <div className='flex items-center gap-4'>
                <Link to = {'/addnote'} className = 'btn btn-primary'>+ Create</Link>
            </div>
        </div>
      
    </div>
  </header>
}

export default Navbar
