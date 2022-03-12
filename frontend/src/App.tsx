import { BrowserRouter, Route, Routes } from 'react-router-dom'
<<<<<<< HEAD
import { Login } from './pages/Login/Login'
=======
import { Login } from './pages/Login/Login';
import Register from './pages/Register';
>>>>>>> 61f0d81b95cb21ed08a4a21bdf3f37a53c360775

function App() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path='/login' element={<Login/> }/>
=======
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
>>>>>>> 61f0d81b95cb21ed08a4a21bdf3f37a53c360775
      </Routes>
    </BrowserRouter>
  );
}

export default App;
