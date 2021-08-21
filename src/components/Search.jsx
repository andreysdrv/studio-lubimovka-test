import React from 'react'

export const Search = ({ handleSearch }) => {
  return (
    <div>
      <h2 className="search__title">Поиск</h2>
      <input
        type="text"
        onChange={ handleSearch }
      />
    </div>
  )
}
