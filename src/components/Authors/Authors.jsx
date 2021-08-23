import { Author } from "../Author/Author"

export const Authors = ({ cards }) => {
  
  const sortedCards = cards.sort((a, b) => {
    if (a.author_lastName > b.author_lastName) {
      return 1
    }
    if (a.author_lastName < b.author_lastName) {
      return -1
    }
    return 0
  })

  let groupedArr = []

  for (let key of sortedCards) {
    const authorInArr = key.author_lastName + ' ' + key.author_firstName
    if (!groupedArr.includes(authorInArr)) {
      groupedArr.push(authorInArr)
    }
  }

  const newData = Object
    .values(groupedArr.reduce((acc, n) => {
      return ((acc[n[0]] = acc[n[0]] || []).push(n), acc)
    }, {}))

  return (
    <ul className="authors">
      {
        newData.map((group) => (<Author
          key={ group[0] }
          group={ group }
        >
        </Author>))
      }
    </ul>
  )
}
