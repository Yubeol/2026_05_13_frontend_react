import React from 'react'

console.log("Hello ScoresTable")

function ScoresTable({scores}) {
  return (

    <table border="1">
      <tr>
        {
          Object.keys(scores[0]).map(key=>(
            <th>{key}</th>
          ))
        }

      </tr>
      {/* js에서 for문 작업 */}
      {scores.map(item =>
      (
        <tr>
          {
            Object.values(item).map(values=>(
              <td>{values}</td>
            ))
          }
        </tr>
      )
      )
      }

    </table>
  )
}

export default ScoresTable
