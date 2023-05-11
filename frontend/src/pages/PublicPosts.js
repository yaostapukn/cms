import { useState, useEffect } from 'react'


import Post from '../components/Post/Post'
export default function PublicPosts() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/public/?format=json')
      .then((response) => response.json())
      .then((data) => {
        setData(data.reverse())
      })
  }, [])

  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
      {data.map((elem) => (
        <Post key={elem.id} data={elem} />
      ))}
    </div>
  )
}
