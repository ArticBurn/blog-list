import { useEffect, useState } from "react";

const Tick = () => {
    const [time, setTime] = useState();

    useEffect(() => {
        const timeInterval = setTimeout(() => {
            setTime(new Date().toLocaleString())
        }, 1000);

        return () => {
            clearInterval(timeInterval)
        }
    }, [time])

    return (
        <h1>{time}</h1>
    )
}

export default Tick;