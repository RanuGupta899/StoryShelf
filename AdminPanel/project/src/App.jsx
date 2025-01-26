// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Signin from './Components/Signin'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import Changepassword from './Components/Changepassword';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Signin/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Dashboard' element={<Dashboard/>}/>
          <Route path='/changepassword' element={<Changepassword/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
