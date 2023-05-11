import { useEffect } from 'react'
export default function PublicPostDetailComponents({ data }) {
  useEffect(() => {
    if (typeof window?.MathJax !== 'undefined') {
      window.MathJax.typeset()
    }
  }, [])

  return (
    <div>
      <div>
        <h1 className='text-3xl'>{data.title}</h1>
      </div>

      <div dangerouslySetInnerHTML={{ __html: data.descr }}></div>
    </div>
  )
}
