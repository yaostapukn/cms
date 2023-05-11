import { Link } from 'react-router-dom'

export default function PostAdmin({ data }) {
  return (
    <>
      <div className="max-w-sm p-6 flex flex-col justify-between bg-white border border-gray-200 rounded-lg shadow ">
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            <Link to={`/content/${data.id}`}>{data.title}</Link>
          </h5>

          <p className="mb-3 font-normal text-gray-700 ">
            {new Date(data.updated_at).toLocaleDateString()}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <Link
              to={`/admin/${data.id}`}
              className="inline-flex  items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Изменить
            </Link>
          </div>
          <div>
            <p>{data.cat}</p>
          </div>
        </div>
      </div>
    </>
  )
}
