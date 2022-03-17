import React, {useMemo, useState} from 'react';

export default {
    title: 'useState demo'
}

function generationValue() {
    console.log("generationValue")
    return 1
}

export const Example1 = () => {
    console.log("Example1")
    const [count, setCount] = useState(generationValue)

    return <>
        <button onClick={() => setCount(state => state + 1)}>+</button>
        {count}
    </>
}

