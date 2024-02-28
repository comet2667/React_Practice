import TTable from './TTable.js'

function TInput() {
    return (
        <form>
            <span className="input-group-text" id="addon-wrapping">목표 일정</span>
            <input type="date" name="date" id="tDate" className="form-control"/>
            <span className="input-group-text" id="addon-wrapping">할 일</span>
            <input type="text" name="cont" id="tdw" className="form-control" placeholder="내용 입력"/>
            <input type="button" value="등록" id="tSub" className="btn btn-primary"/>
        </form>
    );
}

export default TInput;