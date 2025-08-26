
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Header from './components/Header'
import Landing from './components/Landing'
import Vision from './components/Vision'
import Mission from './components/Mission'
import RecentWork from './components/RecentWork'
import Contact from './components/Contact'
import Constructions from './components/Constructions'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/about' element={<Landing />} />
        <Route path='/vision' element={<Vision />} />
        <Route path='/mission' element={<Mission />} />
        <Route path='/recent' element={<RecentWork />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/const' element={<Constructions />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App
