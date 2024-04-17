import { useState } from 'react'
import './App.css'
import Header from '../component/header'
import Info from '../component/info'
import Card from '../component/card'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <Header />
        <Info />
        <Card />
      </div>
    </>
  )
}

export default App
