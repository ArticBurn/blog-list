import React, { useState, useEffect } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState('')
    const [colorsIndex, setColorsIndex] = useState(null)
    const colors = [
        "#008F68",
        "#6DB65B",
        "#4AAE9B",
        "#FAE042",
        "#EFBB35",
        "#DFA612"
    ]
    const changeColor = () => {
        let randomIndex = Math.random() * colors.length
        setColor(colors[Math.floor(randomIndex)])
        setColorsIndex(Math.floor(randomIndex))
    }

    const counterPlus = () => {
        setCount(x => x + 1)
    }

    useEffect(() => {
        const colors = [
            "#008F68",
            "#6DB65B",
            "#4AAE9B",
            "#FAE042",
            "#EFBB35",
            "#DFA612"
        ]
      setColor(colors[Math.floor(Math.random() * colors.length)])
      setColorsIndex('')
    }, [])
    
    return (
        <div className="flex justify-center flex-col">
            <h1 className="text-center text-2xl">useEffect Hook</h1>
            <div className='flex justify-center'>
                <button className="btn border-none w-44" onClick={changeColor} style={{ backgroundColor: color }}>{color} {
                    colorsIndex !== '' ? `- ${colorsIndex}` : colorsIndex
                }</button>
            </div>
            <div className='flex justify-center'>
                <button className="btn border-none w-44 mt-4" onClick={counterPlus} style={{ backgroundColor: "#008F68" }}>{count}</button>
            </div>
        </div>
    );
}

export default Counter;