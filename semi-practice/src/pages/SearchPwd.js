import SearchPwdCom from "../component/SearchPwdCom";

export default function SearchPwd() {
    return (
        <body className="sign-up">
            <div className="sign-up-box">
                <h1>비밀번호 찾기</h1>
                <h4>아이디와 가입시 입력한 휴대폰번호로<br></br>간편하게 비밀번호를 찾을 수 있어요!</h4>
                <SearchPwdCom/>
            </div>
        </body>
    )
}