import React, { useState, useEffect } from 'react'
import { Search } from "./Search";
import data from '../utils/data.json'
import { Card } from './Card';

function App() {
  const [cards, setCards] = useState([])

  useEffect(() => {
    setCards(data.result)
  }, [cards])

  const [value, setValue] = useState('')

  const filteredListByTitle = cards.filter((card) => {
    return card.title.toLowerCase().includes(value.toLowerCase())
  })

  const filteredListByAuthor = cards.filter((card) => {
    return card.author_firstName.toLowerCase().includes(value.toLowerCase())
  })

  const handleSearch = (e) => {
    setValue(e.target.value)
  }

  return (
    <>
      <Search
        handleSearch={ handleSearch }
      />
      <ul className="cards">
        {
          filteredListByTitle.map((card) => (<Card key={card._id}
            card={card}
          />))
        }
      </ul>
      <ul>
        {/* не работает */}
        {
          filteredListByAuthor.map((card) => (<> key={card._id}
            <li> 
            </li>
          </>))
        }
      </ul>
    </>
  );
}

export default App;
