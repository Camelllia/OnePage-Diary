import { useContext } from "react";
import { DirayStateContext } from "./App.js";
import DiaryItem from "./DiaryItem.js";

const DiaryList = () => {
    const diaryList = useContext(DirayStateContext);
    return (
    <div className="DiaryList">
        <h2>일기 리스트</h2>
        <h4>{diaryList.length}개의 일기가 있습니다.</h4>
        <div>
            {/* map으로 각 배열 순회 */}
            {diaryList.map((it)=>(
            <DiaryItem key={it.id} {...it}/>
            ))}
        </div>
    </div>)
}

//예외처리
DiaryList.defaultProps = {
    diaryList: [],
};

export default DiaryList;