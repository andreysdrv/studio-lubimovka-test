export const Author = ({ group }) => {

  return (
    <li className="authors__item">
      <p className="authors__group">{ group[0].charAt(0) }</p>
      {
        group.map((author) => (<p className="authors__name" key={group.indexOf(author)}>
          {
            author
          }
        </p>))
      }
    </li>
  )
}