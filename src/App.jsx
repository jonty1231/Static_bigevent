
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from './components/Header'
import Homepage from './page/Homepage'
import About from './page/About'
import Speaker from './page/Speaker'
import Shop from './page/Shop'

function App() {

  

  return (
  
   <>
 
<BrowserRouter>
   <Header />
 <Routes>
   <Route  path='/' element={<Homepage />} />
  <Route path='/about' element={<About />} />
  <Route  path='/speakers' element={ <Speaker />}/>
        <Route  path='/shop' element={<Shop />} />
 </Routes>

</BrowserRouter>


   </>
  )
}

export default App
