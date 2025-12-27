function App() {
  return ( // return tra ve html
    <>
      <h1>React Day 1</h1>
      <p>This is my first React App!</p>
    </>
  );
}
// Hoat dong nhu Javascript, nhung duoc su dung de xay dung giao dien nguoi dung
// JSX: JavaScript XML
// Minh co the goi nhieu component khac nhau, va export chung, ngoai ra, ket hop cac component(function) 
// de tao thanh 1 ung dung lon?
// Ngoai ra <> va </> la 1 fragment(the cha), de gop lai nhieu thu khac nhau, de tra ve nhieu phan tu trong 1 component
// Vay la minh can dung function de tao ra mot UI component, va ket hop nhieu component de tao ra lon hon
// neu return ve nhieu hon 1 phan tu, thi can dung fragment de bao ngoai
// nguoc lai neu return tra ve 1 phan tu thi khong can fragment

const name = "alter";
<h1>Hello, {name}</h1>
// minh co the khai bao bien, va co the goi chung trong html bang cach dat {ten bien}

const test1 = () => {
  return <h1>Test how react work</h1>
}
function test2() {
  return <h1>Test how react work 2</h1>
}
// minh co the khai bao 1 component bang arrow function hoac function
// nhung ma thuong dung arrow function hon

const Test3 = (props) => {
  console.log(props);
  return <h1>Test react work 3: {props.name}</h1>
}

function App2() {
  return (
    <>
      <Test3 name="alter" />
    </>
  );
}
// minh co the truyen props(thuoc tinh) vao component nhu the nay
// props la 1 object chua tat ca thuoc tinh duoc truyen vao component
// BAT BUOC PHAI VIET HOA CHU CAI DAU TIEN KHI GOI COMPONENT
// phai tao mot function de hien ra component, khong the viet truc tiep <Test3 name="alter"/> ra ngoai ma khong khai bao function

import { useState } from "react";
// khai bao useState de cap nhat du lieu thoi gian thuc trong react
function Test4() {
  const [count, setCount] = useState(0); // khai bao count la bien state, setCount la ham de cap nhat count, useState(0) la gia tri khoi tao cua count
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  )
}
// setCount dung de cap nhat bien count, khi count dc them hay giam, react se tu dong render lai giao dien

// minh co the goi function trong su kien nhu onClick
function App3() {
  return (
    <>
      <button onClick={Test5}>Click me</button>
    </>
  );
}

function Test5() {
  alert("Button clicked!"); // hien thi hop thoai khi button dc click
}

// onChange su kien khi gia tri trong input thay doi
function App4() {
  const [text, setText] = useState("");
  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)}></input>
      <p>You typed: {text}</p>
    </>
  );
} // onChange truyen vao 1 ham, ham nay nhan vao su kien e, e.target.value la gia tri hien tai trong input


// Component Cha va Con
function Child({message}) {
  return <h2>Message from Parent: {message}</h2>
}

function Parent() {
  return <Child message="Hello from Parent Component!" />
}

function App5() {
  return (
    <>
      <Parent />
    </>
  );
}
// Child de goi Parent, Parent de goi App5, ko the export Child hay Parent dc
// QUAN TRONG: DE RENDER RA 1 COMPONENT, CAN PHAI KHAI BAO 1 FUNCTION DE GOI NO TRONG 1 COMPONENT KHAC

// Dung de goi App trong main.jsx
export default App5;
// khong the goi 2 export default trong 1 file duoc