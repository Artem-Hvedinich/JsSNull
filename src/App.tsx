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
            <Rating value={3}/>
            <Accordion/>
            Article 2
            <Rating value={4}/>
        </div>
    )
}

function AppTitle(props:any) {
    console.log('AppTitle rendering')
    return <h1>{props.title}</h1>
}

export default App;
