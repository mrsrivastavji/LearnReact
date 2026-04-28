import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()

  return (
    <div className="flex flex-col items-center justify-center text-center m-6 p-6 bg-gray-700 text-white rounded-xl shadow-lg">
      
      <h1 className="text-3xl font-bold mb-4">
        Github Followers: {data.followers}
      </h1>

      <img
        src={data.avatar_url}
        alt="Github Profile"
        className="w-72 rounded-xl border-4 border-white"
      />

      <h2 className="text-2xl mt-4 font-semibold">
        {data.name}
      </h2>

      <p className="text-lg text-gray-300">
        @{data.login}
      </p>

    </div>
  )
}

export default Github

// Loader Function
export const githubInfoLoader = async () => {
  const response = await fetch(
    'https://api.github.com/users/mrsrivastavji'
  )

  if (!response.ok) {
    throw new Error('Failed to fetch Github data')
  }

  return response.json()
}