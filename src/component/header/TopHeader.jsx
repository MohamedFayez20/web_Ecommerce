import React from 'react'
import Logo from '../../img/logo.png'
import { Link } from 'react-router-dom'
import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import './header.css'

function TopHeader() {
    return (
        <div className='top_header'>
            <div className="container">
                <Link className='logo' to="/"><img src={Logo} alt="Logo" /></Link>
                <form action="" className="search_box">
                    <input type="text" name='search' placeholder="Search for products..." />
                    <button type="submit">
                        <IoSearchOutline />
                    </button>
                </form>
                <div className="header_icons">
                    <div className="icon">
                        <FaRegHeart />
                        <span className='count'>0</span>
                    </div>
                    <div className="icon">
                        <AiOutlineShoppingCart />
                        <span className='count'>0</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader
