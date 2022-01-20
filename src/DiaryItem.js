//일기 리스트에 사용될 아이템 프롭
import { useState, useRef } from "react";

const DiaryItem = ({author, content, emotion, created_date, id, onRemove, onEdit}) => {

const [isEdit, setIsEdit] = useState(false);
const toggleIsEdit = () => setIsEdit(!isEdit);

const [localContent, setLocalContent] = useState(content);
const localContentInput = useRef();

const handleRemove = () => {
    if(window.confirm("일기를 정말 삭제하시겠습니까?")) {
            onRemove(id);
    }
};

const handleQuitEdit = () =>{
    setIsEdit(false);
    setLocalContent(content);
}

const handleEdit = () => {

    if(localContent.length < 1) {
        localContentInput.current.focus();
        return;
    }

    if(window.confirm("일기를 수정하시겠습니까?")) {
        onEdit(id, localContent)
        toggleIsEdit();
    }
}

    return(
        <div className="DiaryItem">
            <div className="info">
                <span>
                    작성자 : {author} | 감정점수 : {emotion}
                </span>
                <br/>
                <span className="date">{new Date(created_date).toLocaleString()}</span>
            </div>
            <div className="content">
                {isEdit ? (
                <><textarea
                    ref={localContentInput}
                    value={localContent}
                    onChange={(e) => {setLocalContent(e.target.value)}}
                />
                </>
            ) : (
                <>{content}</>)}
            </div>
            {isEdit ? (
                <>
                    <button onClick={handleQuitEdit}>수정 취소</button>
                    <button onClick={handleEdit}>수정 완료</button>
                </>
            ) : (
                <>
                    <button onClick={handleRemove}>삭제하기</button>
                    <button onClick={toggleIsEdit}>수정하기</button>
                </>
        )}
        </div>
    );
};

export default DiaryItem;