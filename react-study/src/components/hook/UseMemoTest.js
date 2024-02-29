/*
    useMemo : Memoization(메모이제이션) 기법을 사용한 리액트 hook
    [1] import React, (useMemo) from 'react';
    [2] useMemo(()=>{//...},[])
        (1) 메모이제이션 기법을 사용할 콜백 함수
        (2) 추적할 요소의 배열
*/
import {useState, useMemo} from "react";

function UseMemoTest() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0)
    
    // function sumResult() {
    //     console.log("sumResult 실행")
    //     return num1 + num2;
    // }
    const sum = useMemo(()=>{
        console.log("실행");
        return num1 + num2;
    }, [num1, num2]);

    return (
        <div className="center">
            <div>
                <button onClick={()=>{setNum1(num1 + 1)}}>NUM1(1 증가)</button>&nbsp;
                <button onClick={()=>{setNum2(num2 + 1)}}>NUM2(1 증가)</button>
            </div>
            <div>
                <button onClick={()=>{setNum1(0)}}>NUM1(초기화)</button>&nbsp;
                <button onClick={()=>{setNum2(0)}}>NUM2(초기화)</button>
            </div>
            <hr></hr>
            num1 : {num1}<br></br>
            num2 : {num2}<br></br>
            num1 + num2 = {sum}
        </div>
    );
}
export default UseMemoTest;