import React from 'react';
import './App.css';

import Header from "./header/Header";

import logo from './logo.svg';
import { Counter } from './Counter/Counter';


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
