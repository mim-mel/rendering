import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Upload from './pages/Upload';
import Detail from './pages/Detail';
import Edit from './pages/Edit';

const Router = () => {
  // parameter = 매개 변수
  function add(banana, bang) {
    return banana + bang;
  }

  add(5, 5); // argument (진짜 값)
  add(1, 1); // 5 + 5 = 10;
  add(0, 0); // 5 + 5 = 10;

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/upload' element={<Upload />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
