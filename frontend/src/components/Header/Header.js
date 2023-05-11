import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'
import avatar from '../../images/avatar.svg'

export default function Header() {
  let { user } = useContext(AuthContext)

  return user ? (
    <header className="mt-4 mb-4 w-full flex justify-between p-6">
      <div>
        <Link to="/">
          <h1 className="text-4xl font-extrabold">MATH BLOG</h1>
        </Link>
        <div>
          <span className="bg-red-200">Привет {user.username}</span>
        </div>
      </div>

      <div>
        <Link to="/admin">
          <img src={avatar} alt="войти" width={'40px'} />
        </Link>
      </div>
    </header>
  ) : (
    <header className="mt-4 mb-4 w-full p-6">
      <div>
        <Link to="/">
          <h1 className="text-4xl font-extrabold">MATH BLOG</h1>
        </Link>
      </div>
    </header>
  )
}
