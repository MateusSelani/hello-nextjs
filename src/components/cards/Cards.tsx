export default function Cards({id, titulo, txt}: any) {
    return(
        <div className="border border-gray-500">
            <div className="m-3">
                <h1 className="text-center text-xl">{titulo}</h1>
                <p className="m-5 text-zinc-700">{txt}</p>
                <div className="flex flex-row gap-2 items-center">
                    <button className="bg-blue-800 text-white p-3 rounded
                        hover:bg-blue-900 hover:text-gray-300">Visualizar</button>
                    <code className="w-full text-end text-gray-600 pr-2">#{id}</code>
                </div>
            </div>
        </div>
    )
}