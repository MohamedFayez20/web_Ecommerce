import React, { useEffect, useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { data, Link, useLocation } from 'react-router-dom';
import { PiSignInBold } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa6";
import './header.css'
const NavLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'Accessories', path: '/accessories' },
  { name: 'Blog', path: '/blog' },
];
function BtmHeader() {
  const [categories, setCategories] = useState([]);
  const location = useLocation()
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then((res) => res.json())
      .then(
        (data) => setCategories(data)
      )
  }, [])
  return (
    <div className='btm_header'>
      <div className="container">
        <nav className='nav'>
          <div className="category_nav" onClick={()=>setIsCategoryOpen(!isCategoryOpen)}>
            <div className="cat_btn"><IoMdMenu />
              <p>Categories</p>
            </div>
            <div className={`cat_nav_list ${isCategoryOpen ? "active" : ""}`}>
              {categories.map((category) => (<Link key={category.slug} to={category.slug}>{category.name}</Link>))}
            </div>
          </div>

          <div className="nav_links">
            {NavLinks.map((link) =>
              (<li key={link.path} className={location.pathname === link.path ? "active" : "" }><Link to={link.path}>{link.name} </Link></li>))}
          </div>
          <div className="sign_reg_icon">
            <Link to="/"> <PiSignInBold /></Link>
            <Link to="/"><FaUserPlus /></Link>
          </div>
        </nav>
      </div>

    </div>
  )
}

export default BtmHeader
