import LoginCom from "../component/LoginCom";

export default function Login() {
    return (
        <body className="sign-up">
            <div className="sign-up-box">
                <h1>로그인</h1>
                <h4>지금 로그인해서 리뷰를 작성해보세요!</h4>
                <LoginCom />
                <div className="search-box">
                    <a href='/search-id'>아이디 찾기</a>
                    <a href='/search-pwd'>비밀번호 찾기</a>
                </div>
            </div>
        </body>
    )
}