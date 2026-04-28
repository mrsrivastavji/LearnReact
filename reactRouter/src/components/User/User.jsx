import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const { userid } = useParams()

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      
      <div className="bg-gray-700 text-white text-3xl px-8 py-6 rounded-xl shadow-lg">
        User: <span className="font-bold text-yellow-400">{userid}</span>
      </div>

    </div>
  )
}

export default User