import React from 'react';
import './App.css';
import Header from "./Header/Header";
import GetData from "./Component/GetData/GetData";



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
        <main>
            {this.props.children}
            {/*<AddName addName={this.addName}/>*/}
            {/*<Names names={names}/>*/}
            {/*<Products products ={products}/>*/}
        </main>

            {/*get date:{GetData}*/}
            {/*{console.log( GetData)}*/}

        </>
    );
  }
}


export default App;

interface AppProps{
  children: any,
}
interface AppState{}
