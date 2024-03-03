import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts; 

export const selectFilter = state => state.contacts.filters.name;


const selectContactsItems = state => selectContacts(state).items;

export const visibleContacts = createSelector([selectContactsItems, selectFilter], (items, filter) => {
    return items.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));
})

