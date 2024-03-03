import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";


const handlePending = (state) => {
    state.loading = true;
    state.error = false;
};

const handleFulfilled = (state, action) => {
    state.loading = false;
};

const handleRejected = (state, action) => {
    state.loading = false;
    state.error = true;
};

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
            state.filters.name = action.payload;
        },
    },
    
    extraReducers: builder => builder
        .addCase(fetchContacts.pending, handlePending)
        .addCase(fetchContacts.fulfilled, (state, action) => {
            handleFulfilled(state, action);
            state.contacts.items = action.payload;
        })
        .addCase(fetchContacts.rejected, handleRejected)
    
        .addCase(deleteContact.pending, handlePending)
        .addCase(deleteContact.fulfilled, (state, action) => { 
            handleFulfilled(state, action);
            state.contacts.items = state.contacts.items.filter((item) => item.id !== action.payload.id );
        })
        .addCase(deleteContact.rejected, handleRejected)
    
        .addCase(addContact.pending, handlePending)
        .addCase(addContact.fulfilled, (state, action) => { 
            handleFulfilled(state, action);
            state.contacts.items.push(action.payload);
        })
        .addCase(addContact.rejected, handleRejected),
});

export const { setFilter } = contacsSlice.actions;

export const contactsReducer = contacsSlice.reducer;