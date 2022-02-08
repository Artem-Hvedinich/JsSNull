import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Rating, {RatingValueType} from "./Rating";

export default {
    title: 'Rating stories',
    component: Rating
}

export const EmptyStars = () => <Rating value={0} onClick={x => x}/>
export const RatingStars1 = () => <Rating value={1} onClick={x => x}/>
export const RatingStars2 = () => <Rating value={2} onClick={x => x}/>
export const RatingStars3 = () => <Rating value={3} onClick={x => x}/>
export const RatingStars4 = () => <Rating value={4} onClick={x => x}/>
export const RatingStars5 = () => <Rating value={5} onClick={x => x}/>
export const ChangeRating = () => {
    const [rating, setRating] = useState<RatingValueType>(3)
    return <Rating value={rating} onClick={setRating}/>
}