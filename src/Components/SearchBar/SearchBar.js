import React, { useState, useEffect } from 'react';
import './SearchBar.css';



function SearchBar() {

    const [ sort, setSort ] = useState({});

    const paramURL = 'https://api.yelp.com/v3/businesses/search?sort_by='

    const options = {method: 'GET', headers: {accept: 'application/json'}};

    const sortOptions = {
        best_Match: 'best_match&limit=20',
        rating: 'rating&limit=20',
        review_Mount: 'review_count&limit=20'
    }

    const handleSort = (e) => {
        if(e.target.value == 'bestMatch'){
            fetch(paramURL + sortOptions.best_Match, options)
            .then((res) => res.json())
            .then((res) => {
                setSort({res});
            })
        } else if(e.target.value == 'highestRated'){
            fetch(paramURL + sortOptions.rating, options)
            .then((res) => res.json())
            .then((res) => {
                setSort({res});
            })
        } else if(e.target.value == 'mostReviewed'){
            fetch(paramURL + sortOptions.review_Mount, options)
            .then((res) => res.json())
            .then((res) => {
                setSort({res})
            })
        }
    }


    return (
        <div>
            <div className='sortContainer'>
                <ul className='sortOptions'>
                    <li className='option'><button className='sortButton' value='bestMatch' onClick={handleSort}>Best Match</button></li>
                    <li className='option'><button className='sortButton' value='highestRated' onClick={handleSort}>Highest Rated</button></li>
                    <li className='option'><button className='sortButton' value='mostReviewed' onClick={handleSort}>Most Reviewed</button></li>
                </ul>
            </div>
            <div className='searchContainer'>
                <form action='#' method='get'>
                    <input type="text" placeholder='Search Business...'/>
                    <input type="text" placeholder='Where?' />
                    <button type='submit' className='submit'>Let's Eat!</button>
                </form>
            </div>
        </div>
    )
}

export default SearchBar;