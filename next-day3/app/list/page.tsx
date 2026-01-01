
// ✅ Bài 2: List /list
// Hiển thị danh sách (mock array)
// Click item → sang /detail
import Link from "next/link"

export default function PageList() {
    return  (
        <>
        <h1>List of Item</h1>
        <Link href="/detail/detail1">Item 1</Link>
        <hr></hr>
        <Link href="/detail/detail2">Item 2</Link>
        </>
    )
}

// page.tsx dung de tao ra mot cai ListPage, va co the goi no qua viec localhost:3000/list