import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Error from './pages/Error'
import './App.css'

function App() {
   

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/home' element={<Home/>}></Route>
          <Route path='*' element={<Error/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
