import React, {useState} from "react";

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export const UncontrolledRating = (props: RatingPropsType) => {
    console.log('Rating rendering')

    let [selected, setSelected] = useState(0)

    return (
        <div>
            <button onClick={() => setSelected(0)}>
                0
            </button>
            <Star value={1} selected={selected}/>
            <button onClick={() => setSelected(1)}>
                1
            </button>
            <Star value={2} selected={selected}/>
            <button onClick={() => setSelected(2)}>
                2
            </button>
            <Star value={3} selected={selected}/>
            <button onClick={() => setSelected(3)}>
                3
            </button>
            <Star value={4} selected={selected}/>
            <button onClick={() => setSelected(4)}>
                4
            </button>
            <Star value={5} selected={selected}/>
            <button onClick={() => setSelected(5)}>
                5
            </button>
        </div>
    )
}

type StarPropsType = {
    selected: number
    value: number
}

const Star = (props: StarPropsType) => {
    if (props.selected >= props.value) {
        return <span><b>Star</b> </span>
    } else {
        return <span>Star </span>
    }
}

export default UncontrolledRating;