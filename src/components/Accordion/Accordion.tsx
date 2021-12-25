import React from "react";


function Accordion() {
    console.log('Accordion rendering')
    return (
        <div>
            <AccordionTitle titel={'Меню'}/>
            <AccordionTitle titel={'Vsar'}/>
            <AccordionBody/>
        </div>
    )
}

function AccordionTitle(props:any) {
    console.log('AccordionTitle rendering')
    return <h3>{props.titel}</h3>
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