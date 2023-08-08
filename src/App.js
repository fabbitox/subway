import './App.css';
import Main from './main/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginJoin from './user/LoginJoin'
import Write from './user/Write';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<LoginJoin />} />
          <Route path='/write/:code' element={<Write />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
