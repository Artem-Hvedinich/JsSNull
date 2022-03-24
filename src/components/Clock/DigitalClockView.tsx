import React from "react";
import {ClockViewPropsType} from "./Clock";

export const get2digitsString = (num: number) => num < 10 ? "0" + num : num

export const DigitalClockView: React.FC<ClockViewPropsType> = ({data}) => {
    return <div>
        <div>Digital</div>
        <span>{get2digitsString(data.getHours())}</span>
        :
        <span>{get2digitsString(data.getMinutes())}</span>
        :
        <span>{get2digitsString(data.getSeconds())}</span>
    </div>
}