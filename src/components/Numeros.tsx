import React, { useEffect, useReducer, useRef, useState } from "react"

export default function Numeros(){

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const [initCounter, setInitCounter] = useState(0)
    const [bg, setBg] = useState('bg-blue-900')
    const [txtColor, setTxtColor] = useState('text-gray-400')
    
    const [loader, setLoader] = useState(false)

    const oldValueX = useRef(0)
    const oldValueY = useRef(0)

    useEffect(() => {
        const timerOne = setTimeout(() => {
            oldValueX.current = x
            setX(Math.floor((Math.random() * 25) + 1))
        }, 2000);

        const timerTwo = setTimeout(() => {
            oldValueY.current = y
            setY(Math.floor((Math.random() * 25) + 1))
            setLoader(true)
            setBg('bg-blue-800')
            setTxtColor('text-white')
        }, 3000);
        
        return () => {
            clearTimeout(timerOne)
            clearTimeout(timerTwo)
            setLoader(false)
            setBg('bg-blue-900')
            setTxtColor('text-gray-400')
        }
    }, [initCounter])

    function formatedNumber(value: number) {
        return (value < 10 ? '0'+ value : value)
    }

    return(
        <div className="flex flex-col bg-black h-screen text-gray-400 justify-center">
            <div className="text-center mx-96">
                <div className="mx-96 my-5">
                    <h1 className="text-8xl font-bold p-5 border border-gray-400">
                        {
                            loader == false ? 
                                '--' : 
                                formatedNumber(oldValueX.current)
                        }
                    </h1>
                </div>
                
                <button className={`${txtColor} ${bg} bg-blue-800 border-2 border-blue-900
                    p-3 rounded-xl hover:bg-blue-900 hover:text-gray-400`} 
                onClick={() => {setInitCounter((prevInitCounter) => prevInitCounter + 1)}}>
                    {loader == true ? 'Gerar Números' : 'Aguarde...'}
                </button>
                
                <div className="mx-96 my-5">
                    <h1 className="text-8xl font-bold p-5 border border-gray-400">
                        {
                            loader == false ? 
                                '--' : 
                                formatedNumber(oldValueY.current)
                        }
                    </h1>
                </div>
            </div>
        </div>
    )
}