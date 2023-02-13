import {appConstants} from "../Header/appConstants";

export const names = ['Liam','Rayna','Charlie','Using Reducer now'];
// set default value of state to names.
export const namesReducer = (state =  names, action: NamesReducerAction) => {
    if (action.type ===  appConstants.ADD_NAME){
        // ES6 make a copy [...sate,pay] -> make a copy : from()
        return [...state, action.payload];
    }
    return state;
};

interface NamesReducerAction{
    type: string;
    payload: string;
}