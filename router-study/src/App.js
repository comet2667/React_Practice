import {Link, NavLink, Route, BrowserRouter as Router, Routes} from 'react-router-dom';
/*
  react-router-dom
    : react 내에서 페이지 이동이 가능하도록 해주는 라이브러리
      (npm install react-router-dom 실행)
  BrowserRouter
    : history API를 이용하여 history 객체를 생성
      페이지 이동을 진행할 컴포넌트 상위에 생성하여 감싸주어야 함
  Routes
    : 모든 Route의 상위 경로에 존재해야하고, location(url) 변경 시 하위에 있는 Route에 설정된
      컴포넌트를 표시해줌
  Route
    : 현재 브라우저에 있는 location을 기준으로 element(컴포넌트)를 렌더링함
*/
import './css/common.css';
import List from './pages/List';
import Add from './pages/Add';
function App() {

  return (
    <Router>
      <div className='main-nav'>
        <nav>
          <div className='nav-bar'>
              <NavLink to='/' activeclassname='active'>목록보기</NavLink>
              <NavLink to='/add' activeclassname='active'>추가</NavLink>
          </div>
          <hr className='line'></hr>
        </nav>
        <Routes>
          <Route path='/' element={<List/>}/>
          <Route path='/add' element={<Add/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
