import React from 'react';
import './App.css';
import BusinessList from './Components/BusinessList/BusinessList';
import SearchBar from './Components/SearchBar/SearchBar';
import Image from '../src/Components/Business/mockBusinessImg.jpg'

function App() {

  const businessArray = [
    {imgFile: Image, name: "Piper's Pizza", address: "42 Wallaby Way", city: "Sydney", zipcode: "37313", category: "Italian", rating: "4.5", reviewCount: "1472 Reviews"},
    {imgFile: Image, name: "Piper's Pizza", address: "42 Wallaby Way", city: "Sydney", zipcode: "37313", category: "Italian", rating: "4.5", reviewCount: "1472 Reviews"},
    {imgFile: Image, name: "Piper's Pizza", address: "42 Wallaby Way", city: "Sydney", zipcode: "37313", category: "Italian", rating: "4.5", reviewCount: "1472 Reviews"},
    {imgFile: Image, name: "Piper's Pizza", address: "42 Wallaby Way", city: "Sydney", zipcode: "37313", category: "Italian", rating: "4.5", reviewCount: "1472 Reviews"},
    {imgFile: Image, name: "Piper's Pizza", address: "42 Wallaby Way", city: "Sydney", zipcode: "37313", category: "Italian", rating: "4.5", reviewCount: "1472 Reviews"},
    {imgFile: Image, name: "Piper's Pizza", address: "42 Wallaby Way", city: "Sydney", zipcode: "37313", category: "Italian", rating: "4.5", reviewCount: "1472 Reviews"}
]

  return (
    <body>
      <header className="App-header">
        <h1 className='header-text'>What Are You Ravenous For?</h1>
      </header>
      <div className='search'>
        <SearchBar />
      </div>
      <BusinessList businessArray={businessArray} />
    </body>
  );
}

export default App;
