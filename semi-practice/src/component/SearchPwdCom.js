import { useState } from "react";

const SearchPwdCom = () => {
    const [inputValue, setInputValue] = useState({
        userId: '',
        phone: ''
    })
    function onSubmit(e) {
        e.preventDefault()
        console.log(inputValue);
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
            <input onChange={onChange} name="phone" placeholder="휴대폰번호(-제외)" type="text" />
            <button>비밀번호 찾기</button>
        </form>
    );
}
export default SearchPwdCom;