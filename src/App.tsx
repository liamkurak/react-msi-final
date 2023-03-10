import React from 'react';
import './App.css';
import Header from "./headers/Header";

class App extends React.Component<AppProps, AppState>{
// class App extends React.Component<any, any>{

    // this move to index.tsx since we use Router
    // addName = (newName: string)=> {
    //     names.push(newName);
    //     // *? why use forceUpdate to update state? cannot directly updates states?
    //     this.forceUpdate();
    // };

    render() {
    return (
        <>
            <Header/>
            <main> {this.props.children} </main>
        </>
    );
  }
}

export default App;

interface AppProps{
  children: any,
}
interface AppState{}
