import SearchIdCom from "../component/SearchIdCom";

export default function SearchId() {
    return (
        <body className="sign-up">
            <div className="sign-up-box">
                <h1>아이디 찾기</h1>
                <h4>가입시 입력한 휴대폰번호로<br></br> 간편하게 아이디를 찾을 수 있어요!</h4>
                <SearchIdCom/>
            </div>
        </body>
    )
}