import React from "react";
import Names from "../names/Names";
import {Counter} from "../Counter/Counter";
import Name from "../names/name/Name";

export const Shop = (pros:any) => {
    const names = ['Liam','Rayna','Charlie','names list'];
    return (
      <>
          <Name name={'just name component'} >
                {/*this is Name children*/}
                <Counter/>

          </Name>
<Name name={'just name component'} >
                {/*this is Name children*/}
                <Counter/>

          </Name>

          <Names names={['shop1','shop2','shop3']}>
                this is Names children
                this is Names children
                <Counter/>

          </Names>

      </>


    );
}