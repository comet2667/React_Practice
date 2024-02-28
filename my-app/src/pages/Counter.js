import React, {useState} from "react";

function Counter() {
    const [num, setNum] = useState(1);
    const [message, setMessage] = useState('안녕');
    const [ch, setCh] = useState('해당 게시물을 좋아하지 않습니다.');

    function addNum(){
        setNum(num+1);
        
    }
    
    function hi(event) {
        setMessage(event.target.value);
    }
    function reset() {
        setMessage('안녕');
    }
    function likeCheck(event) {
        setCh(event.target.checked? '해당 게시물을 좋아합니다.' : '해당 게시물을 좋아하지 않습니다.');
    }
    return (
        <>
            <button onClick={addNum}>클릭 시 증가(+1)</button>
            <div>{num}</div>
            <hr></hr>
            <input type="text" value={message} onChange={hi}/>
            <button onClick={reset}>Reset</button>
            <hr></hr>
            <input type="checkbox" name="ch" onChange={likeCheck}></input>
            <label>좋아요</label>
            <p>
                {/* 체크가 된 상태면 해당 게시물을 좋아합니다.
                체크가 해제된 상태면 해당 게시글을 좋아하지 않습니다. */}
                {ch}
            </p>
        </>
    );
}

export default Counter;