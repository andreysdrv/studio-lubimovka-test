export const Author = ({ card, groupData, children, groupIdx }) => {


  return (
    <li className="authors__item">
      <p className="authors__group">{ card.author_lastName.charAt(0) }</p>
      {/* <p>{ groupIdx }</p> */}
      <p className="authors__name">{ card.author_lastName } {card.author_firstName}</p>
      {children}
    </li>
  )
}