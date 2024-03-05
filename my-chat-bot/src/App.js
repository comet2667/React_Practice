import './App.css';
import { CallGpt } from './service/CallGpt';
import { useRef, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const inputRef = useRef();
  const callGptApi = async () => {
    const inputVal = inputRef.current.value;
    const result = await CallGpt(message);
    if(result !== undefined && 'choices' in result && result.choices.length > 0){
      setResponse(result.choices[0].message.content);
    }
  }

  return (
    <div className="App">
      <h1>My Chat Bot</h1>
      <div>
        <input ref={inputRef} onChange={(e)=>setMessage(e.target.value)} type='text' placeholder='내용을 입력해주세요'/>
        <button onClick={callGptApi}>전송</button>
      </div>
      <p>{process.env.REACT_APP_GPT_API_KEY}</p>
      <hr></hr>
      <textarea value={response} type='text' placeholder='GPT 답변 대기중' readOnly/>
    </div>
  );
}

export default App;
