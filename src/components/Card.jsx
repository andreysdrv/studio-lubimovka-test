import React from 'react'

export const Card = ({ card }) => {
  return (
    <li className="cards__item">
      <p className="cards__text">{ card.title }</p>
      <p className="cards__autor">{ card.author_firstName }</p>
      <p className="cards__autor">{ card.author_lastName }</p>
      <p className="cards__info">{ card.city }</p>
      <p className="cards__info">{ card.year }</p>
    </li>
  )
}
