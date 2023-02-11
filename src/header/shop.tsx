import React from "react";
import Names from "../Component/names/Names";
import {Counter} from "../Component/Counter/Counter";
import Name from "../Component/names/name/Name";

export const Shop = (pros:any) => {
    const names = ['Liam','Rayna','Charlie','names list'];
    return (
      <>
          <Name name={'just name component'} >
                {/*this is Name children*/}
              {names}
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