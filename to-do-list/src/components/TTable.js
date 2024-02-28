import '../css/common.css';
function TTable() {
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

            </tbody>
        </table>
        </>
    );
}
export default TTable;