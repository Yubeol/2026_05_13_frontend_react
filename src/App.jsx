import './App.css'
import {useState} from 'react'

const style = {
  width: "500px",
  height: "300px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
}

const initialInfo = {
  이름: "John",
  국어: "",
  영어: "",
  수학: "",
  과학: ""
}

function App() {
  const [info, setInfo] = useState(initialInfo)

  const handleChange = (event) => {
    const { name, value } = event.target
    setInfo({ ...info, [name]: value })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(info)
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>이름:
        <input
          type="text"
          name="이름"
          value={info.이름}
          onChange={handleChange}
        />
      </div>
      <div>국어:
        <input
          type="number"
          name="국어"
          value={info.국어}
          onChange={handleChange}
        />
      </div>
      <div>영어:
        <input
          type="number"
          name="영어"
          value={info.영어}
          onChange={handleChange}
        />
      </div>
      <div>수학:
        <input
          type="number"
          name="수학"
          value={info.수학}
          onChange={handleChange}
        />
      </div>
      <div>과학:
        <input
          type="number"
          name="과학"
          value={info.과학}
          onChange={handleChange}
        />
      </div>
      <button>제출</button>
    </form>
  )
}

export default App
