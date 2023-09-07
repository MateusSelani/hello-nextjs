import Cards from "@/components/cards/Cards";
import React from "react";
import { useEffect, useState } from "react";

// base de dados
const content = [
    {id: 1, titulo: 'projeto tavares', txt: 'produto fulano de tal'},
    {id: 2, titulo: 'projeto farias', txt: 'produto fulano de tal'},
    {id: 3, titulo: 'projeto candida', txt: 'produto fulano de tal'},
    {id: 4, titulo: 'projeto nova era', txt: 'produto fulano de tal'},
    {id: 5, titulo: 'projeto aeroporto', txt: 'produto fulano de tal'},
    {id: 6, titulo: 'projeto areal', txt: 'produto fulano de tal'},
]

export default function Project() {

    return(
        <div>
            <h1 className="mt-6 mb-12 text-5xl text-center">Projetos</h1>
            <button className="bg-black text-white p-3
                hover:bg-gray-600 hover:text-black
                absolute top-10 right-1/3">New Project!</button>

            <div className="my-5 mx-60">
                <div className="grid grid-cols-3 gap-4">
                    {
                        content.map((item) => <Cards key={item.id}
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