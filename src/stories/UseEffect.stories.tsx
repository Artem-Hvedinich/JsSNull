import React, {useEffect, useMemo, useState} from 'react';
import * as handlebars from "handlebars";

export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {
    const [fake, setFake] = useState(1)
    const [count, setCount] = useState(1)
    console.log('SimpleExample')

    useEffect(() => {
        console.log('useEffect every render')
        document.title = count.toString()
    })
    useEffect(() => {
        console.log('useEffect first render')
        document.title = count.toString()
    }, [])
    useEffect(() => {
        console.log('useEffect first render and every count change')
        document.title = count.toString()
    }, [count])

    return <>
        Hello,{count} {fake}
        <button onClick={() => setFake(state => state + 1)}>fake+</button>
        <button onClick={() => setCount(state => state + 1)}>count+</button>
    </>
}

export const SetTimeoutExample = () => {
    const [fake, setFake] = useState(1)
    const [count, setCount] = useState(1)
    console.log('SetTimeoutExample')

    // useEffect(() => {
    //     setTimeout(() => {
    //         console.log('setTimeout')
    //         document.title = count.toString()
    //     }, 1000)
    // }, [])


    useEffect(() => {
        const IntervalID = setInterval(() => {
            console.log('setInterval')
            setCount(state => state + 1)
        }, 1000)

        return () => {
            clearInterval(IntervalID)
            console.log('clearInterval')
        }
    }, [])


    return <>
        Hello,count:{count} - face:{fake}
        {/*<button onClick={() => setFake(state => state + 1)}>fake+</button>*/}
        {/*<button onClick={() => setCount(state => state + 1)}>count+</button>*/}
    </>
}

export const ResetEffectExample = () => {
    const [count, setCount] = useState(1)
    console.log('Simple Example')

    useEffect(() => {
        console.log('Effect occurred' + count)

        return () => {
            console.log('RESET EFFECT' + count)
        }
    }, [count])

    const inc = () => setCount(count + 1)
    return <>
        Hello, count: {count}
        <button onClick={inc}>+
        </button>
    </>
}

export const KeyTrackerExample = () => {
    const [text, setText] = useState<string>('')
    console.log('Component render with' + text)

    useEffect(() => {
            const handler = (e: KeyboardEvent) => {
                console.log(e.key)
                setText(text + e.key)
            }
            window.document.addEventListener('keypress', handler)
            return () => {
                window.document.addEventListener('keypress', handler)
            }
        }, []
    )

    return <>
        Hello, text: {text}
    </>
}