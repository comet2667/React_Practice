import '../css/Login.css';

function Login() {
    function aElement(url, text){
        return (
            <a href={url}>{text}</a>
        );
    }
    return (
        <>
        <section>
        <article>
        <input type="text"/>
        <input type="password"/>
        </article>
        <input type="button" value={'로그인'}/>
        </section>
        {aElement("#", "회원가입")}
        {aElement("#", "아이디 찾기")}
        {aElement("#", "비밀번호 찾기")}
        </>
    );
}
export default Login;