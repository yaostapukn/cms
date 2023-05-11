import PublicPostDetailComponents from '../components/PublicPostDetail/PublicPostDetailComponents'
import AddCommets from '../components/Comments/AddComments'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
export default function PublicPostDetailPage() {
  const nav = useNavigate()
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [comm, setComm] = useState(null)
  useEffect(() => {
    async function fetchPost() {
      const response = await fetch(`http://localhost:8000/api/public/${id}/`)
      const responseComm = await fetch(
        `http://127.0.0.1:8000/api/public/comments/${id}`
      )
      const data = await response.json()
      const dataComm = await responseComm.json()
      if (response.status === 404 || responseComm.status === 404) {
        nav('/')
      }
      setPost(data)
      setComm(dataComm)
    }

    fetchPost()
  }, [id])

  if (!post && !comm) {
    return <div>Loading...</div>
  }

  return (
    <div className="w-2/3">
      <PublicPostDetailComponents data={post} comments={comm} />
      <AddCommets/>
    </div>
  )
}
