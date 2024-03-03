import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Admin = (props) => {
    const location = useLocation();
    const [value, setValue] = useState([location.state.inputValue]);

    useEffect(() => {
        console.log(value);
    });

    return (
        <div>
            <h1>임시 관리자 페이지</h1>
            <table className="admin-table">
                <thead>
                    <tr>
                        <th>아이디</th>
                        <th>비밀번호</th>
                        <th>휴대폰번호</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(value).map((key)=> (
                            <tr>
                                <td>{value[key].userId}</td>
                                <td>{value[key].userPwd}</td>
                                <td>{value[key].phone}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Admin;