import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex justify-center">
      <h1 className="bg-red-400 text-white p-4">Hello World!</h1> 
    </div>
  )
}

export default App
