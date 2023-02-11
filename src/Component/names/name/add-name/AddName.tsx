import {Component, SyntheticEvent} from "react";
import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from "redux";
// import {addName} from "../../../actions/names.action";


class AddName extends Component<AddNameProps, AddNameState>{
/*  every component has a state object
    which is used to do state management

 */
    state = {
        newName: ''
    };
    newName: string = 'Default Value';
    // regular fn, ES5 fn
    //In Child component, receive data through props
    changeHandler = ((event: SyntheticEvent)=>{

        const newName  = (event.target as HTMLInputElement).value;
        // this.render();
        // will force react to re-render
        // this.forceUpdate();

        // we call setState to update state
        this.setState({
            // newName: newName
            newName
        })
    });
    submitHandler = (event: any)=>  {
        // **** SyntheticEvent
        //          -> stopPropagation(),preventDefault()
        //  a cross-browser wrapper around the browser’s native event. except the events work identically across all browsers.
        //这是一个围绕浏览器的本机事件的跨浏览器包装器。它与浏览器的本机事件具有相同的界面，包括stopPropagation()和preventDefault()，除了事件在所有浏览器中的工作方式相同。

        event.preventDefault();

        this.props.addName(this.state.newName);
    };

    render(){
        //
        return(
            // onSubmit -> listen event
            <form onSubmit={this.submitHandler} className="form-group">
                <input value={this.state.newName} onChange={this.changeHandler} className="form-control" type = "text"/>
                <button className="btn btn-dark">Add Name </button>
            </form>
        );
    }
}

// function mapDispatchToProps(dispatch: Dispatch){
//     // if dont need state !!!没听懂这里 14:17, 如果mapStateToProps没有的话？
//     // addName: fn -> addName in names.action
//     // {addName} will be merged with props
//     return bindActionCreators({addName: addName},dispatch);
// }


// export default AddName;
// export default connect(null,mapDispatchToProps)(AddName);
export default AddName;


interface AddNameProps{
    // addName: (newName: string) => void;
    addName: (newName: string) => {};
}
interface AddNameState{
    newName: string
}

/*
why we use  event.preventDefault(); ?
 */