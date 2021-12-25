import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";

function App() {
    console.log('App rendering')
    return (
        <div>
            <AppTitle title={"This is App component"}/>
            <AppTitle title={"My friends"}/>
            Article 1
            <Rating value={4}/>
            <Accordion titleValue={'Menu'}/>
            <Accordion titleValue={'Users'}/>
            Article 2
            <Rating value={3}/>
        </div>
    )
}

type AppTitlePropsType = {
    title: string
}

function AppTitle(props: AppTitlePropsType) {
    console.log('AppTitle rendering')
    return <h1>{props.title}</h1>
}

export default App;
