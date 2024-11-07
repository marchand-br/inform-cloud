import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IUser {
    id     : number;
    nome   : string;
    email  : string;
    token  : string;
    admin  : boolean;
}

let initialState: IUser = {
    id    : 0,
    nome  : '',
    email : '',
    token : '',
    admin : false,
}

const storage = localStorage.getItem('inform-cloud:user');

if (storage) {
    initialState = {...initialState, ...JSON.parse(storage)};
};

export const slice = createSlice({
    name: 'user', 
    initialState,
    reducers: {
        login(state, action: PayloadAction<IUser>) {
            state = {
                ...state, 
                id     : action.payload.id,
                nome   : action.payload.nome,
                email  : action.payload.email,
                token  : action.payload.token,
                admin  : action.payload.admin,
            }
            
            localStorage.setItem('inform-cloud:user', JSON.stringify(state));
            return state;
        },
        logout(state) { // logout não precisa de payload
            localStorage.removeItem('inform-cloud:user');
            localStorage.removeItem('inform-cloud:hotel');
            state = initialState;
            return {...state, ...initialState}
        }
    }
})

export const { login, logout } = slice.actions;

export const selectUser = (state: any) => state.user;

export default slice.reducer;
