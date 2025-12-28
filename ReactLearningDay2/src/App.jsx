let count = 0;
// Khai bao count o ngoai function Test1

function Test1() {
  count++;
  console.log(count);
  // Cho moi lan goi Test1 thi count tang len 1 va in ra console
  // ko ko, hinh nhu count++ la cong 2, nen result voi la 2, va count++ la chan ma? hay vay nhi

  return <h1>Test1 Count: {count}</h1>;
  // Tra ve hien thi count tren giao dien
}
// Nghia la main.jsx da goi App.jsx, va App.jsx goi Test1
// Nen neu de count la 0, thi result se la Test1 Count: 2

import { use, useEffect, useState } from "react";
// can khai bao useState de su dung state trong React

function Test2() {
  const [text, setText] = useState("");
  // Khai bao text va setText o trong function Test2
  // setText la 1 function de cap nhat text
  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <h1>Test2 You typed: {text}</h1>
    </>
  )
  // Tra ve 1 input de nguoi dung nhap text
  // dc dung de de validate hon theo nhu gpt bao vay
}

const fruits = ["Apple", "Banana", "Orange", "Mango"];
// khai bao mot mang fruits

function Test3() {
  return (
    <>
      <h1>Fruits List:</h1>
      <ul>
        {fruits.map(fruit => <li>{fruit}</li>)}
      </ul>
    </>
  )
}
// tra ve mot danh sach bang map, can phai co the moi co the hien thi dc danh sach
// ten khai bao fruit co the la bat ky, nhung trong the li phai cung ten do de hien thi gia tri

const items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
];
// khai bao mot mang items chua cac doi tuong co id va name

function Test4() {
  return (
    <>
    <h1>Item list</h1>
    <ul>
      {items.map(item => 
        <ul key={item.id}>{item.name}</ul>
      )}
    </ul>
    </>
  );
}
// Hoat dong nhu Test3, nhung dung id de xac dinh cac doi tuong co cung id de co the insert ra ten
// cx kha giong cach khoa chinh hoat dong trong sql

function Test5() {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(res => res.json())
    .then(data => console.log(data));
  }, []);
  return <h1>Check console for fetched data</h1>;
}
// Su dung useEffect de goi API khi component duoc render lan dau tien
// res la response, chuyen no thanh json
// data la du lieu nhan dc, in ra console
// Mang [] trong useEffect de chi chay 1 lan khi component dc render lan dau tien

function Test6(){
  const [loading, setLoading] = useState(true);
  // khai bao loading va setLoading
  // mac dinh loading la true
  if(loading){
    return <h1>Loading...</h1>
  }
}
// ham if de kiem tra loading xem co true ko, neu true thi tra ve Loading...
// neu false thi ko tra ve gi ca

function AppMain() {
  return (
    <>
      <Test1 />
      <hr />
      <Test2 />
      <hr />
      <Test3 />
      <hr />
      <Test4 />
      <hr />
      <Test5 />
      <hr />
      <Test6 />
    </>
  );
}
// dung de goi cac function(hay component)
export default AppMain;