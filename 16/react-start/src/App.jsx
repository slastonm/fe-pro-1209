import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header"
import Footer from "./components/Footer"
import MyButtons from "./components/CustomButton/MyButtons"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import UseState from './components/UseState'
import ProductList from './components/ProductList'
import UseEfectComponent from './components/UseEfectComponent'
import UseRef from './components/UseRef'
import Main from './components/userOrder/Main'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import TestPage from './pages/TestPage'
function App() {
  let [showState, setShowState] = useState(false)


  return (
    <>
    <Router>
      <Header>
      </Header>
      <header>
                {/* <Link className="me-3 py-2 text-dark text-decoration-none" to='/'>Home</Link>
                <Link className="me-3 py-2 text-dark text-decoration-none" to='/about'>About</Link>
                <Link className="me-3 py-2 text-dark text-decoration-none"  to='/test'>Test</Link> */}
      </header>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/about' element={<AboutPage></AboutPage>}></Route>
        <Route path='/test' element={<TestPage></TestPage>}></Route>

      </Routes>

      {/* <Main></Main> */}
      {/* <UseRef></UseRef> */}
      {/* <button onClick={()=>{setShowState(showState=>!showState)}} className="btn btn-primary">
        Show useEfect
      </button>
      {showState?<UseEfectComponent></UseEfectComponent>:null} */}

      {/* <ProductList></ProductList> */}
      {/* <UseState></UseState> */}
      {/* <MyButtons></MyButtons> */}
      <Footer></Footer>      
    </Router>

    </>
  )
}

export default App
