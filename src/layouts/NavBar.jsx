import React from 'react'
import { Link } from 'react-router-dom'
import Marque from './Marque'
import { BsCart4 } from 'react-icons/bs'
import '../styles/navBar.css'

const NavBar = ({cart}) => {
  return (
    <div>
        <Marque/>
      <div className='navbar-content'></div>
      <header className='nav d-flex just-content-between align-items-center'>
        <ul>
            <li className='fs-4'>
                <Link to={"/"}>
               <h2 className='fst-italic text-white'>Dafezy</h2> 
               </Link>
                {/* <Link to={"/"}>jumia</Link> */}
            </li>
        </ul>
        <div className='navbar'>
        <div className='SEARCH w-50 d-none d-lg-block d-flex' >
            <form action="">
                <input type="search" 
                placeholder='search products, brands and categories' 
                className='w-100' />
            </form>
            <div>
            <nav>
            <ul className='navR list-unstyled d-flex gap-4'>
            <li className='fs-4 text-decoration-none '> Account
            </li>
            <li className='fs-4'>Help</li>
            <Link to='/Cart'>
            <li className='text-decoration-none fs-4'><BsCart4/></li>({cart.length})
            </Link>
            </ul>
            </nav>
            </div>
            </div>
        </div>
      </header>
    </div>
  )
}

export default NavBar
