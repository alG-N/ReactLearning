import Link from "next/link";
// Can import Link de co the goi cac page khac trong ung dung Next.js
// khong the dung a href duoc
// van can phai co <> </> de bao gom nhieu the trong mot component

// Bai 1: ✅ Bài 1: Home /
// Title
// Link sang /list

// ✅ Bài 2: List /list
// Hiển thị danh sách (mock array)
// Click item → sang /detail

export default function Home() {
  return (
    <>
    <h1>Welcome to home</h1>
    <Link href="/list">Go to list</Link>
    </>
  )
}

// page.tsx dung de dinh nghia noi dung trang chu va se duoc render ben trong layout.tsx
// nghia la page.tsx co the goi duoc qua viec localhost:3000, va viec minh de no trong folder nao, co the goi no qua chinh ten folder do
// nhu la minh de no trong folder detail, thi co the goi no qua localhost:3000/detail
// neu minh de no trong folder list, thi co the goi no qua localhost:3000/list
// neu minh de no trong folder goc (app), thi co the goi no qua localhost:3000
