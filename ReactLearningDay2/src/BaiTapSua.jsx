import { useState, useEffect } from "react"
function Todo() {
    const [toDoList, setToDoList] = useState([
        { id: 1, need: "toy", time: "12h" },
        { id: 2, need: "money", time: "1h" },
        { id: 3, need: "oof", time: "5h" },
    ]);
    const [needlist, setNeedList] = useState("");
    const [timelist, setTimeList] = useState("");

    const add = () => {
        setToDoList([
            ...toDoList,
            { id: Date.now(), need: needlist, time: timelist }
        ]);
    }

    const remove = (id) => {
        setToDoList(toDoList.filter(t => t.id !== id))
    }
    return (
        <>
            <input value={needlist} onChange={(e) => setNeedList(e.target.value)}></input>
            <input value={timelist} onChange={(e) => setTimeList(e.target.value)}></input>
            <button onClick={add}>Add</button>

            <h1>List of todo:</h1>
            <ul>
                {toDoList.map(tdl =>
                    <li key={tdl.id}>{tdl.id} - {tdl.need} - {tdl.time}
                        <button onClick={() => remove(tdl.id)}>X</button>
                    </li>
                )}
            </ul>
        </>
    )
}

function FetchAPI() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setLoading(false)
        })
    }, []);
    if(loading){
        return <h1>Loading...</h1>
    }else{
        return <h1>Load complete, check console log</h1>
    }
}

function App() {
    return (
        <>
            <Todo />
            <hr />
            <FetchAPI />
        </>
    )
}
export default App;