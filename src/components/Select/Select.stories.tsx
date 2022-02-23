import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Select} from "./Select";

export default {
    title: 'Select stories',
    component: Select
}
const onClickCallback = action('some item ')

export const SelectStories = () => {
    const [value, setValue] = useState('2')
    return <>
        <Select value={value}
                onChange={setValue}
                items={[
                    {title: "Artem", value: '1'},
                    {title: "Vlad", value: '2'},
                    {title: "Kate", value: '3'},
                ]}/></>
}


export const SelectStories2 = () => {
    const [value, setValue] = useState(null)
    return <>
        <Select value={value}
                onChange={setValue}
                items={[
                    {title: "Artem", value: '1'},
                    {title: "Vlad", value: '2'},
                    {title: "Kate", value: '3'},
                ]}/></>
}