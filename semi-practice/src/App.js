import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import SearchId from './pages/SearchId';
import SearchPwd from './pages/SearchPwd';
import NaviBar from './component/NaviBar';
import Home from './pages/Home';
import Admin from './pages/Admin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NaviBar />}>
            <Route index element={<Home />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
            <Route path='/search-id' element={<SearchId />} />
            <Route path='/search-pwd' element={<SearchPwd />} />
            <Route path='/admin' element={<Admin />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
