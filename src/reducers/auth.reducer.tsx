


// for there state is state
import {AxiosResponse} from "axios";
import {appConstants} from "../Header/appConstants";

export const authReducer = (state = null, action: ActionType) => {
    switch (action.type){
        case appConstants.LOGIN:
            return action.payload.data.success? action.payload.data.user : null;

        default:
            return state;
    }
}


interface ActionType {
    type: string;
    payload: AxiosResponse<{success: boolean, user?: {}}>
}