import React, {useState} from 'react';
import './App.module.css';
import Accordion from "./components/Accordion/Accordion";
import Rating, {RatingValueType} from "./components/Rating/Rating";
import AppTitle from "./components/AppTitle/AppTitle"
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";
import s from './App.module.css'
import UncontrolledOnOff from "./UncontrolledOnOff/UncontrolledOnOff";

function App() {
    console.log('App rendering')

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div className={s.item}>
            <AppTitle title={"This is App component"}/>
            <hr/>

            <UncontrolledAccordion titleValue={'UncontrolledAccordion'}/>

            <Accordion titleValue={'Accordion'} collapsed={accordionCollapsed}
                       onChange={() => {
                           setAccordionCollapsed(!accordionCollapsed)
                       }}/>
            <hr/>
            {/*<OnOff On={switchOn} onChange={setSwitchOn}/>*/}

            <hr/>
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
            <hr/>
            {/*<UncontrolledRating/>*/}
            <hr/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
        </div>
    )
}

export default App