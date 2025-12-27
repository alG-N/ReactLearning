// Bai Tap 1: Counter, can hien thi + va - de tang giam gia tri
import { useState } from 'react'
function BT1() {
    const [count, useCount] = useState(0);
    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={() => useCount(count + 1)}>Increase</button>
            <button onClick={() => useCount(count - 1)}>Decrease</button>
        </>
    )
}

// Bai Tap 2: Input hien thi text, co nut clear
function BT2() {
    const [text, setText] = useState("")
    return (
        <>
            <input value={text} onChange={(e) => setText(e.target.value)}></input>
            <h1>What you typed: {text}</h1>
            <button onClick={() => setText("")}>Clear</button>
        </>
    )
}

// Bai Tap 3: Component cha → con, Cha truyen ten, Con hien thi ten
function BT3() {
    return <Parent />
}

function Child({ message }) {
    return <h2>Message from Parent: {message}</h2>
}

function Parent() {
    return <Child message="alterGolden" />
}


function App() {
    return(
        <>
        <BT1 />
        <hr />
        <BT2 />
        <hr />
        <BT3 />
        </>
    )
}
// dung de goi cac function(hay component)
export default App;
