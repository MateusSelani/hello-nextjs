export default function DinamicPages({id, titulo, txt}: any) {
    return(
        <div className="m-2">
            <h1 className="text-center text-5xl m-3">{titulo}</h1>
            <h2 className="text-center text-gray-600">#{id}</h2>
            <p className="mx-32">{txt}</p>
        </div>
    )
}