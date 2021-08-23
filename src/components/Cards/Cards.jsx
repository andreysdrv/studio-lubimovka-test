import { Card } from '../Card/Card';

export const Cards = ({ cards }) => {
  return (
    <ul className="cards">
    {
      cards.map((card) => (<Card
        key={card._id}
        card={card}
      />))
    }
  </ul>
  )
}