// Bài 1: Todo List
// Input thêm todo
// Hiển thị danh sách
// Xóa todo
// Dùng map + key

import { useState, useEffect } from "react";

const ToDoList = [
    { id: 1, ToDo: "homework", time: "12h" },
    { id: 2, ToDo: "chore", time: "2h" },
    { id: 3, ToDo: "sleep", time: "5h" },
];

function ToDo() {
    const [text, setText] = useState("")
    const [text1, setText1] = useState("")
    const [text2, setText2] = useState("")
    return (
        <>
            <h1>ID: </h1>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <h1>ToDo: </h1>
            <input value={text1} onChange={(e) => setText1(e.target.value)} />
            <h1>Time: </h1>
            <input value={text2} onChange={(e) => setText2(e.target.value)} />
            <p>What you typed on ToDoList: {text} - {text1} - {text2}</p>

            <button onClick={() => setText(
                ToDoList.push({ id: text, ToDo: text1, time: text2 })
            )}>Add to the ToDoList</button>

            <button onClick={() => setText(
                ToDoList.splice(1, 1)
            )}>
                DELETE
            </button>

            <h1>List of To Do:</h1>
            <ul>
                {ToDoList.map(todolist =>
                    <ul key={todolist.id}>{todolist.id} - {todolist.ToDo} - {todolist.time}</ul>
                )}
            </ul>
        </>
    )
}

// ✅ Bài 2: Fetch API + Loading
//useEffect fetch data
//Có loading
//Hiển thị title
function FetchAPI() {
    const [loading, setLoading] = useState(true);

    if (loading) {
        setInterval(() => {
            setLoading(false);
        }, 5000);
        return <h1>Loading...</h1>
    } else {
        return (
            <>
                <h1>Loading completed, check console log</h1>
                <Parent />
            </>
        )
    }
}

function Parent() {
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then(res => res.json())
            .then(data => console.log(data))
    }, []);
}

function App() {
    return (
        <>
            <ToDo />
            <hr />
            <FetchAPI />
        </>
    )
}
export default App;