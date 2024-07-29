
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from './components/Header'
import Homepage from './page/Homepage'
import About from './page/About'

function App() {

  

  return (
  
   <>
 
<BrowserRouter>
   <Header />
 <Routes>
   <Route  path='/' element={<Homepage />} />
  <Route path='/about' element={<About />} />

 </Routes>

</BrowserRouter>


   </>
  )
}

export default App
