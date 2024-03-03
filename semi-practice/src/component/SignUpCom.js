import { useState, useEffect } from "react";
import Admin from "../pages/Admin";
import { useNavigate } from "react-router-dom";

const SignUpCom = () => {
    const [inputValue, setInputValue] = useState({
        userId: '',
        userPwd: '',
        userPwdCheck: '',
        phone: ''
    });
    const navigate = useNavigate();
    function onSubmit(e) {
        e.preventDefault()
        if (inputValue.userPwd != inputValue.userPwdCheck) {
            alert('비밀번호가 일치하지 않습니다.')
            return;
        } else {
            console.log(inputValue);
            navigate('/admin', { state: { inputValue } });
        }
    }
    function onChange(e) {
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <form onSubmit={onSubmit} className="sign-up-input">
            <input onChange={onChange} name="userId" placeholder="아이디" type="text" />
            <input onChange={onChange} name="userPwd" placeholder="비밀번호" type="password" />
            <input onChange={onChange} name="userPwdCheck" placeholder="비밀번호 확인" type="password" />
            <input onChange={onChange} name="phone" placeholder="휴대폰번호(-제외)" type="text" />
            <button>회원가입</button>
        </form>
    )
}
export default SignUpCom;