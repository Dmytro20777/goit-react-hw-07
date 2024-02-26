import { createSelector } from 'reselect';

export const selectContacts = state => state.contacts; 

export const selectFilter = state => state.filters.name;

const selectContactsItems = state => selectContacts(state).items;
const selectFilterValue = state => selectFilter(state);

export const visibleContacts = createSelector(
  [selectContactsItems, selectFilterValue],
  (items, filter) => {
    return items.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));
  }
);