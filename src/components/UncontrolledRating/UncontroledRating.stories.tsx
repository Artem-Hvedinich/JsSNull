import React, {useState} from 'react';
import UncontrolledRating from "./UncontrolledRating";
import {action} from "@storybook/addon-actions";

export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating
}
const callback = action('Rating changed ')

export const ChangeRating = () => <UncontrolledRating defaultValue={0} onChange={callback}/>
