import Cards from "@/components/cards/Cards";
import React from "react";
import Datas from "@/datas";
import Link from "next/link";

export default function Project() {
    
    const content = Datas().content

    return(
        <div>
            <h1 className="mt-6 mb-12 text-5xl text-center">Projetos</h1>
            <button className="bg-black text-white p-3
                hover:bg-gray-900 hover:text-white
                absolute top-10 right-1/3">
                    <Link href="/newProject">New Project!</Link>
            </button>

            <div className="my-5 mx-60">
                <div className="grid grid-cols-3 gap-4">
                    {
                    content.map((item) => <Cards key={item.id
                    }
                        id={item.id}
                        titulo={item.titulo}
                        txt={item.txt}
                    />)
                    }
                </div>
            </div>
        </div>
    )
}