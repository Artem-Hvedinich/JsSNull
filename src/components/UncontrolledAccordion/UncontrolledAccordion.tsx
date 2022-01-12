import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}
const UncontrolledAccordion = (props: AccordionPropsType) => {
    console.log('Accordion rendering')

    let [collapsed, setCollapsed] = useState(true)

    return <div>
        <AccordionTitle title={props.titleValue}/>
        <button onClick={() => {
            !collapsed ? setCollapsed(true) : setCollapsed(false)
        }}>
            TOGGLE
        </button>
        {!collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
}
const AccordionTitle = (props: AccordionTitlePropsType) => {
    console.log('AccordionTitle rendering')
    return <h3>{props.title}</h3>
}


const AccordionBody = () => {
    console.log('AccordionBody rendering')
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
    </ul>
}

export default UncontrolledAccordion;