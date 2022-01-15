import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";
import AppTitle from "./components/AppTitle/AppTitle"
import OnOff from "./components/onOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";


function App() {
    console.log('App rendering')


    return (
        <div>
            <AppTitle title={"This is App component"}/>
            <AppTitle title={"My friends"}/>
            {/*Article 1*/}
            {/*<Accordion titleValue={'Menu'} collapsed={false}/>*/}
            {/*Article 2*/}
            <hr/>
            <hr/>
            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledAccordion titleValue={'User'}/>
            <hr/>
            <hr/>
            <OnOff/>
            <hr/>
            <hr/>
            <UncontrolledRating value={3}/>
        </div>
    )
}

export default App