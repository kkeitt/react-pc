import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '@/pages/Login'
import Layout from '@/pages/Layout'
import { AuthComponent } from './components/AuthComponent'
import { Home } from './pages/Home'
import { Article } from './pages/Article'
import { Publish } from './pages/Publish'

function App () {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={
            <AuthComponent>
              <Layout />
            </AuthComponent>
          }>

            <Route index element={<Home />}></Route>
            <Route path='article' element={<Article />}></Route>
            <Route path='publish' element={<Publish />}></Route>
          </Route>
          <Route path='/login' element={<Login />}></Route>

        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
