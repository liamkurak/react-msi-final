import React from 'react';
import Name from "./name/Name";
import css from './Names.module.scss';
import {Counter} from "../Counter/Counter";


const Names = (props: NamesProps) =>{
// const Names = (pros: any) =>{


    return(
        // <Name/>
        <div className={css.Names}>
            {/*<Name name = 'A' children={'children A'}/>*/}
            {/*<Name name = 'B' children={'children B'}/>*/}
            {/*<Name name = 'C' children={'children C'}/>*/}
            {
               props.names.map((n: string) => (
                <Name name = { n } key={ n }>
                      {/*There is children props*/}
                    {Math.round(Math.random()* 120 ).toString()}

                </Name>
                ))
            }


        </div>
    );

};

//
// function mapStateToProps(reduxState: ReduxStateModel){
//     // returned object will be merged with component props
//     return{
//         names: reduxState.names
//     };
// }

export default Names;
// export default connect(mapStateToProps)(Names);


interface NamesProps{
    names: string[]
    // children: string[];
    children: any;
}