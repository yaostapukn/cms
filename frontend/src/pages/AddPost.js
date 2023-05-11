import { useNavigate } from 'react-router-dom'
import { useContext, useState, useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import AuthContext from '../context/AuthContext'

export default function AddPost() {
  const { authTokens } = useContext(AuthContext)
  const navigate = useNavigate()
  
  const [title, setTitle] = useState('')
  const [descr, setDescr] = useState('')
  const [cat, setCat] = useState('')

  const editorRef = useRef(null)

  const makeRequest = async (methodFetch) => {
    let response = await fetch(`http://127.0.0.1:8000/api/content/`, {
      method: methodFetch,
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + String(authTokens.access),
      },
      body: JSON.stringify({ title: title, descr: descr, cat: cat }),
    })
    

    if (title.trim() !== '' && descr.trim() !== '' && cat.trim() !== '') {
      if (methodFetch === 'POST') {
        let data = await response.json()
        setTitle(data.title)
        setDescr(data.descr)
        setCat(data.cat)
        navigate('/admin')
      } else {
        navigate('/admin')
      }
    } else {
      alert('поля не должны быть пустыми')
    }
  }

  return (
    <div className="text__editor__actions">
      <div className="text__editor">
        <div>
          <h4>Заголовок</h4>
          <input
            className="text__editor__title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            maxLength={54}
            placeholder="max 54"
          />
        </div>
        <div className="text__e__cat">
          <h4>Категория</h4>
          <input
            className="text__editor__title"
            type="text"
            value={cat}
            onChange={(e) => setCat(e.target.value)}
            maxLength={25}
            placeholder="max 25"
          />
        </div>
        <div>
          <Editor
            apiKey="252q7azeo4puwzbkem4nro8r20wa58j6jecstdmum1975aps"
            onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue={descr}
            onChange={() => setDescr(editorRef.current.getContent())}
            init={{
              height: 500,
              menubar: true,
              plugins: [
                'advlist',
                'autolink',
                'lists',
                'link',
                'image',
                'charmap',
                'preview',
                'anchor',
                'searchreplace',
                'visualblocks',
                'code',
                'fullscreen',
                'insertdatetime',
                'media',
                'table',
                'code',
                'help',
                'wordcount',
              ],
              toolbar:
                'undo redo | blocks | ' +
                'bold italic forecolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
              content_style:
                'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
            }}
          />
        </div>
      </div>

      <div onClick={() => makeRequest('POST')}>Добавить</div>
    </div>
  )
}
