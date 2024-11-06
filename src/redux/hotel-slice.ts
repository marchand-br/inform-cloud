import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/services.api";
import { emptyObject } from "@/lib/utils";

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

export const fetchHotel = createAsyncThunk('hotel/fetchHotel', async (slug: string) => {
    const response = await api.get(`adm/clientes/slug/${slug}`, {
        headers: { 
            'secret': import.meta.env.VITE_APP_SECRET,                    
        }
    });

    if (emptyObject(response?.data))
        throw new Error(`Hotel (${slug}) não localizado.`);

    if (response.data.ativo !== "S")
        throw new Error(`Hotel (${slug}) inativo.`);

    if (response.data.bloqueado === "S")
        throw new Error(`Hotel (${slug}) bloqueado.`);

    return {...response.data};
})

type  TStatus = 'idle' | 'loading' | 'succeeded' | 'failed';

type THotelState = {
    data   : IHotel;
    status : TStatus;
    error  : string | null | undefined;
}

const initialState: THotelState = {
    data   : {} as IHotel,
    status : 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed',
    error  : null,
}

const storage = localStorage.getItem('inform-cloud:hotel');

if (storage)
    initialState.data = JSON.parse(storage)

export const slice = createSlice({
    name: 'hotel', 
    initialState,
    reducers: {
        clearHotel (state) { // clear não precisa de payload
            localStorage.removeItem('inform-cloud:hotel');
            initialState.data = {} as IHotel;
            state = initialState;
            return state;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchHotel.pending, (state) => {
                state.status = 'loading';                
            })
            .addCase(fetchHotel.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
                localStorage.setItem('inform-cloud:hotel', JSON.stringify(state.data));
        })
            .addCase(fetchHotel.rejected, (state, action) => {
                state.status = 'failed';
                state.data = initialState.data;
                state.error = action.error.message;               
                localStorage.removeItem('inform-cloud:hotel');
        })
    } 
})


export const { clearHotel, setHotel } = slice.actions;

export const selectHotel = (state: any) => state.hotel.data;
export const getHotelStatus = (state: any) => state.hotel.status;
export const getHotelError = (state: any) => state.hotel.error;

export default slice.reducer;
