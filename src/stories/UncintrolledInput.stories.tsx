import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Simulate} from "react-dom/test-utils";

export default {
    title: 'input',
}


// export const UncontrolledInput = () => <input/>
//
// export const TrackValueUncontrolledInput = () => {
//     const [value, setValue] = useState('')
//     const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
//         setValue(e.currentTarget.value)
//     }
//     return <><input onChange={onChangeInput} value={value}/>-{value}-</>
// }
//
// export const GetValueUncontrolledInputBeButtonPress = () => {
//     const [value, setValue] = useState('')
//     // const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
//     //     setValue(e.currentTarget.value)
//     // }
//     const inputRef = useRef<HTMLInputElement>(null)
//     const onClickButtonSave = () => {
//         const el = inputRef.current as HTMLInputElement
//         setValue(el.value)
//     }
//
//     return <><input ref={inputRef}/>
//         <button onClick={onClickButtonSave}>save</button>
//         -action value:{value}</>
// }
// export const ControlledInputWithFixedValue = () => <input value={'Hello'}/>

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <input value={parentValue} onChange={onChangeInput}/>
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)
    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return <input type={"checkbox"} checked={parentValue} onChange={onChangeInput}/>
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string|undefined>(undefined)
    const onChangeInput = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <select value={parentValue} onChange={onChangeInput}>
        <option>none</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Kiev</option>
    </select>

}



