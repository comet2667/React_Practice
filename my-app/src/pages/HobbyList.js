import React, { useState } from "react";
import HobbyItem from "../Components/HobbyItem";

function HobbyList() {
    const [a, setA] = useState(0);

    function test() {
        setA(function () {
            return (
                <ul>
                    <HobbyItem value={"드라마 보기"} isChecked={true} />
                    {HobbyItem({ value: "게임", isChecked: true })}
                    <HobbyItem value={"드라마 보기"} isChecked={true} />                </ul>
            );
        })
    }

    return (
        <div>
            <h3>취미 리스트</h3>
            <ul>
                <HobbyItem value={"드라마 보기"} isChecked={true} />
                <HobbyItem value={"드라마 보기"} isChecked={true} />
                <HobbyItem value={"드라마 보기"} isChecked={true} />
                <HobbyItem value={"드라마 보기"} isChecked={true} />
                <button onClick={test}>취미 확인</button>
            </ul>
            {a}
        </div>
    );
}

export default HobbyList;