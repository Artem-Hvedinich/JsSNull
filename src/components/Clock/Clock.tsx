import React, {useEffect, useState} from "react";
import s from 'Clock.module.css'

const get2digitsString = (num: number) => num < 10 ? "0" + num : num

type PropsType = {
    mode?: 'digital' | 'analog'
}

export const Clock: React.FC<PropsType> = (props) => {
    const [data, setData] = useState(new Date())

    useEffect(() => {
        const IntervalId = setInterval(() => {
            console.log("tick")
            setData(new Date())
        }, 1000)

        return () => {
            clearInterval(IntervalId)
        }
    }, [])


    return <div>
        {props.mode === "digital" ?
            <div>
                <span>{get2digitsString(data.getHours())}</span>
                :
                <span>{get2digitsString(data.getMinutes())}</span>
                :
                <span>{get2digitsString(data.getSeconds())}</span>
            </div>
            : <div> Analog </div>
        }
    </div>
}

