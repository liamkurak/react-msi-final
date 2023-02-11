import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Products from "./Component/products/Products";
import Names from "./Component/names/Names";


const names = ['App-Names!!','Liam','Rayna','Charlie','names list'];

const products = [
    // tslint:disable-next-line:max-line-length
    { name: 'iPhone', brand: 'Apple', price: 100, stock: 22, image: 'https://d2um6umu4gwssp.cloudfront.net/apple/wp-content/uploads/2016/06/iphone-1.jpg'},
    { name: 'iPhone3G', brand: 'Apple', price: 200, stock: 33, image: 'https://cdn.mos.cms.futurecdn.net/005cd70c02c2c8bd7b07d3cfeca82a3a.jpg'},
    { name: 'iPhone3GS', brand: 'Apple', price: 300, stock: 11, image: 'https://technabob.com/blog/wp-content/uploads/2009/06/iphone_3gs.jpg'},
    { name: 'iPhone4', brand: 'Apple', price: 400, stock: 22, image: 'https://www.imore.com/sites/imore.com/files/field/image/2014/03/topic_iphone_4.png'},
    { name: 'iPhone4S', brand: 'Apple', price: 500, stock: 33, image: 'https://www.imore.com/sites/imore.com/files/field/image/2014/03/topic_iphone_4s.png'},
    { name: 'iPhone5', brand: 'Apple', price: 600, stock: 11, image: 'https://www.imore.com/sites/imore.com/files/field/image/2014/03/topic_iphone_5.png'},
    { name: 'iPhone5C', brand: 'Apple', price: 700, stock: 222, image: 'https://www.notebookcheck.net/uploads/tx_nbc2/N48-Blue.jpg'},
    { name: 'iPhone5S', brand: 'Apple', price: 800, stock: 333, image: 'https://www.imore.com/sites/imore.com/files/field/image/2014/03/topic_iphone_5s.png'},
    { name: 'iPhone6', brand: 'Apple', price: 900, stock: 111, image: 'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP705/SP705-iphone_6-mul.png'}
];


// class App extends React.Component<AppProps, AppState>{
class App extends React.Component<any, any>{

  render() {
    return (
        <>
        <main>
            <Header/>
            {/*{this.props.children}*/}
            <Names names={names}> child </Names>
            <Products products ={products}/>
        </main>
        </>
    );
  }
}


export default App;

interface AppProps{
  children: any,
    // name: string [];
}
interface AppState{}
