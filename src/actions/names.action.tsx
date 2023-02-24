import {appConstants} from "../headers/appConstants";

export const addName = (newName: string) => {
    return {
        type: appConstants.ADD_NAME,
        payload: newName
    };
};