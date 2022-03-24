import React, {useEffect, useState} from "react";
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

type PropsType = {
    mode?: 'digital' | 'analog'
}
export type ClockViewPropsType = {
    data: Date
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

    let view;

    switch (props.mode) {
        case 'analog':
            view = <AnalogClockView data={data}/>
            break
        case 'digital':
        default:
            view = <DigitalClockView data={data}/>
    }

    return <div>
        {view}
    </div>
}





