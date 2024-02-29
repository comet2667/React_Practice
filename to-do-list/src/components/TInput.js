import '../css/common.css';
function TInput() {
    let arr = new Array;
    function inputTodo(num){
        let val = document.getElementsByTagName('input');
        arr[num] = val[num].value;
        console.log(arr[num]);
    }
    function TSubmit() {
        
    }
    return (
        <form className="t-form">
            <span>목표 일정</span>
            <input onChange={()=>inputTodo(0)} type="date" name="date" id="tDate"/>
            <span>할 일</span>
            <input onChange={()=>inputTodo(1)} type="text" name="cont" id="tdw" placeholder="내용 입력"/>
            <input type="button" value="등록" id="tSub" className="btn btn-primary"/>
        </form>
    );
}

export default TInput;