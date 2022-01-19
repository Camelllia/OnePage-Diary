//일기 리스트에 사용될 아이템 프롭
const DiaryItem = ({author, content, emotion, created_date, id}) => {
    return(
        <div className="DiaryItem">
            <div className="info">
                <span>
                    작성자 : {author} | 감정점수 : {emotion}
                </span>
                <br/>
                <span className="date">{new Date(created_date).toLocaleString()}</span>
            </div>
            <div className="content">{content}</div>
        </div>
    );
};

export default DiaryItem;