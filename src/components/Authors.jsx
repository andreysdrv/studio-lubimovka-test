import { Author } from "./Author"

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

  const data = sortedCards.reduce((r, e) => {
    let group = e.author_lastName[0]
    if (!r[group]) {
      r[group] = {group, children: [e]}
    } else {
      r[group].children.push(e);
    }
    return r;
  }, {})

  console.log('Object.keys', Object.keys(data))

  const groupData = Object.keys(data).reduce((acc, cur, i) => {
    acc[i] = {
      id: cur
    }
    return acc
  }, [])

  console.log(groupData)

  return (
    <ul className="authors">
      {/* {
        groupData.map((item) => (<p>{item.id}</p>))
      } */}
      {
        sortedCards.map((card, idx) => (<Author
          key={ card._id }
          card={ card }
          groupData={ groupData }
          // groupIdx={ Object.keys(data)[idx] }
        >
          {/* {
            groupData.map((group) => (<p key={ group.id }>
              { group.id }
            </p>))
          } */}
        </Author>))
      }
    </ul>
  )
}
