import React from "react";
import {ClockViewPropsType} from "./Clock";
import s from './AnalogClockView.module.css'

export const AnalogClockView: React.FC<ClockViewPropsType> = ({data}) => {

    const secondsStyle = {
        transform: `rotate(${data.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${data.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${data.getHours() * 30}deg)`
    };

    return (
        <div className={s.clock}>
            <div className={s["analog-clock"]}>
                <div className={`${s.dial} ${s.seconds}`} style={secondsStyle}/>
                <div className={`${s.dial} ${s.minutes}`} style={minutesStyle}/>
                <div className={`${s.dial} ${s.hours}`} style={hoursStyle}/>
            </div>
        </div>
    )
}