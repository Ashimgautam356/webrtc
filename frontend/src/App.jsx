import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import SocketProvider from './providers/Socket'
import Room from './pages/Room'

function App() {

  return (
    <BrowserRouter>
        <SocketProvider>
          <Routes>
            <Route path='/' element={<LandingPage></LandingPage>}></Route>
            <Route path='/room/:id' element={<Room></Room>}></Route>
          </Routes>
        </SocketProvider>
    </BrowserRouter>
  )
}

export default App
