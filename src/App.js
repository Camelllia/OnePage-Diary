import { useEffect, useRef, useState, useCallback, useMemo } from 'react/cjs/react.development';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

function App() {

  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const getData = async() => {
    const res = await fetch(
      'https://jsonplaceholder.typicode.com/comments'
      ).then((res)=>res.json());
    

      const initData = res.slice(0,20).map((it)=>{
        return {
          author : it.email,
          content : it.body,
          emotion : Math.floor(Math.random() * 5) + 1,
          created_date : new Date().getTime(),
          id : dataId.current++
        };
      });

      setData(initData);
  };

  useEffect(()=>{
    getData();
  },[])

  //데이터 생성 함수
  const onCreate = useCallback((author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
        author,
        content,
        emotion,
        created_date,
        id : dataId.current
    }
    dataId.current += 1;
    setData((data)=>[newItem, ...data]);
  },

  []
);

  //데이터 삭제 함수
  const onRemove = (targetId) => {
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

  //useMemo로 재연산 방지 >> 리렌더링 비용 감소(리팩토링)
  const getDiaryAnalysis = useMemo(() => {
    const goodCount = data.filter((it) => it.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount/data.length) * 100;
    return{goodCount, badCount, goodRatio};
  }, [data.length]);

  const {goodCount, badCount, goodRatio} = getDiaryAnalysis;

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate}/>
      <div>전체 일기 : {data.length}</div>
      <div>기분 좋은 일기 개수 : {goodCount}</div>
      <div>기분 나쁜 일기 개수 : {badCount}</div>
      <div>기분 좋은 일기 비율 : {goodRatio}%</div>
      <DiaryList onRemove={onRemove} onEdit={onEdit} diaryList={data}/>
    </div>
  );
}

export default App;
