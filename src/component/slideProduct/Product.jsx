import React from 'react'
import { FaStar ,FaStarHalfStroke,FaCartArrowDown,FaRegHeart,FaShare} from "react-icons/fa6";


function product({item}) {
    return (
        <div className="product">
            <div className="img_product">
                <img src={item.images[0]} alt="Image" />
            </div>
            <p className="name_product">{item.title}</p>
            <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfStroke />
            </div>
             <p className="price">${item.price}</p>
             <div className="icons">
                <span><FaRegHeart /> </span>
                <span><FaCartArrowDown /> </span>
                <span><FaShare /> </span>
             </div>
        </div>
    )
}

export default product
