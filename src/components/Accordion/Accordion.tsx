import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}
// type AccordionBodyProps = {
//
// }


function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')
    if (props.collapsed === true)
        return <div>
            <AccordionTitle title={props.titleValue}/>
        </div>
    return <div>
        <AccordionTitle title={props.titleValue}/>
        <AccordionBody/>
    </div>

}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return <h3>{props.title}</h3>
}

function AccordionBody() {
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