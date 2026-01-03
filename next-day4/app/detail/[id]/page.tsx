type Props = {
    params: {
        id: string
    }
}
// props params.id de lay id tu url

export default function Detail({params}: Props){
    return(
        <>
        <h1>Ok cool {params.id}</h1>
        </>
    )
    // hien thi id lay duoc tren trang detail/id
}