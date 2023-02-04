import { useEffect,useState } from 'react'
import './app.css'
import AOS from 'aos';
import Table from './components/table/Table.jsx'
import 'aos/dist/aos.css';
import { ReactComponent as Loader } from "./assets/vite.svg"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Landing';


function App() {
  const [loading, setLoading] = useState(true)
  
  
  useEffect(()=>{
    AOS.init({
      duration : 2000,
      delay: 1000,
      startEvent: 'DOMContentLoaded',
      offset: 0,
      once: false,
      mirror: false, 
    });
    AOS.refreshHard()
    setTimeout(() => { setLoading(false) }, 3000)
  },[])

  return (
    loading ? 
    <div className='loader'>
      <Loader/>
    </div>
    :
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={<Landing/>}>
        </Route>
        <Route path='/archive' element={<Table/>}>
        </Route>
      </Routes>
    </Router>
  </div>
  )
}

export default App
