import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { selectUser } from "@/redux/user-slice";
import { useSelector } from "react-redux";
import api from "@/services.api";

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

export const fetchHotel =
  createAsyncThunk('hotel/fetchHotel', async (slug: string) => {
    const { token } = useSelector(selectUser);
    const response = await api.get(`adm/clientes/slug/${slug}`, {
        headers: { 'Authorization': `Bearer ${token}` }
    });
    return response.data;
  });


let initialState = {} as IHotel;

const storage = localStorage.getItem('inform-cloud:hotel');

if (storage) {
    initialState = {...initialState, ...JSON.parse(storage)};
};

export const slice = createSlice({
    name: 'hotel', 
    initialState,
    reducers: {
        clear (state) { // clear não precisa de payload
            localStorage.removeItem('inform-cloud:hotel');
            initialState = {} as IHotel;
            state = initialState;
            // return initialState;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchHotel.fulfilled, (state, action) => {
            state = action.payload;
        })
        //, builder.addCase(fetchHotel.rejected, (state, action) => {
        //     state.loading = false;
        // })
    }

})

export const { clear } = slice.actions;

export const selectHotel = (state: any) => state.hotel;

export default slice.reducer;
