import React from 'react'
import { Link } from 'react-router-dom'

function HeaderBar() {
  return (
    <div>
      <Link style={{marginLeft:"15px"}} to="/score"><button>점수</button></Link>
      <Link style={{marginLeft:"15px"}} to="/employee"><button>고용인 정보</button></Link>
      <Link style={{marginLeft:"15px"}} to="/user"><button>사용자</button></Link>
    </div>
  )
}

export default HeaderBar
