import SignUpCom from "../component/SignUpCom";

export default function SignUp() {
    return (
        <body className="sign-up">
        <div className="sign-up-box">
            <h1>회원가입</h1>
            <h4>지금 회원가입해서 리뷰를 작성해보세요!</h4>
            <SignUpCom/>
        </div>
        </body>
    )
}