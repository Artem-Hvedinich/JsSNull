import React, {useState} from 'react';
import OnOff from "./OnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'OnOff stories',
    component: OnOff
}
const callback = action('On or Off clicked')
export const OnMode = () => <OnOff On={true} onChange={callback}/>
export const OffMode = () => <OnOff On={false} onChange={callback}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <OnOff On={value} onChange={setValue}/>
}
