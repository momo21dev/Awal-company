
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
//import Header from './components/Header'
import Landing from './components/Landing'
import Vision from './components/Vision'
import Mission from './components/Mission'
import RecentWork from './components/RecentWork'
import Contact from './components/Contact'
import Constructions from './components/Constructions'
import WoodenKitchen from './components/WoodenKitchen'
import Rokham from './components/Rokham'
import Wpc from './components/Wpc'
import Wara2 from './components/Wara2'
import Bergola from './components/Bergola'
import Dehanat from './components/Dehanat'
import Karanesh from './components/Karanesh'
import Barawez from './components/Barawez'
import Tarabezat from './components/Tarabezat'
import Iron from './components/Iron'
import Barkeh from './components/Barkeh'
import Badel from './components/Badel'
import Abwab from './components/Abwab'
import Ghaza2n from './components/Ghaza2n'
import Hanager from './components/Hanager'
import Maghribya from './components/Maghribya'
import Mshare3 from './components/Mshare3'
import Documents from './components/Documents'
import Haikal from './components/Haikal'
import Art from './components/Art'
import Shlalat from './components/Shlalat'


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
        <Route path='/woodenkitchen' element={<WoodenKitchen />} />
        <Route path='/rokham' element={<Rokham />} />
        <Route path='/wpc' element={<Wpc />} />
        <Route path='/wara2' element={<Wara2 />} />
        <Route path='/bergola' element={<Bergola />} />
        <Route path='/dehanat' element={<Dehanat />} />
        <Route path='/karanesh' element={<Karanesh />} />
        <Route path='/barawez' element={<Barawez />} />
        <Route path='/tarabezat' element={<Tarabezat />} />
        <Route path='/iron' element={<Iron />} />
        <Route path='/barkeh' element={<Barkeh />} />
        <Route path='/badel' element={<Badel />} />
        <Route path='/abwab' element={<Abwab />} />
        <Route path='/ghaza2n' element={<Ghaza2n />} />
        <Route path='/hanager' element={<Hanager />} />
        <Route path='/maghribya' element={<Maghribya />} />
        <Route path='/mshare3' element={<Mshare3 />} />
        <Route path='/docs' element={<Documents />} />
        <Route path='/haikal' element={<Haikal />} />
        <Route path='/art' element={<Art />} />
        <Route path='/shlalat' element={<Shlalat />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App
