import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout2 from './components/Layout2';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';
import UseContextTest from './components/hook/UseContextTest';
import RefTest from './components/RefTest';
import AdressBook from './components/AdressBook';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 기본 path(/) 인 경우 연결할 컴포넌트(Layout2) */}
        <Route path='/' element={<Layout2/>}>
          <Route path='/component/class' element={<ClassComponent/>}/>
          <Route path='/component/functional' element={<FunctionalComponent/>}/>
          <Route path='/component/context' element={<UseContextTest/>}/>
          <Route path='/AdressBook' element={<AdressBook/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
