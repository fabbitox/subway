import './App.css';
import Main from './main/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginJoin from './user/LoginJoin'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<LoginJoin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
