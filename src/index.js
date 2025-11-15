import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const myElement1 = 
   <div class="head_part" style = {{backgroundColor: "lightgray", textAlign: "center", display: "block", padding: "20px", width: "600px", margin: "auto"}}>
     <h1>Assignment 4 - React JSX Practice</h1>
      <div class="head_content" style = {{backgroundColor: "white", padding: "10px", borderRadius: "5px", width: "300px", margin: "auto"}}>
         <div>과목명 : 오픈소스 스튜디오</div>
         <div>분반 : 3분반</div>
         <div>이름 : 김성민 </div>
         <div>학번 : 22200097</div>
      </div>
   </div>;

let birthday_month = 1;

const myElement2 = 
   <div style = {{fontSize: "20px", fontWeight: "bold",padding: "20px", textAlign: "center"}}>
      저의 생일은 {birthday_month} 월 입니다. <br />
      생일 기준 오늘(25년 11월 15일)이 {birthday_month + 303} 째 되는 날 입니다.
   </div>;

const myElement3 = 
  <div style = {{backgroundColor: "lightgray", display: "block", padding: "20px", width: "400px", textAlign: "center", margin: "auto"}}>
      <br />
      <span>*</span> {(birthday_month < 10) ? "아..이미 생일이 지났어요,": "오 생일이 아직 안지났나? 15일 전이면 지났지만,,"}
   </div>;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
  {myElement1}
  {myElement2}
  {myElement3}
  </>
);

// root.render(
//    <React.StrictMode>
//       <App />
//    </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
