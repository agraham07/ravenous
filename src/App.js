import React, { useState } from 'react';
import './App.css';
import BusinessList from './Components/BusinessList/BusinessList';
import SearchBar from './Components/SearchBar/SearchBar';

function App() {

  const [ dataFromSearch, setDataFromSearch ] = useState([])

  const handleDataFromSearch = (data) => {
    setDataFromSearch(data);
    console.log(dataFromSearch)
  }

  return (
    <div>
      <header className="App-header">
        <h1 className='header-text'>What Are You Ravenous For?</h1>
      </header>
      <div className='search'>
        <SearchBar sendDataToApp={handleDataFromSearch}/>
      </div>
      <BusinessList businessArray={dataFromSearch} />
    </div>
  );
}

export default App;
