import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
export default function AddCommets() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [textComm, setTextComm] = useState('')

  const [comms, setComms] = useState([])
  useEffect(() => {
    fetch(`http://localhost:8000/api/public/comments/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setComms(data)
      })
  }, [name])

  const { id } = useParams()
  const makeRequest = async (methodFetch) => {
    let response = await fetch(
      `http://localhost:8000/api/public/comments/${id}/`,
      {
        method: methodFetch,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          comm_descr: textComm,
          content: id,
        }),
      }
    )
    if (name.trim() !== '' && email.trim() !== '' && textComm.trim() !== '') {
      let data = await response.json()
      setEmail('')
      setName('')
      setTextComm('')
    } else {
      alert('поля не должны быть пустыми')
    }
  }
  return (
    <div className="mt-6 mb-6">
      <form className="mb-6">
        <div className="">
          <div className="border border-gray-400">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className=" py-2 px-4 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none"
              placeholder="имя"
            />
          </div>
          <div className="border border-gray-400 mt-4">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className=" py-2 px-4 text-sm text-gray-900 w-full border-0 focus:ring-0 focus:outline-none"
              placeholder="email"
            />
          </div>
        </div>

        <div className="py-2 px-4 mb-4 bg-white  border border-gray-400 mt-4">
          <label htmlFor="comment" className="sr-only">
            Текст комментария
          </label>
          <textarea
            value={textComm}
            onChange={(e) => setTextComm(e.target.value)}
            id="comment"
            rows="6"
            className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none "
            placeholder="Текст комментария..."
            required
          ></textarea>
        </div>
      </form>

      <button
        onClick={() => makeRequest('POST')}
        className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg  hover:bg-blue-800"
      >
        Опубликовать комментарий
      </button>
      <div>
        {comms.map((elem) => (
          <div
            key={elem.id}
            className="block mt-6 mb-6 p-6 bg-white border border-gray-200 rounded-lg shadow"
          >
            <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 ">
              {elem.name} {elem.email}
            </h5>
            <p className="font-normal text-gray-700">{elem.comm_descr}</p>
            <p className="font-normal text-gray-400">
              {new Date(elem.created_at_comm).toLocaleDateString()}{' '}
              {new Date(elem.created_at_comm).toLocaleTimeString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
