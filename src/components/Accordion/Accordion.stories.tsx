import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import Accordion from "./Accordion";

export default {
    title: 'Accordion stories',
    component: Accordion
}
const callback = action('Accordion mode change event fired')
const onClickCallback = action('some item ')
export const CollapsedMode = () => <Accordion onClick={onClickCallback} items={[]} titleValue={'Menu'} collapsed={true}
                                              onChange={callback}/>
export const UncollapsedMode = () =>
    <Accordion
        items={[{title: 'Artem', value: 1},
            {title: 'Dima', value: 2},
            {title: 'Kate', value: 3},
            {title: 'Joy', value: 4}]}
        titleValue={'Users'}
        collapsed={false} onChange={callback}
        onClick={onClickCallback}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion
        items={[{title: 'Artem', value: 1},
            {title: 'Dima', value: 2},
            {title: 'Kate', value: 3},
            {title: 'Joy', value: 4}]}
        titleValue={'Title'} collapsed={value}
        onChange={() => setValue(!value)}
        onClick={onClickCallback}/>
}
