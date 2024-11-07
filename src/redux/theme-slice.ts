import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// type TColor = 'blue' | 'orange' | 'red' | 'yellow' | 'green' | 'violet' | 'zinc';

export interface ITheme {
    color  : string;
    dark   : boolean;
    name   : string;
}

let initialState: ITheme = {
    color : 'light-blue',
    dark  : false,
    name  : 'blue'
}

const storage = localStorage.getItem('inform-cloud:theme');

if (storage) {
    initialState = {...initialState, ...JSON.parse(storage)};
};

export const slice = createSlice({
    name: 'theme', 
    initialState,
    reducers: {
        changeTheme(state, action: PayloadAction<ITheme>) {
            state = {
                ...state, 
                color : action.payload.color,
                dark  : action.payload.dark,
                name  : action.payload.name,
            }
            localStorage.setItem('inform-cloud:theme', JSON.stringify(state));
            return state;
        }
    }
})

export const { changeTheme } = slice.actions;

export const selectTheme = (state: any) => state.theme;

export default slice.reducer;
