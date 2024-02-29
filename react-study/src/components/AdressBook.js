import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from "react";
import AdressList from "./AdressList";

export default function AdressBook() {
    const [iNum, setInum] = useState(0);
    const [addNum, setAddnum] = useState(0);
    let arr = [];
    let count = 1;
    let adressList =[];
    function changeInput(num) {
        let val = document.getElementsByClassName('ad-input');
        arr[num] = val[num].value

        console.log(arr);
    }
    function adrInput() {
        let arr2 = {
            no: count,
            name: arr[0],
            phone: arr[1]
        }
        
        
        count++
        console.log(adressList);
        // adressList = [{
        //     name: '하잉',
        //     phone: '010',
        //     no: 1
        // }]
        
    }
    return (
        <>
            <div>
                <form onChange={(e) => { setInum(e.target.value) }}>
                    <option value={0}>이름</option>
                    <option value={1}>연락처</option>
                </form>
                <input type="text" placeholder="검색어를 입력하세요." />
                <Button variant='primary'>검색</Button>
            </div>
            <div>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>이름</th>
                            <th>연락처</th>
                        </tr>

                    </thead>
                    <tbody>
                        {adressList.map(function(adress) {
                            return (
                                <AdressList key={adress.no}
                                    no={adress.no}
                                    name={adress.name}
                                    phone={adress.phone} />
                            );
                        })}
                    </tbody>
                </Table>
                <div>
                    <input className="ad-input" type="text" placeholder="이름" onChange={() => changeInput(0)} />
                    <input className="ad-input" type="text" placeholder="연락처" onChange={() => changeInput(1)} />
                    <Button onClick={() => adrInput()}>추가</Button>
                </div>
            </div>
        </>
    );
}