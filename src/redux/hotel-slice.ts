import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IHotel {
    id_hotel  : number;
    slug      : string;
    nome      : string;
    cnpj      : string;
    endereco  : string;
    cep       : string;
    cidade    : string;
    uf        : string;
    email     : string;
    telefone  : string;
    contato   : string;
    dt_ult_pagto: Date;
    bloqueado : string;
    ativo     : string;
    cod_tab_preco: number;
}


let initialState = {} as IHotel;

const storage = localStorage.getItem('inform-cloud:hotel');

if (storage) {
    initialState = {...JSON.parse(storage)};
};

export const slice = createSlice({
    name: 'hotel', 
    initialState,
    reducers: {
        clear (state) { // clear não precisa de payload
            localStorage.removeItem('inform-cloud:hotel');
            initialState = {} as IHotel;
            state = initialState;
            return state;
        },
        setHotel (state, action: PayloadAction<IHotel>) {
            state = {
                ...state, 
                ...action.payload
            }
            
            localStorage.setItem('inform-cloud:hotel', JSON.stringify(state));
            return state;
        }
    }
})

export const { clear, setHotel } = slice.actions;

export const selectHotel = (state: any) => state.hotel;

export default slice.reducer;
