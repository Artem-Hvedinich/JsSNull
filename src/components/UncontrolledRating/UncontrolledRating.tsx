import React, {useState} from "react";

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export const UncontrolledRating = (props: RatingPropsType) => {
    console.log('Rating rendering')

    let [selected, setSelected] = useState()

    return (
        <div>
            <Star selected={props.value > 0}/>
            <button onClick={
                () => {
                    !selected ? setSelected(0) : setSelected(true)
                }}>
                1
            </button>
            <Star selected={props.value > 1}/>
            <button>2</button>
            <Star selected={props.value > 2}/>
            <button>3</button>
            <Star selected={props.value > 3}/>
            <button>4</button>
            <Star selected={props.value > 4}/>
            <button>5</button>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
}

const Star = (props: StarPropsType) => {
    if (props.selected === true) {
        return <span><b>Star</b> </span>
    } else {
        return <span>Star </span>
    }
}

export default UncontrolledRating;