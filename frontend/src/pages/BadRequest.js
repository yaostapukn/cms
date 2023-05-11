import { Link } from 'react-router-dom'
export default function BadRequest() {
  return (
    <div>
      <h2>
        Произошла ошибка, <Link to="/">домой</Link>
      </h2>
    </div>
  )
}
