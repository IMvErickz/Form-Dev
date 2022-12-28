import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Home } from './screens/Home'
import { Informations } from './screens/Informations'

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/informations' element={<Informations/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
