import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IUser {
    id     : number;
    nome   : string;
    token  : string;
    logado?: boolean;
}

const initialState: IUser = {
    id    : 0,
    nome  : '',
    token : '',
    logado: false,
}

export const slice = createSlice({
    name: 'user', 
    initialState,
    reducers: {
        login(state, action: PayloadAction<IUser>) {
            return {
                ...state, 
                id     : action.payload.id,
                nome   : action.payload.nome,
                token  : action.payload.token,
                logado : true,
            }
        },
        logout(state) { // logout não precisa de payload
            return {...state, ...initialState}
        }
    }
})

export const { login, logout } = slice.actions;

export const selectUser = (state: any) => state.user;

export default slice.reducer;
