import React from 'react'

const scores = [
  { 이름: "John", 국어: 90, 영어: 90, 수학: 80, 과학: 90 },
  { 이름: "Peter", 국어: 90, 영어: 90, 수학: 80, 과학: 90 },
  { 이름: "Susan", 국어: 90, 영어: 90, 수학: 80, 과학: 90 },
  { 이름: "Sue", 국어: 90, 영어: 90, 수학: 80, 과학: 90 },
]

const sources = [0, 1, 2, 3]

sources.map(item => (item * 2))

function scoresTable() {
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

export default scoresTable
