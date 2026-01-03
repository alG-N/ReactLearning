import Link from "next/link"

const todo = [
    {id: 1, name: "1b - asdasfasfafasasdasd"},
    {id: 2, name: "2a - asddddddddddddwasfasfa"}
]
// can khai bao todo de hien thi danh sach

export default async function List() {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos").then(res => res.json())
    return (
        <>
        <h1>To Do List</h1>
        <li>
            {data.map((todo: any) => (
                <Link href={`/detail/${todo.id}`} key={todo.id}>{todo.title}</Link>
            ))}
        </li>
        </>
    )
    // todo.map dung de hien thi tung phan tu trong mang todo
    // dung Link de tao link den trang detail/id
    // can phai tao folder detail/[id] de chua page.tsx cho trang detail
    // neu minh fetch thi phai de async, phai co fetch, ngoai ra phai dung ( :any) de khai bao kieu du lieu.
}