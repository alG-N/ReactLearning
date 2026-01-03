type Props = {
    params: Promise<{ id: string }>
}
// props params.id de lay id tu url
// can phai Promise de cho viec fetch

export default async function Detail({ params }: Props) {
    const { id } = await params;
    // lay id tu params
    const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res => res.json())
    // fetch du lieu tu api dua tren id
    return (
        <>
            <h1>{data.title}</h1>
        </>
    )
    // hien thi id lay duoc tren trang detail/id
    // khi minh fetchm thi phai de async, phai co fetch, ngoai ra phai dung ( :any) de khai bao kieu du lieu.
}