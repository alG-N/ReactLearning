import Link from "next/link";

export default function Home() {
  return (
    <>
    <Link href={"/list"}>Go to List</Link>
    </>
  )
}
// dung de goi vao trang /list

// Request → Server Component → fetch → render HTML
// Khi nào cần "use client"?
// Click
// Input
// State
// Effect

// Khi nào không cần?
// Fetch data
// Render list
// SEO page