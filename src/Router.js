import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Home from './pages/Home';
import Upload from './pages/Upload';

const Post = () => {
  // url 에 지금 현재 들어있는 '게시물의 id 값'으로
  // localStorage 에 저장된 (데이터베이스) 에 값을 비교해서 '조회'하고,
  // 화면에 보여주려면 어떻게 해야할까요?
  // 객체구조분해할당을 사용해서 id 라는 변수를 만들고, 그 변수에 실제 id 값을 할당해주세요!

  if (true) {
    console.log('나를 트루일때만 호출해줘');
  }

  const { id } = useParams();
  // const id = useParams().id;

  console.log(id);

  // window.alert('경고창');
  window.prompt('비밀번호:');
  // 비밀 번호가 다르면? -> 함수를 종료 시킬수있게끔.
  //

  window.confirm('정말로 삭제하시겠습니까');

  // 쿼리문 db.find({id: 123}) ->  -> db(mongodb, mySQL)
  // LocalStorage 에서 해당 id값을 사용해서 데이터를 찾아서 보여주는거에요!
  // update 버튼, delete 버튼 이렇게 두개를 POST 페이지에서 만들고!
  // update -> 버튼을 눌렀을 때, 비밀번호를 입력할 수 있어야되요!
  // 게시물의 비밀번호와 현재 사용자가 입력한 "비밀번호를 비교해서" 같으면 삭제, 업데이트

  return (
    <div>
      <h1>POST 페이지</h1>
    </div>
  );
};

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
        <Route path='/post/:id' element={<Post />} />
        <Route path='/upload' element={<Upload />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
