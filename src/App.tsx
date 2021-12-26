import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";
import AppTitle from "./components/AppTitle/AppTitle"

function App() {
    console.log('App rendering')
    return (
        <div>
            <AppTitle title={"This is App component"}/>
            <AppTitle title={"My friends"}/>
            Article 1
            <Rating value={3}/>
            <Accordion titleValue={'Menu'} collapsed={false}/>
            <Accordion titleValue={'Users'} collapsed={false}/>
            Article 2
            <Rating value={3}/>
        </div>
    )
}

    export default App