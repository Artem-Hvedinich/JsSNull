import React from 'react';
import './App.css';

function App() {
    console.log('App rendering')
    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>
    )
}

function AppTitle() {
    console.log('AppTitle rendering')
    return <>This is App component</>
}

function Rating() {
    console.log('Rating rendering')
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    )
}

function Star() {
    console.log('Star rendering')
    return (
        <div>Star</div>
    )
}

function Accordion() {
    console.log('Accordion rendering')
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>
        </div>
    )
}

function AccordionTitle() {
    console.log('AccordionTitle rendering')
    return <div>
        <h3>Меню</h3>
    </div>
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
    </div>
}

export default App;
