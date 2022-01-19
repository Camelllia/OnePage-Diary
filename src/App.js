import { useRef, useState } from 'react/cjs/react.development';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

// const dummyList = [
//   {
//     id:1,
//     author:"ABC",
//     content:"안녕1",
//     emotion:4,
//     created_date: new Date().getTime()
//   },
//   {
//     id:2,
//     author:"홍길동",
//     content:"안녕2",
//     emotion:2,
//     created_date: new Date().getTime()
//   },
//   {
//     id:3,
//     author:"이무진",
//     content:"안녕3",
//     emotion:3,
//     created_date: new Date().getTime()
//   },

// ]

function App() {

  const [data, setData] = useState([]);

  const dataId = useRef(0);

  //데이터 생성 함수
  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
        author,
        content,
        emotion,
        created_date,
        id : dataId.current
    }
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  //데이터 삭제 함수
  const onRemove = (targetId) => {
      console.log(`${targetId}가 삭제되었습니다.`);
      //filter로 타겟 ID(삭제될 데이터)를 제외한 새로운 배열을 생성함
      const newDiaryList = data.filter((it) => it.id !== targetId);
      setData(newDiaryList);
  };

  //데이터 수정 함수
  const onEdit = (targetId, newContent) => {
    setData(
      //데이터가 바뀌었다면 컨텐츠를 수정해주고 아니라면 그대로 가져감
      data.map((it)=>
        it.id === targetId ? {...it, content:newContent} : it
      )
    );
  };

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate}/>
      <DiaryList onRemove={onRemove} onEdit={onEdit} diaryList={data}/>
    </div>
  );
}

export default App;
