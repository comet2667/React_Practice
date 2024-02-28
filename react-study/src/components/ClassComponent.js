/*
    클래스형 컴포넌트 (class component)
    - React.Component 클래스 상속
        import {Component} from 'react';
        class 컴포넌트명 extends Component {}
    - 상태(state)를 가지고 있다.(관리할 수 있다.)
    - 생명주기(Life Cycle)에 따라 해당 메소드를 사용할 수 있다.
*/
/* React만 import 했을 때
import React from "react";
// 상속 시 React.Component로 작성
class ClassComponent extends React.Component {}
*/
import React, { Component } from "react";
class ClassComponent extends Component {
    //초기화/생성자
    // props : 부모요소로 부터 전달 받은 것들을 쓰기 위해선 아래 constructor
    constructor(props){
        super();

        this.state = {
            message: "hi"
        }
    }

    //클래스형 컴포넌트는 state를 가지고 있어 바로 사용이 가능
    // state 내에 객체 형태(key:value)로 상태를 관리할 수 있음
    componentDidMount() {
        this.state = {
            message: '헬로우'
        }
        this.setState({message: '하잉'})
    }
    state = {
        message: "나는 클래스형 컴포넌트입니다."
    }
    //  상태(값/데이터)를 변경할 때
    //  this.setState({변경할변수명:변경할 값, 변경할변수명:변경할 값, ...})

    //클래스형 컴포넌트는 요소를 표현할 때 render() 메소드를 사용함.
    render() {
        return (
            <>
                <button onClick={()=>{this.setState({message: "나는 사실 박혜성입니다."})}}>내용 바꾸기</button>
                <p>
                    {this.state.message}
                </p>
            </>
        )
    }
}
export default ClassComponent;