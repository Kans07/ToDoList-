//import Heading from './components/Heading'
//import List from './components/List'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Layout from './Pages/Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import './Index.css'

function App() {
  return (
    <>
      {/* <h1 className='TitleHeading'>ToDo List </h1> */}
      {/* <Heading Heading="by Karthik"/> */}
      {/* <hr/>
        <List />       */}
      {/* <hr/> */}
      {/* <InputList /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/home' index element={<Home />}>Home</Route>
            <Route path='/about' element={<About />}>About</Route>
          </Route>
        </Routes>
      </BrowserRouter>
        
    </>
  )
}

export default App;
