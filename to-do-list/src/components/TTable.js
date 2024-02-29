import '../css/common.css';
function TTable(props) {
    let today = new Date();
    let Tdate =  today.getFullYear() +'-'+(today.getMonth()+1)+'-'+today.getDate();
    return (
        <>
            <table className="t-table">
                <thead>
                    <tr>
                        <th>체크</th>
                        <th>목표 일정</th>
                        <th>완료 일정</th>
                        <th>내용</th>
                        <th>상태</th>
                        <th>수정</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <tbody id="tContents">
                    <tr>
                        <th><input type='checkbox'/></th>
                        <th>{Tdate}</th>
                        <th>완료 일정</th>
                        <th>내용</th>
                        <th>상태</th>
                        <th>수정</th>
                        <th>삭제</th>
                    </tr>
                </tbody>
            </table>
        </>
    );
}
export default TTable;