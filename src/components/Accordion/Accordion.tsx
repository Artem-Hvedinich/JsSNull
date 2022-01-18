import React from "react";


type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void

}
const Accordion = (props: AccordionPropsType) => {
    return <div>
        <AccordionTitle title={props.titleValue}
                        onChange={props.onChange}/>
        {!props.collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}
const AccordionTitle = (props: AccordionTitlePropsType) => {
    return <h3 onClick={props.onChange}>{props.title}</h3>
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

export default Accordion;