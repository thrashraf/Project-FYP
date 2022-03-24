import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login/Login'
import Register from './pages/Register';
import Report from './pages/Report';
import { Home } from './pages/Home/Home';
import Admin from './pages/Admin';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/create-report' element={<Report />} />
          <Route path='/' element={<Home/>} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </BrowserRouter>

      
    </>


  );
}

export default App;
