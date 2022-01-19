import React, {useEffect, useState} from "react";

const Lifecycle = () => {

    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    useEffect(()=> {
        console.log("Mount");
    },[])

    useEffect(()=>{
        console.log("Update");
    })

    useEffect(()=>{
        console.log("count");
    },[count])

    useEffect(()=>{
        console.log("text");
    },[text])

    //Lifecycle
    // Mount(첫 실행시) - Update - UnMount(마운트 한 후 다른 함수를 리턴할 때 실행 됨)

    return <div style={{padding: 20}}>
        <div>
            {count}
            <button onClick={() => {setCount(count + 1)}}>+</button>
        </div>
        <div>
            <input value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
    </div>;
};

export default Lifecycle;