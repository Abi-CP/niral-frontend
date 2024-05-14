import { writable } from 'svelte/store';

const initialState = {
    pending: false,
    permitID: ''
  };

export const pendingPayment = writable(initialState);