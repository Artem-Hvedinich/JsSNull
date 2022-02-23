import React, {useState, KeyboardEvent, useEffect} from "react";
import s from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select = (props: SelectPropsType) => {
    const [active, setActive] = useState(false)
    const [hoveredElement, setHoveredElement] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElement)

    useEffect(() => {
        setHoveredElement(props.value)
    }, [props.value])

    const toggleItems = () => setActive(!active)
    const onClickItems = (value: any) => {
        props.onChange(value);
        toggleItems()
    }
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        for (let i = 0; i < props.items.length; i++) {
            if (e.key === 'ArrowDown') {
                if (props.items[i].value === hoveredItem?.value) {
                    if (props.items[i + 1]) {
                        props.onChange(props.items[i + 1].value)
                        return
                    }
                }
            }
            if (e.key === 'ArrowUp') {
                if (props.items[i].value === hoveredItem?.value) {
                    if (props.items[i - 1]) {
                        props.onChange(props.items[i - 1].value)
                        return
                    }
                }
            }
            if(!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }

    return (
        <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
            <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
            {active &&
                <div className={s.items}>
                    {props.items.map(i => <div
                        onMouseEnter={() => {
                            setHoveredElement(i.value)
                        }}
                        className={s.item + ' ' + (hoveredItem === i ? s.selected : '')}
                        key={i.value}
                        onClick={() => {
                            onClickItems(i.value)
                        }}
                    >
                        {i.title}
                    </div>)}
                </div>}
        </div>
    )
}