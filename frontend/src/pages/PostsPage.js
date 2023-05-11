import React, { useContext, useEffect, useState } from 'react'

import AuthContext from '../context/AuthContext'
import PostAdmin from '../components/Post Admin/PostAdmin'
import { Link } from 'react-router-dom'
export default function PostsPage() {
  const { authTokens, logoutUser } = useContext(AuthContext)
  let [content, setContent] = useState([])
  let [comments, setComments] = useState([])
  useEffect(() => {
    getContent()
  }, [])

  const getContent = async () => {
    let response = await fetch('http://127.0.0.1:8000/api/content/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + String(authTokens.access),
      },
    })

    let data = await response.json()

    if (response.status === 200) {
      setContent(data.reverse())
    } else if (response.statusText === 'Unauthorized') {
      logoutUser()
    }
  }

  return (
    <div>
      <div className="flex justify-start p-4 items-center">
        <div
          onClick={logoutUser}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <p className="cursor-pointer">Выйти</p>
        </div>
        <Link
          to="add/"
          className="inline-flex items-center px-3 py-2 ml-4 mr-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Добавить статью
        </Link>

        <div>количество статей: {content.length}</div>
      </div>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        {content.map((elem) => (
          <PostAdmin data={elem} key={elem.id} />
        ))}
      </div>
    </div>
  )
}
