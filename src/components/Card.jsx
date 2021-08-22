export const Card = ({ card }) => {
  return (
    <li className="cards__item">
      <p className="cards__text">{ card.title }</p>
      <p className="cards__author">{ card.author_lastName } <br/> { card.author_firstName }</p>
      <p className="cards__info">{ card.city } <br/> { card.year }</p>
    </li>
  )
}