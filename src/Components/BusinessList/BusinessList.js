import React from 'react';
import Business from '../Business/Business';
import './BusinessList.css';


function BusinessList({ businessArray }){
    return (
        <div className='businessList'>
            {businessArray.map(business => {
                return <Business key={businessArray.indexOf(business) + 1} imgFile={business.image_url} name={business.name} address={business.location.address1} city={business.location.city} zipcode={business.location.zip_code} category={business.categories.title} rating={business.rating} reviewCount={business.review_count} />
            })}
        </div>
    );
}

export default BusinessList;