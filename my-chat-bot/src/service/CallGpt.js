import { useState } from "react";
import App from "../App";

/*
    fetch API

    fetch(요청 주소 url, option)
    - options
        *method : 통신방식 (GET/POST/PUT/DELETE)
        *headers : 요청 헤더 부분
            + 데이터 타입
            + API KEY를 전달
        *body : POST 요청 시 전달할 데이터
*/
export const CallGpt = async (message) => {
    console.log(message)

    console.log("%c>> GPT 요청 시작!", "background-color:red; color:white");
    const response = await fetch("https://api.openai.com/v1/chat/completions",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_GPT_API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{
                "role": "user",
                "content": message
                }]
        })
    });

    const responseData = await response.json();

    console.log("%c>> GPT 요청 완료!", "background-color:blue; color:white");
    console.log(responseData);
    return responseData;
}