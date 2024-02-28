/*
    useEffect : 랜더링 시점에 동작하는 함수
    - 클래스형 컴포넌트에서 생명주기 메소드의 역할을 함
        * 컴포넌트가 마운트 됐을 때(처음 화면(브라우저)에 표시되었을 때)
        * 언마운트 됐을 때(사라질 때)
        * 업데이트 됐을 때(특정 상태(state)가 변경되었을 때)
    
    [1] import React, {useEffect} from 'react';
    [2] useEffect(함수, [상태변수])
        - 함수 : 해당 시점에 동작시킬 내용을 작성
        - [상태변수, ...] : 배열형태, 변경되는 상태를 체크하고자 할 때 작성
            *생략 시 랜더링 될 때 마다 동작(실행)
            *[] : 처음 랜더링 되었을 때만 동작
            *[상태] : 작성한 상태가 변경될 때마다 동작(실행)
*/
import '../../css/common.css';
import React, {useState, useEffect} from "react";
function UseEffectTest() {
    const [inputVal, setInputVal] = useState([]);
    const [val, setVal] = useState("");
    // useEffect(()=>{
    //     console.log("useEffect (1) --------------------------");
    // });
    // useEffect(()=>{
    //     console.log("useEffect (2) --------------------------");
    // },[]);
    // useEffect(()=>{
    //     console.log("useEffect (3) --------------------------");
    // },[val]);
    useEffect(()=>{
        console.log(inputVal);
    }, [inputVal])
    function changeValue(ev) {
        
        setVal(ev.target.value)
    }
    function changeInputVal() {
        console.log(inputVal);
        inputVal.push(val);
        setInputVal(inputVal);
        console.log(inputVal);
    }

    //전개구문 const arr = [...inputVal];
    //useState 배열에 push를 해도 화면에 표시되진 않는다.
    //배열 복사 작업이 필요하다.
    return (
        <div className='center'>
            <div>
            <input type='text' value={val} onChange={changeValue}/>
            <input type='button' value={"+"} onClick={changeInputVal} />
            </div>
            <hr style={{width: '100%'}}></hr>
            <div>{inputVal.map(function(val, i){ //태그를 붙여서 출력
                return (
                    <p key={i}>{val}</p>
                );
            })}</div>
        </div>
    );
}
export default UseEffectTest;