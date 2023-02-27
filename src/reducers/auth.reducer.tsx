


// for there state is state
import {AxiosResponse} from "axios";
import {appConstants} from "../headers/appConstants";

export const authReducer = (state = null, action: ActionType) => {
    switch (action.type){
        case appConstants.LOGIN:
            console.log('authReducer case');
            console.log(action.payload);
            return action.payload.data.success? action.payload.data.user : null;

        default:
            // console.log('authReducer case ->  default');
            // console.log(state,action.payload);
            return state;
    }
}

interface ActionType {
    type: string;
    payload: AxiosResponse<{success: boolean, user?: {}}>
}