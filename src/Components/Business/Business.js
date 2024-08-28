import React from 'react';
import './Business.css';
import { MdStarRate } from 'react-icons/md';




function Business({ imgFile, name, address, city, zipcode, category, rating, reviewCount }) {
    return (
        <div className="bcontainer">
            <img src={imgFile} className='bimg' alt=""/>
            <div className='bheader'>
                <h1>{name}</h1>
            </div>
            <ul className='blist1'>
                <li>{address}</li>
                <li>{city}</li>
                <li>{zipcode}</li>
            </ul>
            <ul className='blist2'>
                <li style={{color: "maroon", fontStyle:"italic"}}>{category}</li>
                <li style={{color: "maroon"}}>{rating}<MdStarRate /></li>
                <li>{reviewCount}</li>
            </ul>
        </div>
    )
}

export default Business;