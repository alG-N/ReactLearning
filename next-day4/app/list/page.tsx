import Link from "next/link"

const todo = [
    {id: 1, name: "1b - asdasfasfafasasdasd"},
    {id: 2, name: "2a - asddddddddddddwasfasfa"}
]
// can khai bao todo de hien thi danh sach

export default function List() {
    return (
        <>
        <h1>To Do List</h1>
        <li>
            {todo.map(todo => (
                <ul key={todo.id}>
                    <Link href={`/detail/${todo.id}`}>
                    {todo.name}
                    </Link>
                </ul>
            ))}
        </li>
        </>
    )
    // todo.map dung de hien thi tung phan tu trong mang todo
    // dung Link de tao link den trang detail/id
    // can phai tao folder detail/[id] de chua page.tsx cho trang detail
}