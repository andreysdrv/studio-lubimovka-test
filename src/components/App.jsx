import React, { useState } from 'react'
import data from '../utils/data.json'
import { Search } from "./Search";
import { Cards } from './Cards';
import { Authors } from './Authors';

function App() {
  const [cards, setCards] = useState([])
  const [value, setValue] = useState('')
  const [title, setTitle] = useState('Поиск')

  const onSearchSubmit = (searchValue) => {
    const filteredListByTitle = data.result.filter((card) => {
      return card.title.toLowerCase().includes(searchValue.toLowerCase())
            || card.author_firstName.toLowerCase().includes(searchValue.toLowerCase())
            || card.author_lastName.toLowerCase().includes(searchValue.toLowerCase())
    })

    if (filteredListByTitle.length !== 0) {
      setTitle(`По запоросу «${value}» мы нашли`)
    } else {
      setTitle(`По запоросу «${value}» мы ничего не нашли`)
    }

    setCards(filteredListByTitle)
  }

  const handleChange = (inputValue) => {
    setValue(inputValue)
  } 

  return (
    <div className="wrapper">
      <Search
        onSearchSubmit={ onSearchSubmit }
        handleChange={ handleChange }
        cards={ cards }
        title={ title }
        value={ value }
      />
      <div className="results">
        <Cards 
          cards={ cards }
        />
        <Authors
          cards={ cards }
        />
      </div>
    </div>
  );
}

export default App;