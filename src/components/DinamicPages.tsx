export default function DinamicPages({id, titulo, txt}: any) {
    return(
        <div>
            <h1>{titulo}</h1>
            <p>{txt}</p>
            <code>{id}</code>
        </div>
    )
}