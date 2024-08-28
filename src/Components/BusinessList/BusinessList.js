import React from 'react';
import Business from '../Business/Business';
import './BusinessList.css';
import Image from '../Business/mockBusinessImg.jpg'


function BusinessList({ businessArray }){
    return (
        <div className='businessList'>
            {businessArray.map(business => {
                return <Business imgFile={business.imgFile} name={business.name} address={business.address} city={business.city} zipcode={business.zipcode} category={business.category} rating={business.rating} reviewCount={business.reviewCount} />
            })}
        </div>
    );
}

export default BusinessList;