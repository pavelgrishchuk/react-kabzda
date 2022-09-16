import React from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion'
import {Ratting} from "./components/Ratting/Ratting";

function Sum(a: number, b: number) {
    return (
        alert(a + b)
    )
}

//Sum(23,12);
//Sum(100,300);

function App() {
    console.log("App rendering")
    return (
        <div>
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"My friends"}/>
            Article 1
            <Ratting value={0}/>
            Article 2
            <Ratting value={1}/>
            <Ratting value={2}/>
            <Ratting value={3}/>
            <Ratting value={4}/>
            <Ratting value={5}/>
            <Accordion titleValue={"menuNumber 1"} collapsed={true}/>
            <Accordion titleValue={"menuNumber 2"} collapsed={false}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return (
        <h1>{props.title}</h1>
    );
}


export default App;
