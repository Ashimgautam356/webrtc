import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import SocketProvider from './providers/Socket'
import Room from './pages/Room'
import { PeerProvider } from './providers/Peer'
function App() {

  return (
    <BrowserRouter>
        <SocketProvider>
          <PeerProvider>

          <Routes>
            <Route path='/' element={<LandingPage></LandingPage>}></Route>
            <Route path='/room/:id' element={<Room></Room>}></Route>
          </Routes>
          </PeerProvider>
        </SocketProvider>
    </BrowserRouter>
  )
}

export default App
