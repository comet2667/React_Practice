import { useContext } from "react";

export default function Add() {
    const [value, setValue] = useContext([{
        title: '',
        content: ''
    }])
    function onSubmit(e) {
        console.log('');
    }
    return (
        <div className="add-main">
            <form onSubmit={()=>onSubmit} className="add-input">
                <div>
                    <label for='title'>제목</label>
                    <input name="title" type="text" placeholder="제목을 입력하세요" />
                </div>
                <div>
                    <label for='content'>내용</label>
                    <textarea name="content" type="text" placeholder="내용을 입력하세요" rows={5}/>
                </div>
                <button>추가</button>
            </form>
        </div>
    );
}