import {Component, SyntheticEvent} from "react";
import {addName} from "../../../actions/names.action";
import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from "redux";

class AddName extends Component<AddNameProps, AddNameState>{
// class AddName extends Component<any, any>{
    state = {
        newName: ''
    };
    newName: string = 'Default Value';
    changeHandler = ((event: SyntheticEvent)=>{
        const newName  = (event.target as HTMLInputElement).value;
        // we call setState to update state
        this.setState({
            // newName: newName
            newName
        })
    });

    submitHandler = (event: any)=>  {
        // **** SyntheticEvent
        //          -> stopPropagation(),preventDefault()
        event.preventDefault();
        // *? why use this?
        this.props.addName(this.state.newName);
    };
    render(){
        return(
            <form onSubmit={this.submitHandler} className="form-group">
                <input
                    value={this.state.newName}
                    onChange={this.changeHandler}
                    className="form-control"
                    type = "text"
                />
                <button className="btn btn-dark"> Add Name </button>
            </form>

        );
    }
}

function mapDispatchToProps(dispatch: Dispatch){
    // if dont need state !!!没听懂这里 14:17, 如果mapStateToProps没有的话？
    // addName: fn -> addName in names.action
    // {addName} will be merged with props
    return bindActionCreators({addName: addName},dispatch);
}

// export default AddName;
export default connect(null,mapDispatchToProps)(AddName);
// export default AddName;

interface AddNameProps{
    // addName: (newName: string) => void;
    addName: (newName: string) => {};
}
interface AddNameState{
    newName: string
}

// this goes ./action/names.action
// const addName = (newName: string)=> {
//     names.push(newName);
//     // *? why use forceUpdate to update state? cannot directly updates states?
//     // this.forceUpdate();
// };
