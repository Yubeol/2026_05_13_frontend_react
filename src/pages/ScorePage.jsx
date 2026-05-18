import React, {useState} from 'react'
import ScoresTable from '../components/score/ScoresTable'
import Form from '../components/score/Form'


const initialScores = [
  { 이름: "John", 국어: 90, 영어: 90, 수학: 80, 과학: 90 },
  { 이름: "Peter", 국어: 90, 영어: 90, 수학: 80, 과학: 90 },
  { 이름: "Susan", 국어: 90, 영어: 90, 수학: 80, 과학: 90 },
  { 이름: "Sue", 국어: 90, 영어: 90, 수학: 80, 과학: 90 },
]

const initialInfo = {
  이름: "",
  국어: "",
  영어: "",
  수학: "",
  과학: ""
}

function ScorePage() {
    const [info, setInfo] = useState(initialInfo)
    const [scores, setScores] = useState(initialScores)

    return (
        <>
            <ScoresTable scores={scores} />
            <Form info={info} setInfo={setInfo} setScores={setScores} />
        </>
    )
}

export default ScorePage
