export default function NewProject() {
    return(
        <div className="flex flex-col w-1/3 h-screen mx-auto my-16 bg-gray-300">
            <form action="" className="m-16 flex flex-col gap-2">
                <h1 className="text-5xl text-center font-bold mb-10">New Project</h1>
                <p className="m-2">Nome do Projeto:</p>
                <input type="text" className="border border-blue-500 rounded-xl"/>
                <p className="m-2">Descricao do projeto:</p>
                <textarea name="" id="" cols={30} rows={15}
                    className="border border-blue-500 rounded-xl"/>
            </form>
                <button className="flex flex-col mx-16 justify-start w-1/6
                    bg-blue-800 text-white hover:bg-blue-900 rounded p-3">
                        Salvar!
                </button>
        </div>
    )
}