import DiaryItem from "./DiaryItem.js";

const DiaryList = ({ onEdit, onRemove, diaryList}) => {
    return (
    <div className="DiaryList">
        <h2>일기 리스트</h2>
        <h4>{diaryList.length}개의 일기가 있습니다.</h4>
        <div>
            {/* map으로 각 배열 순회 */}
            {diaryList.map((it)=>(
            <DiaryItem key={it.id} {...it} onRemove={onRemove} onEdit={onEdit}/>
            ))}
        </div>
    </div>)
}

//예외처리
DiaryList.defaultProps = {
    diaryList: [],
};

export default DiaryList;