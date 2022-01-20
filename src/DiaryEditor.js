import React, { useState, useRef, useEffect} from "react";

const DiaryEditor = ({onCreate}) => {
    
    useEffect(() => {
        console.log("렌더");
    });

    const authorInput = useRef();
    const contentInput = useRef();
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

        //입력을 하지 않았다면
        if(state.author.length < 1) {
            //포커스 주기
            authorInput.current.focus();
            return;
        }
        if(state.content.length < 1) {
            //포커스 주기
            contentInput.current.focus();
            return;
        }
        
        //저장하기
        onCreate(state.author, state.content, state.emotion);
        alert("저장되었습니다.");
        //아이템 초기화
        setState({
            author:"",
            content:"",
            emotion:1,
        })
    };

    return (
        <div className="DiaryEditor">
            <h2>오늘의 일기</h2>
            <div>
                {/* 저자 입력*/}
                <input
                    ref = {authorInput}
                    name="author"
                    value={state.author} 
                    onChange={handleChangeState}
                />
            </div>
            <div>
                {/* 본문 입력*/}
                <textarea
                    ref = {contentInput}
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

export default React.memo(DiaryEditor);