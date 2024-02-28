/*
    함수형 컴포넌트 (Funtional Component)
    - 클래스형 컴포넌트에 비해 비교적 간단
    - React v16.8 이후로 훅(Hook) 기능이 추가되어
        상태(State), 생명주기(life cycle) 관리가 가능하게 됨
 */
import React, {useState, useEffect} from "react";
function FunctionalComponent() {
    const [message, setMessage] = useState('안녕하세요, 함수형 컴포넌트 입니다.')
    //useEffect : 랜더링 시점마다 실행되는 훅(hook)
    // 처음 한번만 실행하고자 할 경우 두번째 인자값으로 [] 작성
    useEffect(()=>{
        setMessage('나는 함수형 컴포넌트입니다.');
    }, [])

    return (
        <>
        <div>{message}</div>
        <button onClick={()=>{setMessage('사실 저는 박혜성입니다.')}}>내용 변경하기</button>
        </>
    )
}
export default FunctionalComponent;