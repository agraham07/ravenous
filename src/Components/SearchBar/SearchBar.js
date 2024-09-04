import React, { useState } from 'react';
import { dataFetch } from 'C:/Users/14234/ravenous/src/Utils/Utils.js';
import './SearchBar.css'


function SearchBar({sendDataToApp}) {

    const [ input, setInput] = useState('');

    const [ location, setLocation] = useState('');

    const [ sort, setSort ] = useState('');

    const handleInput = (e) => {
        setInput(e.target.value);
    };

    const handleLocation = (e) => {
        setLocation(e.target.value);
    }

    const handleSort = (e) => {
        setSort(e.target.value)
        e.target.style.color = "black"
    } 
    
    

    async function handleSubmit(){
      const data = await dataFetch(location, input, sort)
      console.log(data)
      sendDataToApp(data)
    }


    return (
        <div>
            <div className='sortContainer'>
                <ul className='sortOptions'>
                    <li className='option'><button className='sortButton' value="best_match" onClick={handleSort}>Best Match</button></li>
                    <li className='option'><button className='sortButton' value="rating" onClick={handleSort}>Highest Rated</button></li>
                    <li className='option'><button className='sortButton'value="review_count" onClick={handleSort}>Most Reviewed</button></li>
                </ul>
            </div>
            <div className='searchContainer'>
                <form onSubmit={handleSubmit}>
                    <input type="text" onChange={handleInput} placeholder='Search Business...'/>
                    <input type="text" onChange={handleLocation} placeholder='Where?' />
                    <button type='submit' className='submit'>Let's Eat!</button>
                </form>
            </div>
        </div>
    )
}

export default SearchBar;