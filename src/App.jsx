import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

const scores = [
  { 이름: "John", 국어: 90, 영어: 90, 수학: 80, 과학: 90 },
  { 이름: "Peter", 국어: 90, 영어: 90, 수학: 80, 과학: 90 },
  { 이름: "Susan", 국어: 90, 영어: 90, 수학: 80, 과학: 90 },
  { 이름: "Sue", 국어: 90, 영어: 90, 수학: 80, 과학: 90 },
]


const sources = [0, 1, 2, 3]

// for문 방식 (4줄)
// let tmp = []
// for (let item of sources) {
//   tmp.push(item * 2)
// }

// map 방식 (1줄)
sources.map(item => (item * 2))

function App() {

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

export default App
