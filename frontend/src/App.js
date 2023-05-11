import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { AuthProvider } from './context/AuthContext'

import LoginPage from './pages/LoginPage'
import Header from './components/Header/Header'
import PostsPage from './pages/PostsPage'
import PostDetailPage from './pages/PostDetailPage'
import PrivateRoute from './utils/PrivateRoute'
import PublicPosts from './pages/PublicPosts'
import PublicPostDetailPage from './pages/PublicPostDetailPage'
import AddPost from './pages/AddPost'

function App() {
  return (
    <div className="flex flex-col items-center ">
      <Router>
        <>
          <AuthProvider>
            <Header />

            <Routes>
              <Route
                path="/admin"
                element={
                  <PrivateRoute>
                    <PostsPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/admin/:id"
                element={
                  <PrivateRoute>
                    <PostDetailPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/admin/add"
                element={
                  <PrivateRoute>
                    <AddPost />
                  </PrivateRoute>
                }
              />

              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </AuthProvider>
        </>

        <Routes>
          <Route path="/" element={<PublicPosts />} />

          <Route path="/content/:id" element={<PublicPostDetailPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
