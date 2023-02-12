import React from 'react';
import Name from "./name/Name";
import css from './Names.module.scss';
import {connect} from "react-redux";
import {ReduxStateModel} from "../../shared/models/ReduxStateModel";

const Names = (props: NamesProps) =>{
// const Names = (props: any) =>{
    return(
        <div className={css.Names}>
            {
                props.names?.map((n: string) => (
                <Name name = { n } key={ n }>
                      {/*There is children props*/}
                    {Math.round(Math.random()* 120 ).toString()}
                </Name>
                ))
            }
        </div>
    );
};

function mapStateToProps(reduxState: ReduxStateModel){
    // returned object will be merged with component props
    return{
        names: reduxState.names
    };
}

// export default Names;
export default connect(mapStateToProps)(Names);


interface NamesProps{
    names: string[],
    children: any;
}