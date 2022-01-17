import { useState } from "react";

const DiaryEditor = () => {
    
    //상태선언
    const [state, setState] = useState({
        author:"",
        content:"",
        emotion:"1",
    });

    //상태관리함수
    const handleChangeState = (e) => {
         console.log(e.target.value);
         console.log(e.target.name);

         setState({
             ...state,
             [e.target.name]: e.target.value,
         })
    }

    //저장함수
    const handleSubmit = () => {
        console.log(state);
        alert("저장되었습니다.");
    }

    return (
        <div className="DiaryEditor">
            <h2>오늘의 일기</h2>
            <div>
                {/* 저자 입력*/}
                <input 
                    name="author"
                    value={state.author} 
                    onChange={handleChangeState}
                />
            </div>
            <div>
                {/* 본문 입력*/}
                <textarea
                    name="content"
                    value={state.content} 
                    onChange={handleChangeState}
                />
            </div>
            <div>
                {/* 감정 점수 */}
                <select
                    name="emotion" 
                    value={state.emotion} 
                    onChange={handleChangeState}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                </select>
            </div>
            <div>
                <button onClick={handleSubmit}>저장하기</button>
            </div>
        </div>);
};

export default DiaryEditor;