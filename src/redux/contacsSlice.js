import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";


const contacsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: {
            items: [],
            loading: false,
            error: null
        },
        filters: {
            name: ''
        },
    },
    reducers: {
        setFilter: (state, action) => {
            state.filters.name = action.payload
            },
        },
    
    extraReducers: builder => builder
        .addCase(fetchContacts.pending, (state, action) => {
            state.loading = true;
            state.error = false;
         })
        .addCase(fetchContacts.fulfilled, (state, action) => {
            state.loading = false;
            state.contacts.items = action.payload;
         })
        .addCase(fetchContacts.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
        })
    
        .addCase(deleteContact.pending, (state, action) => {
            state.loading = true;
            state.error = false;
         })
        .addCase(deleteContact.fulfilled, (state, action) => { 
            state.contacts.items = state.contacts.items.filter((item) => item.id !== action.payload.id );
            state.loading = false;
        })
        .addCase(deleteContact.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
         })
    
        .addCase(addContact.pending, (state, action) => {
            state.loading = true;
            state.error = false;
        })
        .addCase(addContact.fulfilled, (state, action) => { 
            state.contacts.items.push(action.payload)
        })
        .addCase(addContact.rejected, (state, action) => { 
            state.loading = false;
            state.error = true;
        })
    
    
    
    
});

export const { setFilter } = contacsSlice.actions;


export const contactsReducer = contacsSlice.reducer;