import React from 'react';
import './App.css';

import Header from "./header/Header";
import Names from "./names/Names";


const names = ['Liam','Rayna','Charlie','names list'];

class App extends React.Component<AppProps, AppState>{

  render() {
    return (
        <>
            <main>
            <Header/>
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
