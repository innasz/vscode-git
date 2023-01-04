import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../pages/Main';
import Detail from '../pages/Detail';
import NotFound from '../components/NotFound';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 투두리스트를 눌렀을 때 아이디 매칭이 되는 투두만 나오게 하는 상세페이지 */}
        <Route path='/' element={<Main />} />
        {/* path에 오는 값을 호출하면 element를 호출한다. */}
        <Route path='/detail' element={<Detail />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
