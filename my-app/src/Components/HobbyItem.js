function HobbyItem(props) {
    function test2() {
        alert("반갑습니다.");
    }
    return (
        <div>
            <li>{props.value} {props.isChecked && 'v'}</li>
            <button onClick={test2}>누르세요</button>
        </div>
    );
}
export default HobbyItem;