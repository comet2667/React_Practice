import { useEffect, useState } from "react";
import Admin from "../pages/Admin";

const LoginCom = ()=>{
    const [inputValue, setInputValue] = useState({
        userId: '',
        userPwd: ''
    });
    useEffect(()=>{
       console.log(Admin) 
    });
    function onSubmit(e) {
        e.preventDefault()
        console.log(inputValue);
        alert(inputValue.userId+' 님 반갑습니다!')
    }
    function onChange(e) {
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value,
        })
    }
    return (
        <form onSubmit={onSubmit} className="sign-up-input"> 
            <input onChange={onChange} name="userId" placeholder="아이디" type="text"/>
            <input onChange={onChange} name="userPwd" placeholder="비밀번호" type="password"/>
            <button>로그인</button>
        </form>
    );
}
export default LoginCom;