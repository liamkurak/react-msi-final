import React from 'react';
import './App.css';

import Header from "./header/Header";
import Names from "./names/Names";



class App extends React.Component<AppProps, AppState>{
  render() {
    return (
        <>
            <main>
            <Header/>
            {/*<Names/>*/}
            {this.props.children}
        </main>
        </>
    );
  }
}


export default App;

interface AppProps{
  children: any,
}
interface AppState{}
